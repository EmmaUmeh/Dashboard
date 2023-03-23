import styled from 'styled-components';
import {FiAlignJustify, FiXCircle} from 'react-icons/fi';
import {MdOutlineDarkMode,MdOutlineLightMode} from 'react-icons/md';
import { useState } from 'react';
// import {BiMenuAltRight} from 'react-icons/bi';

const Container = styled.div`
z-index: 1;
position: fixed;
width: 100%;
background: #FFFFFF;
padding: 8px 8px 8px 8px;
box-shadow: 0px 4px 30px 3px rgba(0, 0, 0, 0.25);

@media (max-width:480px) {
.menubutton{
    display: block;
}

.logo{
    width:30%;
}
}
`;

const Flex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const LogoImage = styled.div`
width:10%;
`;

const UserInfo = styled.div `
display:flex;
align-items: center;
`;

const UserInfoImg = styled.div`
width:17%;
object-fit: cover;
`;

const UserInfoDetails = styled.div`
display: flex;
flex-direction: column;
margin-right: 20px;
`;

const Button = styled.div`
cursor:pointer;
`;

interface Userdetails{
userName: string;
userTitle: string;
userImage: string;
LogoImage: string;
LogoAlt: string;
UserAlt: string;
}

function Navbar(user: Userdetails) {
    const [toggle, setToggle] = useState(false);

    const [menu, setMenu] = useState(false);
    const Menutoggle = () => setMenu(!menu)

    const Handletoggle = () => setToggle(!toggle);
    // const Handletoggle = () => (!toggle) ? `${Darkmode}` : `${LightMode}`;

  return(
    
    <>
        <Container>
            <Flex>
                <LogoImage className='logo'>
                    <img src={user.LogoImage} alt={user.LogoAlt}/>
                </LogoImage>

                <UserInfo>

                                      

                    <UserInfoImg className='mr-2'>
                        <img src={user.userImage} alt={user.UserAlt}/>
                    </UserInfoImg>

                       
                          <UserInfoDetails>
                            <div className="font-bold">
                                    {user.userName}
                                </div>
                                
                                <span>
                                    {user.userTitle}
                                </span>
                          </UserInfoDetails>
                        
                    <Button  onClick={Handletoggle}>
                       {
                        toggle
                        ?
                        <MdOutlineDarkMode size="28"/>
                        :
                        <MdOutlineLightMode size="28" />
                       }

                    </Button>
                    
                     <Button className='hidden menubutton' onClick={Menutoggle}>
                        {
                            menu
                            ?
                            < FiXCircle size="28"/>
                            :
                            <FiAlignJustify size="28"/>
                        }
                     </Button>

                </UserInfo>         
                   
                       

            </Flex>
        </Container>
    </>
  )
}

export default Navbar;



