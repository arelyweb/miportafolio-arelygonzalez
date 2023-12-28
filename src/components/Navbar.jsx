import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";

import LOGOARR from "../assets/LOGOARR.png";
const Navbar = () => {  
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <div className="fixed w-full h-{80px} flex justify-between items-center px-4 bg-black text-white relative">
        <div>  
            <img src={LOGOARR} alt="Logo Img"/>
        </div>
        {/*menu*/}
        <ul className="hidden md:flex">
            <li className="p-6">Inicio </li>
            <li className="p-6">Sobre mi </li>
            <li className="p-6">Habilidades </li>
            <li className="p-6">Portafolio </li>
            <li className="p-6">Contacto </li>
        </ul>
            {/*hamburguesa*/}
            <div onClick={toggleMenu} className="md:hidden z-10 ">
                {!showMenu ? <FaBars/> : <FaTimes/>}
            </div>
            {/*mobile menu*/}
            <ul className={!showMenu ? 'hidden' : 'absolute top-10 left-0 w-full bg-black/80  flex flex-col justify-center items-center'}>
                <li className="p-6 text-2xl">Inicio</li>
                <li className="p-6 text-2xl">Sobre mi</li>
                <li className="p-6 text-2xl">Habilidades</li>
                <li className="p-6 text-2xl">Portafolio</li>
                <li className="p-6 text-2xl">Contacto</li>
            </ul>
            {/*social media*/}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-2px] duration-300 bg-[#0077b5]">
                        <a className="flex ml-5 justify-between items-center w-full text-white " href="http://" target="_blank">
                            Linkedin <FaLinkedin className="m-3" size={30}/>
                        </a>
                    </li>
                    <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-2px] duration-300 bg-[#3d3d3d]">
                        <a className="flex ml-5 justify-between items-center w-full text-white " href="http://" target="_blank">
                            GitHub <FaGithub className="m-3" size={30}/>
                        </a>
                    </li>
                    <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-2px] duration-300 bg-[#59dee5]">
                        <a className="flex ml-5 justify-between items-center w-full text-white " href="http://" target="_blank">
                            Email <HiOutlineMail className="m-3" size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
    }

export default Navbar;