# Projeto: Sistema de Controle de Manutenção (SCM)

Projeto desenvolvido para a disciplina de Desenvolvimento WEB (Professor JOHN), do 3º ano INTIN do IFPB.

## 1. 🚀 Sobre o Projeto

O SCM é um site estático (HTML/CSS) que simula a interface de uma empresa de manutenção de tecnologia. O site permite que usuários visualizem serviços e abram chamados de manutenção.

**Link do Site (GitHub Pages):** https://erickphy.github.io/Sistema-de-Controle-de-Manuten-o/index.html

## 2. 🛠️ Tecnologias Utilizadas

* **HTML5** (Semântico)
* **CSS3**
    * Variáveis CSS
    * Flexbox
    * Grid Layout
    * Media Queries (Responsividade)

## 3. 🖥️ Como Rodar Localmente

Este é um projeto estático. Não há necessidade de instalação.

1.  Clone o repositório:
    ```sh
    git clone https://github.com/erickphy/Sistema-de-Controle-de-Manuten-o.git
    ```
2.  Navegue até a pasta do projeto:
    ```sh
    cd projeto-manutencao
    ```
3.  Abra o arquivo `index.html` diretamente no seu navegador.

## 4. 📄 Documentação

O manual de uso do sistema, detalhando as funcionalidades de cada tela, está localizado em:
`/docs/manual-uso.pdf`

## 6. 🤖 Integração com Chatling.ai (Chatbot)

Passos para integrar o chatbot e treinar com o manual:

1. Crie uma conta em https://chatling.ai e faça login.
2. No painel, vá em "Data Sources" e envie o arquivo `docs/manual-uso.pdf` ou cole o texto do `docs/manual-uso.txt` (recomendado: texto pesquisável).
3. Treine o agente usando esse Data Source para que ele responda perguntas sobre a InfoTech.
4. Vá em "Embed" ou "Add to website" no Chatling e copie o snippet `<script>` que eles geram.
5. Cole esse snippet no `<head>` ou logo antes do `</body>` em todas as páginas: `index.html`, `loja.html`, `servicos.html`, `chamado.html`.

Exemplo (cole o script que o Chatling fornecer):

```html
<!-- Chatling embed (exemplo) -->
<script src="https://app.chatling.ai/embed/SEU_SNIPPET_AQUI.js" async></script>
```

Observação: já incluí placeholders nas páginas para você colar o script. Se preferir, cole o snippet aqui e eu mesmo adiciono em todas as páginas.

## 7. 📁 Manual de Uso para Chatbot

Criei um rascunho em texto em `docs/manual-uso.txt`. Antes de treinar o agente, revise esse arquivo, atualize preços/contatos e converta para PDF se desejar usar o upload de PDF.

## 8. ▶️ Testar localmente

Sirva o site por HTTP e acesse as páginas em `localhost`:

```powershell
cd "c:\Users\José Ferreira\Desktop\Sistema-de-Control-de-Manuten-o"
python -m http.server 8000
# abrir http://localhost:8000/loja.html
```

## 9. 🔒 Observações para produção

- Para pagamentos reais, implemente um backend seguro (Node.js/Express) e integre com Stripe/PayPal em modo teste antes de usar chaves de produção.
- Garanta HTTPS, armazenamento seguro de chaves (`.env`) e verificação de webhooks.

---
Atualizações: criei `docs/manual-uso.txt` com o conteúdo base para treinamento do chatbot.

## 10. 📄 Gerar PDF do manual (opcional)

Se preferir enviar um PDF para o Chatling, você pode converter o arquivo texto com `pandoc` (se instalado) ou usando um editor (Word/LibreOffice):

```powershell
pandoc docs/manual-uso.txt -o docs/manual-uso.pdf
```

Verifique que o PDF contenha texto pesquisável (não imagens) antes de enviar ao Chatling.

## 11. 🚀 Publicar no GitHub Pages

1. Crie um repositório no GitHub e faça push do projeto.
2. No GitHub, vá em Settings → Pages e selecione a branch `main` (ou `gh-pages`) como fonte.
3. Aguarde a publicação e use a URL gerada para testar o chatbot (alguns providers de embed preferem sites públicos).

---
Se quiser, eu adiciono automaticamente o snippet do Chatling nas páginas assim que você colar o script aqui.

## 5. 👨‍💻 Autor

* **José Ferreira - José Erick - José Eduardo - Matheus de Souza**
* **Turma:** 3º INTIN
