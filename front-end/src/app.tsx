import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import SignIn from './pages/authentication/sign-in'

const App: React.FC = () => (
  <Router>
    <SignIn />
  </Router>
)

export default App
