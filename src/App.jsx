
import { Outlet } from 'react-router-dom'
import './App.css'
import About from './components/About'
import CardsSection from './components/CourseContent'
import Courses from './components/Courses'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import Youtube from './components/Youtube'

function App() {
  

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
