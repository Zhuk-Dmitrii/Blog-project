import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from '../router.jsx'
import { store } from '../redux/store.js'
// import { Auth } from '../components/Auth/Auth.jsx'
import './App.scss'

export function App() {
  return (
      <Provider store={store}>

          <RouterProvider router={router} />

      </Provider>
  )
}