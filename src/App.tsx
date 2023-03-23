
// import {Navlist} from "Navbar/Navbar"
// import Navlist from './Navbar/Navbar';
import LogoUrl  from "./images/Kutoo.svg";
import UserImage from "./images/userImage.svg"
import Navbar from "./Navbar/Navbar"
// import Sidebar from "./Sidebar/Sidebar";
import {BrowserRouter as Router,Route ,Routes } from "react-router-dom";
import Home from "./Sidebar/Home/Home";
import CompanyStaff from "./Sidebar/companystaff/Companystaff";
import Payroll from "./Sidebar/Payroll/Payroll";
import Schedule from "./Sidebar/schedulemetting/Schedule";
import Messages from "./Sidebar/Messages/Messages";
import Settings from "./Sidebar/Settings/Settings";


function App() {


  return (
    <div className="">
      
      <Navbar userName={"Emmanuel Umeh"} userTitle={"Software Engineer"} userImage={UserImage} LogoImage={LogoUrl} LogoAlt={"Kutoo image"} UserAlt={"User image"}/>
      {/* <Sidebar /> */}

        
      <Router>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/companystaff" element={<CompanyStaff />}/>
         <Route path="/payroll" element={<Payroll />}/>
         <Route path="/schedule" element={<Schedule />}/>
         <Route path="/messages" element={< Messages/>}/>
         <Route path="/settings" element={<Settings />}/>
        </Routes>
    </Router>
    </div>
  )
}

export default App
