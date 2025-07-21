import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { useCart } from '../contexts/CartContext'
import { getProductById } from '../data/products'
import {
  Star,
  CheckCircle,
  ArrowLeft,
  Download,
  Shield,
  Clock,
  Users
} from 'lucide-react'

const ProductDetail = () => {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const { addToCart, isInCart } = useCart()
  
  const product = getProductById(id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
          <Button asChild>
            <Link to="/produtos">Voltar aos Produtos</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/produtos">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Produtos
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border">
              <img
                src={product.images ? product.images[selectedImage] : product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded border-2 ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                {product.bestseller && (
                  <Badge className="bg-orange-500">
                    <Star className="w-3 h-3 mr-1" />
                    Bestseller
                  </Badge>
                )}
                {product.featured && (
                  <Badge className="bg-blue-500">⭐ Destaque</Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-primary">R$ {product.price}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    R$ {product.originalPrice}
                  </span>
                  <Badge variant="destructive">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </Badge>
                </>
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Download className="h-5 w-5 text-primary" />
                <span className="text-sm">Download Imediato</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Garantia 30 dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm">Acesso Vitalício</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm">Suporte Incluído</span>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full"
                onClick={handleAddToCart}
                disabled={isInCart(product.id)}
              >
                {isInCart(product.id) ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Produto no Carrinho
                  </>
                ) : (
                  `Adicionar ao Carrinho - R$ ${product.price}`
                )}
              </Button>
              
              {!isInCart(product.id) && (
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link to="/carrinho">
                    Finalizar Compra
                  </Link>
                </Button>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Descrição</TabsTrigger>
              <TabsTrigger value="benefits">Benefícios</TabsTrigger>
              <TabsTrigger value="testimonials">Depoimentos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Descrição Completa</CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: product.longDescription }}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="benefits" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>O que você recebe</CardTitle>
                </CardHeader>
                <CardContent>
                  {product.benefits && (
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="testimonials" className="mt-6">
              <div className="space-y-6">
                {product.testimonials && product.testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                          <span className="text-white font-bold">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                          <CardDescription>{testimonial.role}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                      {testimonial.result && (
                        <div className="text-sm font-semibold text-green-600">
                          Resultado: {testimonial.result}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

