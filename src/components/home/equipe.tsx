// Dados dos membros da equipe

import Guilherme from './../../assets/integrantes/Guilherme.jpeg';
import Daniela from './../../assets/integrantes/Daniela.png';
import Rafael from './../../assets/integrantes/Rafael.png';
import Nani from './../../assets/integrantes/Cristiane.png';
import Vinicius from './../../assets/integrantes/Vinicius.png';
import Dindi from './../../assets/integrantes/Dindi.jpeg';
import Marcelo from './../../assets/integrantes/Marcelo.jpeg';
import Felipe from './../../assets/integrantes/Felipe.png';
import Kathlyn from './../../assets/integrantes/Kathlyn.png';
import Carlos from './../../assets/integrantes/Carlos.png';

const equipeData = [
    { nome: "Marcelo Barboza", cargo: "Presidente - Sensei 2dan", descricao: "Como líder do dojo e Sensei 2dan, meu papel é guiar nossa equipe e alunos rumo à excelência. Minha missão é forjar campeões no tatame e na vida, sempre elevando o nível de cada treino e competição.", foto: Marcelo },
    { nome: "Cristiane Silva", cargo: "Administrativo & CRM ", descricao: "Eu cuido da parte administrativa do dojo, garantindo que tudo funcione perfeitamente. No CRM, meu foco é manter um relacionamento próximo e personalizado com cada aluno, ajudando-os a se sentirem valorizados e motivados para alcançarem seus objetivos.", foto: Nani },
    { nome: "Rafael Henrique ", cargo: "Administrativo & CRM", descricao: "Minha função é assegurar que todos os processos administrativos estejam em ordem, para que nossos atletas e professores possam se concentrar no que realmente importa: competir e vencer. Além disso, trabalho no CRM para manter nossos alunos engajados e comprometidos.", foto: Rafael },
    { nome: "Guilherme Victor", cargo: "Secretário, Professor e Atleta", descricao: "Como secretário, professor e atleta, meu objetivo é inspirar nossos alunos a darem o melhor de si. Estou aqui para mostrar, através do meu próprio exemplo, que com dedicação e esforço, todos podem alcançar a excelência no Karatê.", foto: Guilherme },
    { nome: "Felipe Barbosa", cargo: "Preparador Fisico - Sensei 2dan", descricao: "Eu sou responsável por preparar nossos atletas fisicamente para os desafios das competições. Como Sensei 2dan, combino técnicas rigorosas com treinos intensos para garantir que cada um esteja no ápice de sua forma física e técnica.", foto: Felipe },
    { nome: "Vinicius Oliveira ", cargo: "Professor e Atleta", descricao: "Meu papel como professor e atleta é motivar nossos alunos a superarem seus limites. Participo ativamente das competições e uso minha experiência para guiá-los no caminho da dedicação e sucesso, sempre buscando a excelência.", foto: Vinicius },
    { nome: "Daniela Yammine", cargo: "Professora e Preparador Fisico", descricao: "Eu acredito que a combinação de técnica e preparo físico é a chave para o sucesso. Como professora e preparadora física, meu objetivo é garantir que nossos atletas estejam fortes, equilibrados e prontos para dominar em qualquer competição.", foto: Daniela },
    { nome: "Kathlyn Barboza", cargo: "Professora e Atleta", descricao: "Eu acredito que a técnica refinada e o preparo mental são fundamentais para o sucesso no Karatê. Como professora e atleta, meu objetivo é inspirar nossos alunos a alcançar a excelência no tatame, mostrando que com dedicação e disciplina, eles podem dominar qualquer desafio em competições.", foto: Kathlyn},
    { nome: "Elisama Robert", cargo: "Marketing, Enfermeira e Organizaçao", descricao: "Eu acredito que uma comunicação eficaz e uma organização impecável são essenciais para o sucesso de qualquer equipe. No meu papel em Marketing e Organização, meu objetivo é promover a imagem do dojo e garantir que cada evento e competição sejam planejados com precisão, proporcionando uma experiência enriquecedora para nossos atletas e público.", foto: Dindi },
    { nome: "Carlos José da Silva", cargo: "Terapeuta", descricao: "Meu foco é cuidar do bem-estar mental e físico de nossos atletas. Como terapeuta, estou aqui para garantir que eles estejam equilibrados e preparados, tanto dentro quanto fora do tatame, para enfrentar e vencer qualquer desafio.", foto: Carlos }
];

// Renderização dinâmica dos membros da equipe
export default function Equipe() {
    return (
        <div className="min-h-screen bg-background text-foreground p-4">
            <div className="container mx-auto">
                <div className="w-full p-6 rounded-lg shadow-lg text-center mb-12">
                    <article className="prose prose-lg text-gray-700">
                        <p>
                            No <strong>Dojo Paulista</strong>, acreditamos que o Karatê é muito mais do que uma arte marcial; é uma ferramenta poderosa para moldar o caráter e transformar vidas. Nosso foco principal é a competição, onde cada treino é uma oportunidade de crescimento e cada desafio enfrentado é uma lição para a vida.
                        </p>
                        <p>
                            Nosso dojo é um espaço onde crianças, jovens e adultos de todas as idades encontram um ambiente acolhedor e desafiador, que promove não apenas a excelência física, mas também o desenvolvimento mental e emocional. Com um time de instrutores altamente qualificados, nos dedicamos a forjar campeões que não se destacam apenas no tatame, mas também na vida cotidiana.
                        </p>
                        <p>
                            Valorizamos a disciplina, o respeito e a perseverança, pilares que sustentam nossa filosofia e que são transmitidos em cada aula. Através do Karatê, buscamos inspirar nossos alunos a superarem seus próprios limites, sempre com o objetivo de alcançar a vitória de maneira justa e honrosa.
                        </p>
                        <p>
                            No <strong>Dojo Paulista</strong>, o caminho para a vitória começa com a formação de um caráter sólido e resiliente. Venha fazer parte desta jornada e descubra o poder do Karatê em transformar sua vida.
                        </p>
                    </article>
                </div>

                <h1 className="text-3xl font-bold mb-8 text-center">Nossa equipe</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {equipeData.map((membro, index) => (
                        <div key={index} className="bg-card p-4 rounded-lg shadow-md">
                            <img src={membro.foto} alt={`Foto de ${membro.nome}`} className="w-full  object-cover rounded-lg mb-4" />
                            <h2 className="text-xl font-semibold mb-2">{membro.nome}</h2>
                            <h3 className="text-base font-medium text-gray-500 mb-3">{membro.cargo}</h3>
                            <p className="text-muted-foreground  text-gray-700">{membro.descricao}</p>
                        </div>
                    ))}
                </div>
                <div className="text-2xl text-center mx-11 my-12">
                    <p>Cada integrante da equipe desempenha um papel essencial para que o dojo alcance o sucesso nas competições, compartilhando sua paixão e experiência com todos os alunos.</p>
                </div>
            </div>
        </div>
    )
}