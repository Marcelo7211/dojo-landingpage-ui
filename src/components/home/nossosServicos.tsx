import Kihon from '../../assets/Kihon.png'
import Kata from '../../assets/Kata.png'
import Kumite from '../../assets/cardJovem.png'
import Exame from '../../assets/Exame.png'
import Avaliacao from '../../assets/AvaliacaoFisica.png'
import Campeonato from '../../assets/Campeonatos.png'


export default function NossosServicos() {
    return (
        <div className="bg-white text-zinc-800 p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                    <div className="bg-cyan-700 rounded-full p-4 inline-block">
                        <img alt="halter" src={Kihon} className='rounded-full w-64' />
                    </div>
                    <p className="mt-4"><p className="text-2xl">Kihon</p> Prática das técnicas básicas de Karatê, como golpes, chutes e posturas, repetidas de forma disciplinada para aperfeiçoar a forma e a precisão.</p>
                </div>
                <div className="text-center">
                    <div className="bg-cyan-700 rounded-full p-4 inline-block">
                        <img alt="sneaker" src={Kata} className='rounded-full w-64' />
                    </div>
                    <p className="mt-4"><p className="text-2xl">Kata</p> Sequência coreografada de movimentos que simula um combate contra múltiplos oponentes, desenvolvendo memória muscular, ritmo e técnica.</p>
                </div>
                <div className="text-center">
                    <div className="bg-cyan-700 rounded-full p-4 inline-block">
                        <img alt="heart" src={Kumite} className='rounded-full w-64' />
                    </div>
                    <p className="mt-4"><p className="text-2xl">Shiai Kumite</p>Forma de combate competitivo no Karatê, onde dois praticantes se enfrentam seguindo regras específicas para marcar pontos com técnicas precisas e controladas.</p>
                </div>
                <div className="text-center">
                    <div className="bg-cyan-700 rounded-full p-4 inline-block">
                        <img alt="heart" src={Exame} className='rounded-full w-64' />
                    </div>
                    <p className="mt-4"><p className="text-2xl">Exames de graduações</p> Avaliação formal onde os praticantes de Karatê demonstram seu domínio das técnicas aprendidas, como Kihon, Kata e Kumite, para avançar de faixa.</p>
                </div>
                <div className="text-center">
                    <div className="bg-cyan-700 rounded-full p-4 inline-block">
                        <img alt="heart" src={Avaliacao} className='rounded-full w-64' />
                    </div>
                    <p className="mt-4"><p className="text-2xl">Avaliação e acompanhameto físico</p>Processo que mede a capacidade física de um praticante, avaliando aspectos como força, resistência, flexibilidade, agilidade e condição cardiovascular.</p>
                </div>
                <div className="text-center">
                    <div className="bg-cyan-700 rounded-full p-4 inline-block">
                        <img alt="heart" src={Campeonato} className='rounded-full w-64' />
                    </div>
                    <p className="mt-4"><p className="text-2xl">Campeonatos</p>Competições onde praticantes de Karatê se enfrentam em Kumite (combate) e Kata (sequências de movimentos), medindo suas habilidades técnicas, estratégicas e mentais.</p>
                </div>
            </div>
        </div>
    )
}