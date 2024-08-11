import cardCrianca from '../../assets/cardCrianca.png';
import cardAdulto from '../../assets/cardAdulto.png';
import cardAdolescente from '../../assets/cardAdolescente.png';
import cardJovem from '../../assets/cardJovem.png';

export default function Beneficios() {
    return (
        <section className="bg-transparent text-foreground py-12">
            <h2 className="text-4xl font-bold text-center mb-8">Beneficios em praticar karate</h2>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-lg text-center" style={{ backgroundImage: `url(${cardCrianca})`, backgroundSize: 'cover' }}>
                    <h3 className="text-white text-xl font-semibold mb-2" style={{ textShadow: '2px 2px 4px gray' }}>Criança</h3>
                    <p className="text-white text-muted-foreground mb-4" style={{ textShadow: '2px 2px 4px gray' }}>Desenvolvem disciplina, autocontrole e confiança, além de melhorar a coordenação motora e promover um estilo de vida ativo desde cedo.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg text-center" style={{ backgroundImage: `url(${cardAdolescente})`, backgroundSize: 'cover' }}>
                    <h3 className="text-white text-xl font-semibold mb-2" style={{ textShadow: '2px 2px 4px gray' }}>Adolescentes</h3>
                    <p className="text-white text-muted-foreground mb-4" style={{ textShadow: '2px 2px 4px gray' }}>Aprendem a canalizar energia de forma positiva, ganham autoconfiança, e desenvolvem habilidades de liderança e foco, essenciais tanto no dojo quanto na vida acadêmica e social.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg text-center" style={{ backgroundImage: `url(${cardJovem})`, backgroundSize: 'cover' }}>
                    <h3 className="text-white text-xl font-semibold mb-2" style={{ textShadow: '2px 2px 4px gray' }}>Jovens</h3>
                    <p className="text-white text-muted-foreground mb-4" style={{ textShadow: '2px 2px 4px gray' }}>Encontram um ambiente que fortalece o corpo e a mente, promovendo resiliência, determinação, e um senso de propósito, além de preparar fisicamente e mentalmente para as competições e desafios da vida.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg text-center" style={{ backgroundImage: `url(${cardAdulto})`, backgroundSize: 'cover' }}>
                    <h3 className="text-white text-xl font-semibold mb-2" style={{ textShadow: '2px 2px 4px gray' }}>Adultos</h3>
                    <p className="text-white text-muted-foreground mb-4" style={{ textShadow: '2px 2px 4px gray' }}>Beneficiam-se do aumento da flexibilidade, força e saúde cardiovascular, enquanto encontram um espaço para aliviar o estresse e melhorar a concentração, além de manterem-se ativos e equilibrados em meio às demandas do dia a dia.</p>
                </div>
            </div>
        </section>
    )
}