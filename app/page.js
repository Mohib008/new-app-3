import Image from "next/image";
import Steps from "../Components/Steps.js";
import Navbar from "../Components/Navbar.js";
//import { NavigationMenuDemo } from "./Components/NavigationMenuDemo";


export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-400 sm:640px md:786px 
    text-black items-center justify-items-center min-h-screen
     p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
     >
      <Navbar />
      Hello React!!!!
      <Steps />
    </div>
  );
  
};