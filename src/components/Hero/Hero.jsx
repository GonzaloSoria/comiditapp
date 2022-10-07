import { useState } from 'react';
import '../Hero/style.css';

const Hero = () => {
    const [sushi_hero, setSushiHero] = useState('../img/sushi-hero.png');
    const [pieces, setPieces] = useState('40');
    let sushi_hero2 = '../img/sushi-hero2.png';
    let sushi_hero3 = '../img/sushi-hero3.png';
    let pieces2 = '36';
    let pieces3 = '24';

    const change_sushi_table = (route) => {
        setSushiHero(route);
        if(route == '../img/sushi-hero.png') {
            setPieces('40');
        } else if (route == '../img/sushi-hero2.png') {
            setPieces(pieces2);
        } else if (route == '../img/sushi-hero3.png') {
            setPieces(pieces3);
        };
    };

    return (
        <>
            <section className="hero">
                <div className="container mx-auto px-5 sm:px-0 py-32 pb-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <h1 className="mb-3 lg:text-title-lg">Fresco, Artesanal y <span className="text-second-color">Riquisimo</span>!</h1>
                            <p>Tenemos una gran variedad para que disfrutes un poco de todo</p>
                            <a href="#" className="btn-menu">Menú</a>
                        </div>
                        <div className="pt-16">
                            <img src={sushi_hero} alt="sushi" className="sushi-hero mx-auto" id="sushi" />
                            <p onClick={() =>change_sushi_table(sushi_hero2)} className='pt-8 text-center text-second-color'>{pieces} Piezas variadas</p>
                        </div>
                    </div>
                    <div className="flex justify-center pt-10 lg:justify-start lg:pt-5">
                        <img onClick={() =>change_sushi_table('../img/sushi-hero.png')} src="../img/sushi-hero.png" alt="" className="img-small" />
                        <img onClick={() =>change_sushi_table(sushi_hero2)} src="../img/sushi-hero2.png" alt="" className="img-small" />
                        <img onClick={() =>change_sushi_table(sushi_hero3)} src="../img/sushi-hero3.png" alt="" className="img-small" />
                    </div>
                    <p className="mt-8 text-center lg:text-left">Tablas mejor valoradas</p>
                </div>    
            </section>
        </>
    )
}

export default Hero;

