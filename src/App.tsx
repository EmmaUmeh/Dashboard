
// import {Navlist} from "Navbar/Navbar"
// import Navlist from './Navbar/Navbar';
import LogoUrl  from "./images/Kutoo.svg";
import UserImage from "./images/userImage.svg"
import Navbar from "./Navbar/Navbar"
import Sidebar from "./Sidebar/Sidebar";


function App() {


  return (
    <div className="">
      
      <Navbar userName={"Emmanuel Umeh"} userTitle={"Software Engineer"} userImage={UserImage} LogoImage={LogoUrl} LogoAlt={"Kutoo image"} UserAlt={"User image"}/>
      <Sidebar />
    </div>
  )
}

export default App
