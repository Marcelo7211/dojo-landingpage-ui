import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'; // Importe useInView
import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Beneficios from './components/home/beneficios'
import Home from './components/home/home'
import SessaoEfeito_1 from './components/home/sessaoEfeito_1'
import NossosServicos from './components/home/nossosServicos';



function App() {

  const [ref, inView] = useInView({
    triggerOnce: true, // Dispara apenas uma vez quando o elemento entra na tela
  });

  const fadePropsHeader = useSpring(
    {
      opacity: inView ? 1 : 0,
      from: { opacity: 0 },
      config: { duration: 500, delay: 1000 }
    }); // Adicione a animação de fade com delay de 2 segundos


  return (
    <div className="bg-white" >
      <Header />
      <Home />
      <Beneficios />
      <SessaoEfeito_1 />
      <NossosServicos />
      <animated.div style={fadePropsHeader} ref={ref}>
        <Footer />
      </animated.div>
    </div>
  )
}

export default App;