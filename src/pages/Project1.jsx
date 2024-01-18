import Intro from '../components/project1/Intro/Intro'
import About from '../components/project1/About/About'
import Intrest from '../components/project1/Intrest/Intrest'
import Footer from '../components/project1/Footer/Footer'
import styles from './Project1.module.css'

function Project1() {

  return (
    <div className='sm:w-1/2 lg:w-1/4 m-auto py-8 text-center'>
      <Intro />
      <About />
      <Intrest />
      <Footer />
    </div>
  )
}

export default Project1
