import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { useCart } from '../contexts/CartContext'
import { products, categories, getProductsByCategory } from '../data/products'
import {
  Star,
  CheckCircle,
  Filter,
  Search
} from 'lucide-react'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')
  const { addToCart, isInCart } = useCart()

  const filteredProducts = getProductsByCategory(selectedCategory).filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="gradient-text">Produtos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra nossa linha completa de produtos baseados na metodologia N.E.U.R.A. 
            para transformar sua carreira na estética.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.slug ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.slug)}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
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
                {product.featured && (
                  <Badge className="absolute top-2 left-2 bg-blue-500">
                    ⭐ Destaque
                  </Badge>
                )}
                {product.originalPrice > product.price && (
                  <Badge variant="destructive" className="absolute top-2 right-2">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{product.category}</Badge>
                  {product.digital && (
                    <Badge variant="outline">Digital</Badge>
                  )}
                </div>
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

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
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

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-4">Nenhum produto encontrado</h3>
            <p className="text-muted-foreground mb-6">
              Tente ajustar os filtros ou termo de busca.
            </p>
            <Button onClick={() => {
              setSearchTerm('')
              setSelectedCategory('todos')
            }}>
              Limpar Filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products

