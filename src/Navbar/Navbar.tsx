// import React from "react";
import LogoImage from "../images/Kutoo.svg";
import {IoIosNotificationsOutline} from 'react-icons/io';
import {MdOutlineLightMode, MdOutlineModeNight} from 'react-icons/md'
import UserImage from "../images/userImage.svg"
import '../Navbar/Navbar.css'
const Navbar = () => {

return(
    <>
        <div className="Navbarcontainer">
            <div className="Navbarchild">
                    <div className="logoimage">
                        <img src={LogoImage} alt="logoimage"/>
                    </div>

                    <div className="Userdetails">
                        <div>
                            <IoIosNotificationsOutline size="30"/>
                        </div>

                        <div>
                            
                            <div className="Userimage">
                                <img src={UserImage} alt="Userimage"/>
                            </div>

                            <div>
                                <span className="font-bold text-blue-600 username">Emmanuel Umeh</span>
                                <span className="userprofession">Software Engineer</span>
                            </div>

                        </div>

                        <div>
                            <MdOutlineLightMode size="30"/>
                            <MdOutlineModeNight size="30"/>
                        </div>
                    </div>
            </div>
        </div>
    </>
)

}

export default Navbar;

