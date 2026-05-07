import Navbar from './components/Navbar/Navbar'
import './App.css'
import Intro from './components/Intro/Intro'
import Aboutme from './components/Aboutme/Aboutme'
import Skills from './components/Skills/Skills'
import Achieve from './components/Achieve/Achieve'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
      <Navbar />
      <Intro  />
      <Aboutme />
      <Skills />
      <Projects />
      <Achieve />
      <Contact />
    </>
  )
}

export default App
