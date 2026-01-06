document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.getElementById('cart-icon');
  const buttons = document.querySelectorAll('.btn-comprar');
  let count = parseInt(localStorage.getItem('scm_cart_count') || '0', 10) || 0;
  let items = JSON.parse(localStorage.getItem('scm_cart_items') || '[]');

  function setCount(n) {
    count = n;
    localStorage.setItem('scm_cart_count', String(count));
    if (cartIcon) cartIcon.setAttribute('data-count', String(count));
  }

  setCount(count);

  function pulseCart() {
    if (!cartIcon) return;
    cartIcon.classList.add('pop');
    setTimeout(() => cartIcon.classList.remove('pop'), 350);
  }

  function showToast(text) {
    const t = document.createElement('div');
    t.className = 'shop-toast';
    t.textContent = text;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('visible'));
    setTimeout(() => t.classList.remove('visible'), 1300);
    setTimeout(() => t.remove(), 1600);
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const name = btn.dataset.name || btn.textContent.trim();
      const price = parseFloat(btn.dataset.price || '0');
      items.push({ name, price });
      localStorage.setItem('scm_cart_items', JSON.stringify(items));
      setCount(items.length);
      pulseCart();
      showToast('Adicionado ao carrinho');
      renderCartModal();
    });
  });

  const cartModal = document.getElementById('cart-modal');
  if (cartIcon) cartIcon.addEventListener('click', () => { openCartModal(); });

  const filterCheckboxes = Array.from(document.querySelectorAll('.filter-checkbox'));
  const productCards = document.querySelectorAll('.product-card');
  const clearFiltersBtn = document.getElementById('clear-filters');

  function applyFilters(){
    const selected = filterCheckboxes.filter(cb => cb.checked).map(cb => (cb.dataset.category||'').toLowerCase());
    if(selected.length === 0){
      productCards.forEach(pc => pc.classList.remove('product-hidden'));
      return;
    }
    productCards.forEach(pc => {
      const pcat = (pc.dataset.category || '').toLowerCase();
      if(selected.includes(pcat)) pc.classList.remove('product-hidden'); else pc.classList.add('product-hidden');
    });
  }

  filterCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));
  if(clearFiltersBtn) clearFiltersBtn.addEventListener('click', ()=>{ filterCheckboxes.forEach(cb=>cb.checked=false); applyFilters(); });


  function openCartModal(){ if(!cartModal) return; cartModal.classList.remove('hidden'); cartModal.setAttribute('aria-hidden','false'); renderCartModal(); }
  function closeCartModal(){ if(!cartModal) return; cartModal.classList.add('hidden'); cartModal.setAttribute('aria-hidden','true'); }

  if(cartModal){
    cartModal.addEventListener('click', (e)=>{ if(e.target===cartModal) closeCartModal(); });
    const closeBtn = cartModal.querySelector('.cart-close');
    if(closeBtn) closeBtn.addEventListener('click', closeCartModal);
  }

  function formatBRL(n){ return 'R$ '+Number(n).toFixed(2).replace('.',','); }

  function renderCartModal(){
    if(!cartModal) return;
    const list = cartModal.querySelector('#cart-items');
    const totalEl = cartModal.querySelector('#cart-total');
    list.innerHTML = '';
    let total = 0;
    items.forEach((it, idx)=>{
      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML = `<span class="ci-name">${it.name}</span> <span class="ci-price">${formatBRL(it.price)}</span> <button class="ci-remove" data-idx="${idx}">Remover</button>`;
      list.appendChild(li);
      total += Number(it.price);
    });
    totalEl.textContent = formatBRL(total);
    list.querySelectorAll('.ci-remove').forEach(btn=> btn.addEventListener('click', ()=>{ const i = Number(btn.dataset.idx); items.splice(i,1); localStorage.setItem('scm_cart_items', JSON.stringify(items)); setCount(items.length); renderCartModal(); }));
  }

  renderCartModal();

  window.scmCart = { get count() { return count; }, add(i = 1) { setCount(count + i); pulseCart(); } };
});
