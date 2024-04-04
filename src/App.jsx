import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './page/Главная/Home'
import Categoriya from './page/Categoriya/Categoriya'






function App() {


  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Categoriya/>}/>
        </Routes>

    </>
  ) 
}

export default App
