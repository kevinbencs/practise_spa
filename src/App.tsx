
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Search from './pages/search'
import Category from './pages/category'
import Drink from './pages/drink'
import NotFound from './pages/notFound'


function App() {

  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/category' element={<Category />} />
            <Route path='/drink' element={<Drink />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  )
}

export default App
