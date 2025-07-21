export const products = [
  {
    id: 1,
    name: "E-book N.E.U.R.A. Completo",
    slug: "ebook-neura-completo",
    description: "A única metodologia neurocientífica para profissionais de estética no Brasil. Reprograme sua mente e multiplique seus resultados em 90 dias.",
    longDescription: `
      <h3>🧠 O que você vai aprender:</h3>
      <ul>
        <li><strong>Pilar N - Neuroplasticidade:</strong> Como reprogramar crenças limitantes que sabotam seu sucesso</li>
        <li><strong>Pilar E - Elevação:</strong> Técnicas para elevar sua autoestima profissional e parar de se comparar</li>
        <li><strong>Pilar U - Unificação:</strong> Como alinhar seus valores pessoais com sua precificação</li>
        <li><strong>Pilar R - Reposicionamento:</strong> Estratégias para se tornar referência na sua área</li>
        <li><strong>Pilar A - Ancoragem:</strong> Como manter os resultados para sempre</li>
      </ul>
      
      <h3>📊 Resultados Comprovados:</h3>
      <ul>
        <li>Mais de 2.847 profissionais transformadas</li>
        <li>89% relatam aumento de faturamento em 90 dias</li>
        <li>76% dobraram seus preços sem perder clientes</li>
        <li>94% se sentem mais confiantes para precificar</li>
      </ul>
      
      <h3>📚 O que está incluído:</h3>
      <ul>
        <li>E-book completo com mais de 150 páginas</li>
        <li>Exercícios práticos para cada pilar</li>
        <li>Cronograma de implementação de 90 dias</li>
        <li>Casos reais de transformação</li>
        <li>Scripts de vendas e reposicionamento</li>
      </ul>
    `,
    price: 197,
    originalPrice: 297,
    image: "/src/assets/neurociencia/cerebro1.jpg",
    images: [
      "/src/assets/neurociencia/cerebro1.jpg",
      "/src/assets/neurociencia/neuronios.jpg",
      "/src/assets/neurociencia/sinapses.jpg"
    ],
    category: "E-books",
    tags: ["neurociência", "metodologia", "transformação", "estética"],
    featured: true,
    bestseller: true,
    digital: true,
    downloadLink: "/downloads/ebook-neura-completo.pdf",
    benefits: [
      "Acesso imediato após a compra",
      "Formato PDF otimizado para mobile",
      "Exercícios práticos inclusos",
      "Cronograma de 90 dias",
      "Suporte por email"
    ],
    testimonials: [
      {
        name: "Patricia Oliveira",
        role: "Micropigmentadora, São Paulo",
        text: "Em 60 dias aplicando o N.E.U.R.A., aumentei meus preços em 150% e não perdi nenhuma cliente.",
        result: "De R$ 300 para R$ 750 por procedimento"
      },
      {
        name: "Mariana Santos", 
        role: "Lash Designer, Rio de Janeiro",
        text: "Depois do N.E.U.R.A., entendi que perfeição é inimiga da evolução. Hoje tenho 15K seguidores.",
        result: "De 800 para 15.000 seguidores em 4 meses"
      }
    ]
  },
  {
    id: 2,
    name: "Landing Page N.E.U.R.A. - Template Completo",
    slug: "landing-page-neura",
    description: "Template profissional de landing page otimizada para conversão, baseada na metodologia N.E.U.R.A.",
    longDescription: `
      <h3>🎯 O que você recebe:</h3>
      <ul>
        <li>Template HTML/CSS/JS completo e responsivo</li>
        <li>Design profissional otimizado para conversão</li>
        <li>Seções estratégicas baseadas em neurociência</li>
        <li>Formulários de captura integrados</li>
        <li>Animações e efeitos visuais</li>
      </ul>
      
      <h3>✨ Características:</h3>
      <ul>
        <li>Design responsivo para todos os dispositivos</li>
        <li>Otimizada para SEO</li>
        <li>Carregamento rápido</li>
        <li>Fácil personalização</li>
        <li>Documentação completa incluída</li>
      </ul>
    `,
    price: 97,
    originalPrice: 197,
    image: "/src/assets/landing-images/preview.jpg",
    images: [
      "/src/assets/landing-images/preview.jpg"
    ],
    category: "Templates",
    tags: ["landing page", "template", "conversão", "html"],
    featured: false,
    bestseller: false,
    digital: true,
    downloadLink: "/downloads/landing-page-neura.zip"
  },
  {
    id: 3,
    name: "Quiz Sabotadores Mentais",
    slug: "quiz-sabotadores",
    description: "Descubra quais sabotadores mentais estão limitando seu crescimento profissional com este quiz interativo.",
    longDescription: `
      <h3>🔍 O que é o Quiz:</h3>
      <ul>
        <li>Ferramenta de autodiagnóstico baseada em neurociência</li>
        <li>Identifica os 10 principais sabotadores mentais</li>
        <li>Relatório personalizado com recomendações</li>
        <li>Interface interativa e envolvente</li>
      </ul>
      
      <h3>📋 Como funciona:</h3>
      <ul>
        <li>25 perguntas estratégicas</li>
        <li>Análise automática dos resultados</li>
        <li>Relatório detalhado em PDF</li>
        <li>Plano de ação personalizado</li>
      </ul>
    `,
    price: 47,
    originalPrice: 97,
    image: "/src/assets/neurociencia/sinapses.jpg",
    images: [
      "/src/assets/neurociencia/sinapses.jpg"
    ],
    category: "Ferramentas",
    tags: ["quiz", "autodiagnóstico", "sabotadores", "neurociência"],
    featured: false,
    bestseller: false,
    digital: true,
    downloadLink: "/downloads/quiz-sabotadores.zip"
  },
  {
    id: 4,
    name: "Sales Page N.E.U.R.A. - Template Premium",
    slug: "sales-page-neura",
    description: "Template de página de vendas de alta conversão, com todos os elementos psicológicos para maximizar suas vendas.",
    longDescription: `
      <h3>💰 Template de Vendas Premium:</h3>
      <ul>
        <li>Estrutura baseada em psicologia de vendas</li>
        <li>Seções otimizadas para conversão</li>
        <li>Elementos de urgência e escassez</li>
        <li>Depoimentos e prova social</li>
        <li>Checkout integrado</li>
      </ul>
      
      <h3>🚀 Recursos Inclusos:</h3>
      <ul>
        <li>Design responsivo premium</li>
        <li>Animações de conversão</li>
        <li>Timer de countdown</li>
        <li>Calculadora de ROI</li>
        <li>Seção de FAQ otimizada</li>
      </ul>
    `,
    price: 147,
    originalPrice: 297,
    image: "/src/assets/casos-sucesso/mulher1.jpg",
    images: [
      "/src/assets/casos-sucesso/mulher1.jpg",
      "/src/assets/casos-sucesso/mulher2.jpg",
      "/src/assets/casos-sucesso/mulher3.jpg"
    ],
    category: "Templates",
    tags: ["sales page", "vendas", "conversão", "template"],
    featured: true,
    bestseller: false,
    digital: true,
    downloadLink: "/downloads/sales-page-neura.zip"
  },
  {
    id: 5,
    name: "Pacote Completo N.E.U.R.A.",
    slug: "pacote-completo",
    description: "Todos os produtos N.E.U.R.A. em um pacote especial com desconto exclusivo.",
    longDescription: `
      <h3>🎁 Pacote Completo Inclui:</h3>
      <ul>
        <li>E-book N.E.U.R.A. Completo (R$ 197)</li>
        <li>Landing Page Template (R$ 97)</li>
        <li>Quiz Sabotadores (R$ 47)</li>
        <li>Sales Page Template (R$ 147)</li>
        <li><strong>BÔNUS:</strong> Consultoria de 1 hora (R$ 297)</li>
        <li><strong>BÔNUS:</strong> Templates de redes sociais (R$ 197)</li>
      </ul>
      
      <h3>💎 Valor Total: R$ 982</h3>
      <h3>🔥 Seu Investimento: R$ 397</h3>
      <p><strong>Economia de R$ 585!</strong></p>
      
      <h3>✅ Garantias:</h3>
      <ul>
        <li>30 dias de garantia incondicional</li>
        <li>Suporte prioritário</li>
        <li>Atualizações gratuitas por 1 ano</li>
        <li>Acesso ao grupo VIP</li>
      </ul>
    `,
    price: 397,
    originalPrice: 982,
    image: "/src/assets/neurociencia/cerebro1.jpg",
    images: [
      "/src/assets/neurociencia/cerebro1.jpg",
      "/src/assets/casos-sucesso/mulher2.jpg",
      "/src/assets/profissionais/micropigmentacao1.jpg"
    ],
    category: "Pacotes",
    tags: ["pacote", "completo", "desconto", "bônus"],
    featured: true,
    bestseller: true,
    digital: true,
    bundle: true,
    bundleItems: [1, 2, 3, 4],
    downloadLink: "/downloads/pacote-completo.zip"
  }
]

export const categories = [
  { id: 1, name: "Todos", slug: "todos" },
  { id: 2, name: "E-books", slug: "ebooks" },
  { id: 3, name: "Templates", slug: "templates" },
  { id: 4, name: "Ferramentas", slug: "ferramentas" },
  { id: 5, name: "Pacotes", slug: "pacotes" }
]

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id))
}

export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug)
}

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured)
}

export const getBestsellerProducts = () => {
  return products.filter(product => product.bestseller)
}

export const getProductsByCategory = (category) => {
  if (category === 'todos') return products
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase())
}

