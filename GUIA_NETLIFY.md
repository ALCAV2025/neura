# 🚀 Guia Completo: Como Hospedar seu Site N.E.U.R.A. na Netlify (GRÁTIS)

Este guia vai te ensinar passo a passo como colocar seu site no ar usando a Netlify, uma das melhores plataformas gratuitas para hospedagem de sites.

## 📋 O que você vai precisar

- Uma conta no GitHub (gratuita)
- Uma conta na Netlify (gratuita)
- Os arquivos do seu site (que já estão prontos!)

## 🎯 Passo 1: Preparar os Arquivos

Seu site já está pronto e construído! Os arquivos estão na pasta `dist/` do projeto. Estes são os arquivos que vamos enviar para a Netlify.

### Arquivos importantes:
- `dist/` - Pasta com todos os arquivos do site prontos para produção
- `dist/index.html` - Página principal
- `dist/assets/` - CSS, JavaScript e outros recursos

## 🔧 Passo 2: Criar Conta no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "Sign up" (Criar conta)
3. Preencha seus dados:
   - Username (nome de usuário único)
   - Email
   - Senha
4. Confirme sua conta pelo email

## 📤 Passo 3: Subir os Arquivos para o GitHub

### Opção A: Interface Web (Mais Fácil)

1. **Criar um novo repositório:**
   - Faça login no GitHub
   - Clique no botão verde "New" ou "+"
   - Nome do repositório: `neura-store`
   - Marque "Public" (público)
   - Marque "Add a README file"
   - Clique em "Create repository"

2. **Fazer upload dos arquivos:**
   - No seu repositório, clique em "uploading an existing file"
   - Arraste TODOS os arquivos da pasta `dist/` para a área de upload
   - **IMPORTANTE:** Arraste os arquivos de DENTRO da pasta dist, não a pasta dist inteira
   - Escreva uma mensagem como "Primeiro upload do site"
   - Clique em "Commit changes"

### Opção B: Usando Git (Para usuários avançados)

```bash
# No terminal, dentro da pasta do projeto
git init
git add dist/*
git commit -m "Primeiro commit do site N.E.U.R.A."
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/neura-store.git
git push -u origin main
```

## 🌐 Passo 4: Conectar com a Netlify

1. **Criar conta na Netlify:**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "Sign up"
   - Escolha "Sign up with GitHub" (mais fácil)
   - Autorize a Netlify a acessar sua conta GitHub

2. **Conectar seu repositório:**
   - No painel da Netlify, clique em "New site from Git"
   - Escolha "GitHub"
   - Selecione o repositório `neura-store`
   - Configure as opções de build:
     - **Branch to deploy:** main
     - **Build command:** (deixe vazio)
     - **Publish directory:** (deixe vazio se você fez upload direto dos arquivos da pasta dist)
   - Clique em "Deploy site"

## ⚡ Passo 5: Configurações Importantes

### Configurar Redirects para SPA (Single Page Application)

Seu site é uma SPA (React), então precisa de uma configuração especial:

1. **Criar arquivo `_redirects`:**
   - No GitHub, no seu repositório, clique em "Create new file"
   - Nome do arquivo: `_redirects`
   - Conteúdo do arquivo:
   ```
   /*    /index.html   200
   ```
   - Commit o arquivo

2. **A Netlify vai automaticamente fazer redeploy**

### Configurar Domínio Personalizado (Opcional)

1. No painel da Netlify, vá em "Site settings"
2. Clique em "Domain management"
3. Clique em "Add custom domain"
4. Digite seu domínio (ex: `meusite.com.br`)
5. Siga as instruções para configurar o DNS

## 🎉 Passo 6: Seu Site Está no Ar!

Após o deploy, a Netlify vai te dar uma URL como:
`https://amazing-name-123456.netlify.app`

### Como acessar:
- **URL temporária:** A Netlify gera automaticamente
- **Área administrativa:** `sua-url.netlify.app/admin`
- **Login de demonstração:**
  - Admin: `admin@neura.com` / `admin123`
  - Usuário: qualquer email / qualquer senha

## 🔄 Como Atualizar o Site

Sempre que você quiser atualizar o site:

1. **Faça as alterações** nos arquivos locais
2. **Gere nova build:** `pnpm run build`
3. **Faça upload dos novos arquivos** da pasta `dist/` para o GitHub
4. **A Netlify atualiza automaticamente** em poucos minutos

## 🛠️ Funcionalidades do Seu Site

### Para Visitantes:
- ✅ Navegação completa pelo site
- ✅ Visualização de produtos
- ✅ Carrinho de compras funcional
- ✅ Processo de checkout
- ✅ Criação de conta e login

### Para Administradores:
- ✅ Painel administrativo completo
- ✅ Gerenciamento de produtos
- ✅ Visualização de pedidos
- ✅ Estatísticas de vendas
- ✅ Configurações da loja

## 🔒 Segurança e Limitações

### O que funciona:
- Interface completa do e-commerce
- Sistema de carrinho
- Autenticação básica
- Área administrativa

### O que você precisa adicionar para produção real:
- **Gateway de pagamento real** (Stripe, PagSeguro, etc.)
- **Banco de dados real** (Firebase, Supabase, etc.)
- **Sistema de email** para confirmações
- **Backup dos dados**

## 💡 Dicas Importantes

1. **Backup:** Sempre mantenha uma cópia local dos arquivos
2. **Atualizações:** A Netlify atualiza automaticamente quando você faz push no GitHub
3. **Domínio:** Você pode usar um domínio próprio gratuitamente
4. **SSL:** A Netlify fornece HTTPS gratuito automaticamente
5. **Analytics:** Você pode adicionar Google Analytics facilmente

## 🆘 Problemas Comuns e Soluções

### Site não carrega:
- Verifique se os arquivos estão na raiz do repositório
- Confirme se o arquivo `_redirects` foi criado

### Páginas internas dão erro 404:
- Certifique-se de que o arquivo `_redirects` existe e tem o conteúdo correto

### Site não atualiza:
- Verifique se o commit foi feito no GitHub
- Aguarde alguns minutos para o deploy automático

## 📞 Suporte

Se precisar de ajuda:
1. Verifique a documentação da Netlify
2. Confira os logs de deploy no painel da Netlify
3. Entre em contato comigo se precisar de ajuda específica

---

**🎉 Parabéns! Seu site N.E.U.R.A. está agora disponível 24/7 na internet, gratuitamente!**

Agora você pode compartilhar o link com seus clientes e começar a vender seus produtos digitais online.

