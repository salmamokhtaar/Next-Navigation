import Image from "next/image";
import Navbar from "./Navbar";
import Banner from "./components/Banner";
import Banner2 from './components/Banner2'

export default function Home() {
  return (
   <>
   <Navbar/>
   <Banner/>
   <Banner2/>
   </>
  );
}
