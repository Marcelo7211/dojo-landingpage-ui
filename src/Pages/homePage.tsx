import Beneficios from "../components/home/beneficios";
import Home from "../components/home/home";
import NossosServicos from "../components/home/nossosServicos";
import SessaoEfeito_1 from "../components/home/sessaoEfeito_1";

export default function HomePage(){
    return (
        <>
            <Home />
            <Beneficios />
            <SessaoEfeito_1 />
            <NossosServicos />
        </>
    );
}