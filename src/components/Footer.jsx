import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg gradient-text">N.E.U.R.A.</span>
                <span className="text-xs text-muted-foreground -mt-1">Store</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformando carreiras na estética através da neurociência aplicada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-muted-foreground hover:text-primary transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Produtos */}
          <div className="space-y-4">
            <h3 className="font-semibold">Produtos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/produtos?categoria=ebooks" className="text-muted-foreground hover:text-primary transition-colors">
                  E-books
                </Link>
              </li>
              <li>
                <Link to="/produtos?categoria=templates" className="text-muted-foreground hover:text-primary transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/produtos?categoria=ferramentas" className="text-muted-foreground hover:text-primary transition-colors">
                  Ferramentas
                </Link>
              </li>
              <li>
                <Link to="/produtos?categoria=pacotes" className="text-muted-foreground hover:text-primary transition-colors">
                  Pacotes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">contato@neura.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 N.E.U.R.A. Store. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/politica-privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos-uso" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <Link to="/politica-reembolso" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Reembolso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

