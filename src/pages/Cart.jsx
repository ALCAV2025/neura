import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { useCart } from '../contexts/CartContext'
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight
} from 'lucide-react'

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
          <h2 className="text-3xl font-bold mb-4">Seu carrinho está vazio</h2>
          <p className="text-muted-foreground mb-8">
            Adicione alguns produtos incríveis para começar sua transformação!
          </p>
          <Button size="lg" asChild>
            <Link to="/produtos">
              Explorar Produtos
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">Carrinho de Compras</h1>
              <Button variant="outline" onClick={clearCart}>
                Limpar Carrinho
              </Button>
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-lg font-bold text-primary">
                            R$ {item.price}
                          </span>
                          {item.originalPrice > item.price && (
                            <span className="text-sm text-muted-foreground line-through">
                              R$ {item.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <div className="font-semibold">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} (x{item.quantity})</span>
                      <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">R$ {getCartTotal().toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/checkout">
                      Finalizar Compra
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <Link to="/produtos">
                      Continuar Comprando
                    </Link>
                  </Button>
                </div>

                {/* Guarantees */}
                <div className="border-t pt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <span>🛡️</span>
                    <span>Garantia de 30 dias</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>⚡</span>
                    <span>Acesso imediato</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>💳</span>
                    <span>Pagamento seguro</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

