import ReactDOM from 'react-dom/client'
import App from './Pages/App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import MyContextProvider from './Context/MyContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MyContextProvider>
    <Router>
      <App />
    </Router>
  </MyContextProvider>
)
