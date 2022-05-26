import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppProvider from './hooks'
import SignIn from './pages/authentication/sign-in'

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <SignIn />
    </AppProvider>
  </Router>
)

export default App
