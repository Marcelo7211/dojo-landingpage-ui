import { 
    FaFacebook, 
    FaInstagram, 
    FaYoutube, 
    FaTwitter 
} from 'react-icons/fa'


export default function Footer() {
    return (
        <footer className=" bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
                <div className="flex space-x-6 mb-6 md:mb-0">
                    <a href="#" className="flex flex-col items-center transition-transform transform hover:scale-110">
                        <FaFacebook size={40} />
                        <span className="mt-1 text-sm hover:text-primary">Facebook</span>
                    </a>
                    <a href="#" className="flex flex-col items-center transition-transform transform hover:scale-110">
                        <FaInstagram size={40} />
                        <span className="mt-1 text-sm hover:text-primary">Instagram</span>
                    </a>
                    <a href="#" className="flex flex-col items-center transition-transform transform hover:scale-110">
                        <FaTwitter size={40} />
                        <span className="mt-1 text-sm hover:text-primary">Twitter</span>
                    </a>
                    <a href="#" className="flex flex-col items-center transition-transform transform hover:scale-110">
                        <FaYoutube size={40} />
                        <span className="mt-1 text-sm hover:text-primary">YouTube</span>
                    </a>
                </div>
                
            </div>
            <div className="mt-6 flex flex-col items-center">
                <a href="#" className="text-primary text-lg font-semibold">Código do serviço</a>
                <p className="mt-2 text-sm text-muted-foreground">© 2016–2024 Dojo Paulista, Inc.</p>
            </div>
        </footer>
    )
}