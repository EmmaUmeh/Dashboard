
// import {Navlist} from "Navbar/Navbar"
// import Navlist from './Navbar/Navbar';
import LogoUrl  from "./images/Kutoo.svg";
import UserImage from "./images/userImage.svg"
import Navbar from "./Navbar/Navbar"


function App() {


  return (
    <div className="">
      
      <Navbar userName={"Emmanuel Umeh"} userTitle={"Software Engineer"} userImage={UserImage} LogoImage={LogoUrl} LogoAlt={"Kutoo image"} UserAlt={"User image"}/>

    </div>
  )
}

export default App
