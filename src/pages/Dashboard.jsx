import React from 'react'
import { useLocation } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { useAuth } from '../contexts/AuthContext'
import {
  Download,
  Package,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react'

const Dashboard = () => {
  const { user } = useAuth()
  const location = useLocation()
  const message = location.state?.message

  // Simulação de pedidos do usuário
  const orders = [
    {
      id: 1,
      date: '2024-01-15',
      status: 'completed',
      total: 197,
      items: [
        {
          name: 'E-book N.E.U.R.A. Completo',
          downloadLink: '/downloads/ebook-neura-completo.pdf'
        }
      ]
    },
    {
      id: 2,
      date: '2024-01-10',
      status: 'completed',
      total: 397,
      items: [
        {
          name: 'Pacote Completo N.E.U.R.A.',
          downloadLink: '/downloads/pacote-completo.zip'
        }
      ]
    }
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500"><CheckCircle className="w-3 h-3 mr-1" />Concluído</Badge>
      case 'processing':
        return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />Processando</Badge>
      default:
        return <Badge variant="outline">Pendente</Badge>
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Success Message */}
        {message && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <p className="text-green-800">{message}</p>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Olá, {user?.name}!</h1>
          <p className="text-muted-foreground">
            Bem-vindo ao seu painel. Aqui você pode acessar seus produtos e acompanhar seus pedidos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Orders */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Meus Pedidos
                </CardTitle>
                <CardDescription>
                  Histórico de compras e downloads
                </CardDescription>
              </CardHeader>
              <CardContent>
                {orders.length === 0 ? (
                  <div className="text-center py-8">
                    <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Nenhum pedido encontrado</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-semibold">Pedido #{order.id}</h3>
                            <p className="text-sm text-muted-foreground">
                              {new Date(order.date).toLocaleDateString('pt-BR')}
                            </p>
                          </div>
                          <div className="text-right">
                            {getStatusBadge(order.status)}
                            <p className="text-lg font-bold text-primary mt-1">
                              R$ {order.total}
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm">{item.name}</span>
                              {order.status === 'completed' && (
                                <Button size="sm" variant="outline">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download
                                </Button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Info */}
            <Card>
              <CardHeader>
                <CardTitle>Informações da Conta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Nome</label>
                  <p className="text-sm text-muted-foreground">{user?.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Tipo de Conta</label>
                  <Badge variant="outline">{user?.role === 'admin' ? 'Administrador' : 'Cliente'}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <Package className="w-4 h-4 mr-2" />
                  Ver Produtos
                </Button>
                <Button className="w-full" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Downloads
                </Button>
                <Button className="w-full" variant="outline">
                  <Star className="w-4 h-4 mr-2" />
                  Suporte
                </Button>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Precisa de Ajuda?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Nossa equipe está pronta para ajudar você a aproveitar ao máximo seus produtos.
                </p>
                <Button className="w-full">
                  Entrar em Contato
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

