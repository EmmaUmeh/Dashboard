import  { Link } from "react-router-dom";
import styled from 'styled-components';
import HomeRouter from "../routerpage/HomeRouter";
import CompanyStaffRouter from "../routerpage/CompanystaffRouter";
import PayrollRouter from "../routerpage/PayrollRouter";
import ScheduleRouter from "../routerpage/ScheduleRouter";
import MessagesRouter from "../routerpage/MessagesRouter";
import SettingsRouter from "../routerpage/SettingsRouter";
// import Home from './Home/Home';
// import CompanyStaff from './companystaff/Companystaff';
// import Payroll from './Payroll/Payroll';
// import Schedule from './schedulemetting/Schedule';
// import Messages from './Messages/Messages';
// import Settings from './Settings/Settings';



const Container = styled.div`
background: #FFFFFF;
width: 20%;
height: 100vh;
position: fixed;
padding: 100px 5px 5px 5px;
box-shadow: 0px 4px 30px 3px rgba(0, 0, 0, 0.25);

@media screen and (max-width: 500px) {
    display: none;
}

`;

const Counter = styled.div`
width: 90%;
background: #F1F1F1;
height: 15px;
border-radius: 40px;
`;

const CounterLevel = styled.div`
width: 50%;
background: #FFBA08;
height: 15px;
border-radius: 40px;
`;

const CompanySetup = styled.div`
display: flex;
justify-content: space-between;
`;

const PercentCounter = styled.span`

`;
export default function Sidebar(){
    return(
        <>
           <Container>
            
            <CompanySetup>
                Company Setup
                <PercentCounter>
                    80%
                </PercentCounter>
            </CompanySetup>

           <Counter>
            <CounterLevel>
            </CounterLevel>
           </Counter>




                <Link to="/" className="bg-sky-500 hover:bg-sky-700 ">
                   <HomeRouter />
                </Link>
                
                <Link to="/companystaff">
                    <CompanyStaffRouter />
                </Link>

                <Link to="/payroll">
                    <PayrollRouter />
                    {/* <Payroll /> */}
                </Link>

                <Link to="/schedule">
                    <ScheduleRouter />
                    {/* <Schedule /> */}
                </Link>

                <Link to="/messages">
                    <MessagesRouter />
                    {/* <Messages /> */}
                </Link>

               <Link to="/settings">
                <SettingsRouter />
                    {/* <Settings /> */}
               </Link>
                
             
           </Container>
        </>
    )
}