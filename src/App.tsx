import { animated, useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer'; // Importe useInView
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HomePage from './Pages/homePage';
import Shop from './Pages/shop';
import Sobre from './Pages/sobre';


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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loja" element={<Shop />} />
          <Route path="/sobre-nos" element={<Sobre />} />
        </ Routes>
      </BrowserRouter>
      <animated.div style={fadePropsHeader} ref={ref}>
        <Footer />
      </animated.div>
    </div>
  )
}

export default App;