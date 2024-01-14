import { pink } from "@mui/material/colors";
import icon from "../assets/tw.svg";
import { FiSearch } from "react-icons/fi";
import { PiNotePencilLight } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple,blue} from '@mui/material/colors';
import { Typography } from "@mui/material";
import { IoIosOptions } from "react-icons/io";
import { useState } from "react";



const Navbar=()=>{
    const[search,setsearch]=useState(false);
    return(
        <>
        <div className="w-full h-fit p-[8px] pr-[25px] bg-white flex border-b-2 gap-2">
        <button className="w-[70px] h-[40px] "><img src={icon} className="w-full h-full" alt="icon not looded"></img></button>
        <div className="flex-grow h-[40px] "><div className="w-[240px] h-full bg-slate-100 rounded-s-full rounded-e-full px-3 hidden sm:flex "><div className="w-fit h-full  flex place-items-center  font-black text-[23px] text-neutral-500"><FiSearch/></div><div className="w-full flex-grow h-full px-[5px]">
        <form className="w-full h-full  text-[15px] pl-[8px] "><input type="text" className="w-full h-full bg-transparent outline-none" placeholder="Search"></input></form>    
        </div></div></div>
        <div className="w-fit h-[40px]  flex gap-5">
        <button className="w-fit h-full  flex place-items-center  font-black text-[24px] text-neutral-600 sm:hidden" onClick={()=>{setsearch((search)=>(!search))}}><FiSearch/></button>
        <button className="w-fit h-full hidden sm:flex place-items-center  font-black text-[24px] text-neutral-600"><PiNotePencilLight/><div className="text-[14px] font-[450] ml-1 ">Post</div></button>
        <button className="w-fit h-full  flex place-items-center   text-[32px] text-black"><Avatar sx={{color:"black"}} >W</Avatar></button>
        <button className="w-fit h-full  flex place-items-center  font-black text-[24px] text-neutral-600"><IoIosOptions/></button>
        
        </div>
        </div>
        {(search)?(<div className=" pt-3 w-full h-screen px-3 sm:hidden bg-black "><div className="w-full h-[40px] bg-slate-100 rounded-s-full rounded-e-full px-3 flex "><div className="w-fit h-full  flex place-items-center  font-black text-[23px] text-neutral-500"><FiSearch/></div><div className="w-full flex-grow h-full px-[5px]">
        <form className="w-full h-full  text-[15px] pl-[8px] "><input type="text" className="w-full h-full bg-transparent outline-none" placeholder="Search"></input></form>    
        </div></div></div>):null}

        </>
    )
}
export default Navbar;