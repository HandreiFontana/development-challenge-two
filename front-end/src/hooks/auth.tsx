import React, { createContext, useCallback, useState, useContext } from 'react'
import api from '../services/api'

interface User {
  id: string
  name: string
  email: string
}

interface AuthState {
  token: string
  user: User
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@medcloud:token')
    const user = localStorage.getItem('@medcloud:user')

    if (token && user) {
      api.defaults.headers.common['authorization'] = `Bearer ${token}`

      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const signOut = useCallback(() => {
    localStorage.removeItem('@medcloud:token')
    localStorage.removeItem('@medcloud:user')

    setData({} as AuthState)
  }, [])

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {

    const response = await api.post('sessions', {
      email,
      password,
    })

    const { token, user } = response.data

    localStorage.setItem('@medcloud:token', token)
    localStorage.setItem('@medcloud:user', JSON.stringify(user))

    api.defaults.headers.common['authorization'] = `Bearer ${token}`

    setData({ token, user })
  }, [])

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
