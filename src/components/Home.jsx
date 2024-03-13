import React from "react";
import developer from "../assets/developerZelph.png";
import header from "../assets/header.png";

const Home = () => {
    return (
        <div className="h-screen w-screen overflow-hidden">
            <img alt="header" src={header} className="sm:hidden w-screen " />
            <div className="sm:h-20 min-[720px]:hidden bg-[#2B2B29]" ></div>
            <img alt="developer" src={developer} className="absolute w-[380px] h-[380px] left-[56%] top-[250px] sm:static rounded-full" />
            <div className="absolute sm:text-[30px] sm:left-[0] sm:w-screen p-6 sm:static left-[14%] top-[40%] w-[619px] h-[250px] text-black text-[64px] font-normal">
                <p>Bienvenidos, mi nombre es Luis Zelph Moreno Ruiz</p>
            </div>
        </div>
    )
};

export default Home;