import SimpleSlider from "../components/home/slider";

export default function Shop() {
    const listCat: any = [
        { id: 1, title: "Kimonos", href: "https://dojopaulista.actuar.com/Kimonos#/" },
        { id: 2, title: "Faixas", href: "https://dojopaulista.actuar.com/faixas#/"},
        { id: 3, title: "Luvas e Caneleiras", href: "https://dojopaulista.actuar.com/luvas-e-caneleiras#/"},
        { id: 4, title: "Proteções", href: "https://dojopaulista.actuar.com/protetores#/"},
    ]

    return (
        <div className="isolate px-6 lg:px-8 mt-16">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="mx-auto max-w-2xl py-10 sm:py-10 lg:py-10">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Nossos Produtos
                    </h1>
                </div>
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>

            <SimpleSlider />

            <div className="mx-auto my-6 max-w-6xl py-10 sm:py-10 lg:py-10">
                <div className="text-center">
                    <h1 className=" font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Acesse por categoria
                    </h1>
                </div>

                <div className="flex flex-wrap justify-center">
                    {listCat.map((item: any) => (
                        <a key={item.id} href={item.href} className="mx-6 mt-7 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-2xl w-60 h-60 flex items-center justify-center">
                            <h1 className="text-2xl">{item.title}</h1> 
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}