import React from "react";
import developer from "../assets/developer.png";
import header from "../assets/header.png";

const Home = () => {
    return (
        <div className="h-screen w-screen overflow-hidden">
            <img alt="header" src={header} className="sm:hidden w-screen" />
            <div className="sm:h-20 min-[720px]:hidden bg-[#2B2B29]" ></div>
            <img alt="developer" src={developer} className="absolute left-[50%] top-[130px] sm:static" />
            <div className="absolute sm:text-[40px] sm:left-[0] sm:w-screen p-6 sm:static left-[20%] top-[40%] w-[619px] h-[250px] text-black text-[64px] font-normal">
                <p>Hola, soy Luis Moreno, desarrollador de software</p>
            </div>
        </div>
    )
};

export default Home;