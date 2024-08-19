import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Coquilha from './../../assets/Produtos/Coquilha.jpg'
import CoquilhaSimples from './../../assets/Produtos/Coquilha Simples.jpg'
import FaixaAkaAO from './../../assets/Produtos/FaixaAKAAo.jpg'
import FaixaAKAOCetim from './../../assets/Produtos/FaixaAKAAOCetim.jpg'
import KimonoShiai from './../../assets/Produtos/Kimono Shiai.jpg'
import Kimono1 from './../../assets/Produtos/Kimono1.jpg'
import Kimono2 from './../../assets/Produtos/Kimono2.jpg'
import Kimono3 from './../../assets/Produtos/Kimono3.jpg'
import Kimono4 from './../../assets/Produtos/Kimono4.jpg'
import LuvaAoShiroi from './../../assets/Produtos/LuvaAOShiroi.jpg'
import LuvaAkaShiroi from './../../assets/Produtos/LuvaAkaShiroi.jpg'
import ProtetorTorax from './../../assets/Produtos/Protetor de Torax Mascolino.jpg'
import ProtetorBocal from './../../assets/Produtos/ProtetorBocal.jpg'




function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {

 
  const [listProdutos, setListProdutos] = useState<[]>([]);

  useEffect(()=>{
    getAll();
  },[])

  async function getAll () {


        const products: any = [
            { id: 1, banner:FaixaAkaAO, titulo: "Faixa Aka e Ao" },
            { id: 2, banner:FaixaAKAOCetim, titulo: "Faixa Cetim" },
            { id: 3, banner:KimonoShiai, titulo: "Kimono Shiai" },
            { id: 4, banner:Kimono1, titulo: "Kimono K12" },
            { id: 5, banner:Kimono2, titulo: "Kimono 10" },
            { id: 6, banner:Kimono3, titulo: "Kimono infantil" },
            { id: 7, banner:Kimono4, titulo: "Kimono infaltil" },
            { id: 8, banner:LuvaAoShiroi, titulo: "Luva Ao Shiroi" },
            { id: 9, banner:LuvaAkaShiroi, titulo: "Luva Aka Shiroi" },
            { id: 10, banner:ProtetorTorax, titulo: "Protetor de Torax Masculino" },
            { id: 11, banner:ProtetorBocal, titulo: "Protetor Bocal" },
            { id: 12, banner:Coquilha, titulo: "Coquilha" },
            { id: 13, banner:CoquilhaSimples, titulo: "Coquilha simples" },
        
        ];
    


     setListProdutos(products);
  }

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <Slider {...settings}>

      {
        listProdutos.map((item: any)=> (
          <div key={item.id}>
            <div className="relative">
              <img src={item.banner} alt="Featured" className="w-full object-cover" />
              <div className="absolute bottom-2 left-8">
                <h1 className="text-2xl font-bold">{item.titulo}</h1>
              </div>
            </div>
          </div>
        ))
      }
    </Slider>
  );
}