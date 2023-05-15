import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<h1>Tela de checkout</h1>} />
        <Route path="/success" element={<h1>Pedido confirmado</h1>} />
      </Route>
    </Routes>
  )
}