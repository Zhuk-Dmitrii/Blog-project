import ReactDOM from 'react-dom/client'
import { App } from './App/App.jsx'
import { refreshJWTToken } from './utils/refreshJWTToken.js'

async function initApp () {
    await refreshJWTToken()
    ReactDOM.createRoot(document.getElementById('root')).render(
        <App />
    )
}

initApp()
