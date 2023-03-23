import styled from 'styled-components';
import Home from './Home/Home';
import CompanyStaff from './companystaff/Companystaff';
import Payroll from './Payroll/Payroll';
import Schedule from './schedulemetting/Schedule';
import Messages from './Messages/Messages';
import Settings from './Settings/Settings';


const Container = styled.div`
background: #FFFFFF;
width: 20%;
height: 100vh;
padding: 100px 5px 5px 5px;
box-shadow: 0px 4px 30px 3px rgba(0, 0, 0, 0.25);
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

                <Home />
                <CompanyStaff />
                <Payroll />
                <Schedule />
                <Messages />
                <Settings />
                
           </Container>
        </>
    )
}