import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar se há usuário logado no localStorage
    const savedUser = localStorage.getItem('neura-user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // Simulação de login - em produção, fazer chamada para API
      if (email === 'admin@neura.com' && password === 'admin123') {
        const userData = {
          id: 1,
          name: 'Administrador',
          email: 'admin@neura.com',
          role: 'admin'
        }
        setUser(userData)
        localStorage.setItem('neura-user', JSON.stringify(userData))
        return { success: true }
      } else if (email && password) {
        const userData = {
          id: 2,
          name: 'Usuário',
          email: email,
          role: 'user'
        }
        setUser(userData)
        localStorage.setItem('neura-user', JSON.stringify(userData))
        return { success: true }
      } else {
        return { success: false, error: 'Credenciais inválidas' }
      }
    } catch (error) {
      return { success: false, error: 'Erro ao fazer login' }
    }
  }

  const register = async (name, email, password) => {
    try {
      // Simulação de registro - em produção, fazer chamada para API
      const userData = {
        id: Date.now(),
        name,
        email,
        role: 'user'
      }
      setUser(userData)
      localStorage.setItem('neura-user', JSON.stringify(userData))
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Erro ao criar conta' }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('neura-user')
  }

  const isAdmin = () => {
    return user?.role === 'admin'
  }

  const isAuthenticated = () => {
    return !!user
  }

  const value = {
    user,
    login,
    register,
    logout,
    isAdmin,
    isAuthenticated,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}

