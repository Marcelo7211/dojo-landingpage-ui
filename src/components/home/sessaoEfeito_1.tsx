import bannerDoisAtletas from '../../assets/cardKihon.png'


export default function SessaoEfeito_1(){
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
          <div className="max-w-5xl flex flex-col md:flex-row items-center bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
            <div className="flex-1 p-8">
              <h1 className="text-4xl font-bold mb-4">Valores</h1>
              <p className="text-lg mb-6">Ensinamos que o Karatê Shotokan não é apenas uma prática física; é uma jornada de autodescoberta que capacita indivíduos de todas as idades a viverem de maneira mais plena, saudável e confiante.</p>
              <a href='https://dojopaulista.actuar.com/' className="bg-red-900 hover:bg-red-600 text-secondary-foreground hover:bg-secondary/80 py-2 px-4 rounded">Faça parte da nossa familia</a>
            </div>
            <div className="flex-1 lg:m-0 mr-2 mb-2">
              <img src={bannerDoisAtletas} alt="Placeholder Image" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      )
}