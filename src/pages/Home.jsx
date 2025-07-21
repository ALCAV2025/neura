import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { useCart } from '../contexts/CartContext'
import { getFeaturedProducts, getBestsellerProducts } from '../data/products'
import {
  Brain,
  Zap,
  Target,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react'

const Home = () => {
  const { addToCart, isInCart } = useCart()
  const featuredProducts = getFeaturedProducts()
  const bestsellerProducts = getBestsellerProducts()

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="hero-pattern absolute inset-0 opacity-30"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  🧠 Metodologia Neurocientífica
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Transforme Sua Carreira na{' '}
                  <span className="gradient-text">Estética</span> em{' '}
                  <span className="gradient-text">90 Dias</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Descubra a única metodologia baseada em neurociência que elimina sabotadores mentais 
                  e multiplica seu faturamento. Mais de 2.847 profissionais já transformaram suas carreiras.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="gradient-bg text-white hover:opacity-90">
                  <Link to="/produtos">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Ver Produtos
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/sobre">
                    Conhecer Metodologia
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">2.847+</div>
                  <div className="text-sm text-muted-foreground">Profissionais Transformadas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">89%</div>
                  <div className="text-sm text-muted-foreground">Aumento de Faturamento</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">90</div>
                  <div className="text-sm text-muted-foreground">Dias para Transformação</div>
                </div>
              </div>
            </div>

            <div className="relative slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-20 floating-animation"></div>
                <Card className="relative neura-shadow brain-animation">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center mb-4">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Metodologia N.E.U.R.A.</CardTitle>
                    <CardDescription>5 Pilares da Transformação Neural</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">N</span>
                        </div>
                        <span className="text-sm">Neuroplasticidade</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">E</span>
                        </div>
                        <span className="text-sm">Elevação</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">U</span>
                        </div>
                        <span className="text-sm">Unificação</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">R</span>
                        </div>
                        <span className="text-sm">Reposicionamento</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">A</span>
                        </div>
                        <span className="text-sm">Ancoragem</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por Que Escolher a Metodologia N.E.U.R.A.?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Não é coaching genérico. Não é motivação temporária. É ciência aplicada à sua realidade específica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto gradient-bg rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Base Científica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Metodologia baseada em neurociência e psicologia positiva comprovada
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto gradient-bg rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Específico para Estética</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Todos os exemplos e estratégias são do mercado da beleza
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto gradient-bg rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Resultados Rápidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Primeiros resultados em 30 dias, transformação completa em 90 dias
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto gradient-bg rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Garantia Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  30 dias de garantia incondicional - risco zero para você
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground">
              Transforme sua carreira com nossos produtos mais populares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="card-hover overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.bestseller && (
                    <Badge className="absolute top-2 left-2 bg-orange-500">
                      <Star className="w-3 h-3 mr-1" />
                      Bestseller
                    </Badge>
                  )}
                  {product.originalPrice > product.price && (
                    <Badge variant="destructive" className="absolute top-2 right-2">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">
                        R$ {product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          R$ {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1"
                      onClick={() => handleAddToCart(product)}
                      disabled={isInCart(product.id)}
                    >
                      {isInCart(product.id) ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          No Carrinho
                        </>
                      ) : (
                        'Adicionar ao Carrinho'
                      )}
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={`/produto/${product.id}`}>
                        Ver Detalhes
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/produtos">
                Ver Todos os Produtos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Que Dizem Nossas Clientes
            </h2>
            <p className="text-xl text-muted-foreground">
              Resultados reais de profissionais que aplicaram a metodologia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Patricia Oliveira</CardTitle>
                    <CardDescription>Micropigmentadora, São Paulo</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Em 60 dias aplicando o N.E.U.R.A., aumentei meus preços em 150% e não perdi nenhuma cliente. 
                  Na verdade, minha agenda ficou ainda mais disputada."
                </p>
                <div className="text-sm font-semibold text-green-600">
                  Resultado: De R$ 300 para R$ 750 por procedimento
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Mariana Santos</CardTitle>
                    <CardDescription>Lash Designer, Rio de Janeiro</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Eu era a típica 'perfeccionista paralisada'. Depois do N.E.U.R.A., entendi que perfeição é inimiga da evolução. 
                  Hoje tenho 15K seguidores e agenda fechada por 3 meses."
                </p>
                <div className="text-sm font-semibold text-green-600">
                  Resultado: De 800 para 15.000 seguidores em 4 meses
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Camila Rodriguez</CardTitle>
                    <CardDescription>Esteticista, Brasília</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "O N.E.U.R.A. não mudou apenas meu faturamento - mudou minha vida. Hoje me vejo como empresária, 
                  não apenas como técnica. Abri meu segundo estúdio."
                </p>
                <div className="text-sm font-semibold text-green-600">
                  Resultado: De autônoma para empresária em 8 meses
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronta Para Transformar Sua Carreira?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Não deixe mais um dia passar cobrando menos do que você vale. 
              Sua transformação começa agora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gradient-bg text-white hover:opacity-90">
                <Link to="/produtos">
                  <Zap className="mr-2 h-5 w-5" />
                  Começar Agora
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contato">
                  Falar com Especialista
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

