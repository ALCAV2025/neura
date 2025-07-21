# 🧠 N.E.U.R.A. Store - E-commerce Completo

Site de e-commerce completo para venda de produtos digitais baseados na metodologia N.E.U.R.A. (Neuroplasticidade, Elevação, Unificação, Reposicionamento, Ancoragem).

## 🚀 Funcionalidades

### 🛍️ Para Clientes
- **Catálogo de Produtos:** Navegação completa com filtros por categoria
- **Carrinho de Compras:** Sistema completo de carrinho com persistência
- **Checkout:** Processo de finalização de compra com formulário completo
- **Autenticação:** Sistema de login e registro de usuários
- **Dashboard do Cliente:** Área para visualizar pedidos e downloads
- **Design Responsivo:** Funciona perfeitamente em desktop e mobile

### 👨‍💼 Para Administradores
- **Painel Administrativo:** Dashboard completo com estatísticas
- **Gerenciamento de Produtos:** Visualizar, editar e adicionar produtos
- **Gestão de Pedidos:** Acompanhar todos os pedidos realizados
- **Configurações:** Área para configurações gerais da loja

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **Roteamento:** React Router DOM
- **Ícones:** Lucide React
- **Estado:** Context API do React
- **Build:** Vite
- **Deploy:** Netlify (recomendado)

## 📁 Estrutura do Projeto

```
neura-store/
├── public/                 # Arquivos públicos
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   └── ui/           # Componentes de UI (shadcn)
│   ├── contexts/         # Contextos do React (Cart, Auth)
│   ├── data/            # Dados dos produtos
│   ├── pages/           # Páginas da aplicação
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Ponto de entrada
├── dist/                # Build de produção
├── GUIA_NETLIFY.md     # Guia para deploy na Netlify
└── README.md           # Este arquivo
```

## 🎨 Design e UX

### Paleta de Cores
- **Primária:** Gradiente roxo/azul (#8B5CF6 → #3B82F6)
- **Secundária:** Tons de cinza para texto e backgrounds
- **Accent:** Verde para confirmações, vermelho para alertas

### Componentes Principais
- **Navbar:** Navegação responsiva com carrinho e menu do usuário
- **Footer:** Links importantes e informações de contato
- **Cards de Produto:** Design atrativo com badges e preços
- **Formulários:** Validação e feedback visual
- **Dashboard:** Interface administrativa completa

## 📦 Produtos Incluídos

1. **E-book N.E.U.R.A. Completo** - R$ 197
2. **Landing Page Template** - R$ 97
3. **Quiz Sabotadores Mentais** - R$ 47
4. **Sales Page Template** - R$ 147
5. **Pacote Completo N.E.U.R.A.** - R$ 397

## 🔧 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clonar o repositório
git clone [url-do-repositorio]
cd neura-store

# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm run dev

# Acessar no navegador
http://localhost:5173
```

### Build para Produção
```bash
# Gerar build de produção
pnpm run build

# Os arquivos estarão na pasta dist/
```

## 🔐 Credenciais de Demonstração

### Administrador
- **Email:** admin@neura.com
- **Senha:** admin123

### Usuário Regular
- **Email:** qualquer email válido
- **Senha:** qualquer senha

## 🌐 Deploy na Netlify

Siga o guia completo em `GUIA_NETLIFY.md` para colocar seu site no ar gratuitamente.

### Passos Resumidos:
1. Fazer upload dos arquivos da pasta `dist/` para o GitHub
2. Conectar repositório GitHub com Netlify
3. Configurar redirects para SPA
4. Site estará disponível em poucos minutos

## 🔄 Atualizações e Manutenção

### Para adicionar novos produtos:
1. Edite o arquivo `src/data/products.js`
2. Adicione as informações do produto
3. Faça rebuild e redeploy

### Para modificar o design:
1. Edite os componentes em `src/components/`
2. Modifique estilos no Tailwind CSS
3. Teste localmente e faça deploy

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- **Desktop:** Layout completo com sidebar
- **Tablet:** Layout adaptado com navegação otimizada
- **Mobile:** Interface touch-friendly com menu hambúrguer

## 🔒 Segurança

### Implementado:
- Validação de formulários no frontend
- Autenticação básica com localStorage
- Sanitização de inputs

### Para Produção (Recomendações):
- Implementar autenticação JWT real
- Adicionar validação no backend
- Configurar HTTPS (automático na Netlify)
- Implementar rate limiting

## 💳 Integração de Pagamentos

Atualmente o checkout é simulado. Para produção real, integre com:
- **Stripe:** Para cartões internacionais
- **PagSeguro:** Para o mercado brasileiro
- **Mercado Pago:** Alternativa popular no Brasil
- **PIX:** Para pagamentos instantâneos

## 📊 Analytics e Métricas

Para acompanhar o desempenho, adicione:
- **Google Analytics:** Tráfego e comportamento
- **Facebook Pixel:** Para campanhas de marketing
- **Hotjar:** Para análise de UX

## 🆘 Suporte e Manutenção

### Logs e Debugging:
- Use as ferramentas de desenvolvedor do navegador
- Verifique o console para erros JavaScript
- Monitore os logs de deploy na Netlify

### Backup:
- Mantenha sempre uma cópia local dos arquivos
- Use controle de versão (Git) para histórico
- Faça backup regular dos dados de produtos

## 📈 Próximos Passos

Para evoluir o site:
1. **Backend Real:** Implementar API com Node.js/Python
2. **Banco de Dados:** PostgreSQL ou MongoDB
3. **CMS:** Painel para editar produtos sem código
4. **Email Marketing:** Integração com Mailchimp/ConvertKit
5. **Blog:** Seção de conteúdo para SEO

## 📞 Contato

Para dúvidas ou suporte sobre o projeto, entre em contato através dos canais disponíveis no site.

---

**🎉 Seu e-commerce N.E.U.R.A. está pronto para transformar carreiras na estética!**

