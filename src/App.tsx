
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Search from './pages/search'
import Category from './pages/category'
import Drink from './pages/drink'
import NotFound from './pages/notFound'
import Dashboard from './pages/dashboard'
import NewPassword from './pages/newPassword'
import Login from './pages/login'
import Signup from './pages/signup'
import Layout from './components/layout'


function App() {

  return (
    <Layout>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/category' element={<Category />} />
          <Route path='/drink' element={<Drink />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/newpassword' element={<NewPassword />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </Layout>
  )
}

export default App
