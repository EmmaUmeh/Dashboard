import styled from "styled-components";
import {MdOutlineCancelPresentation} from 'react-icons/md';
import { useState } from "react";
// import Greeting from "./Greeting/Greeting";
import GreetingEveryday from "./Greeting/GreetingEveryday";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
width: 100%;
position: relative;
top: 120px;
`;

const PaymentFlex = styled.div`
display: flex;
justify-content: center;
margin-left: 180px;
`;

const PaymentColor = styled.div`
background: #D1E9E9;
width: 65%;
padding: 15px 15px 15px 15px;
`;

const HomeApiAlt = styled.div`
display: flex;
flex-direction: column;

color: #2A9D8F;
`;

const DateReference = styled.div`

`;

const SeeDetails = styled.a`
color: #1151CE;
text-decoration: underline;
cursor: pointer;
`;

const Paymentdetails = styled.div`
display: flex;
justify-content: space-between
`;

const RequestDetails = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`;

const Button = styled.button`
cursor: pointer;
`;

const GreetingTime = styled.div`
display: flex;
justify-content: center;
font-size: 48px;
margin-top: 50px;
margin-left: 80px;
font-weight: 500;

`;


export  default function HomeApi() {
    // const[cancel, setCancel] = useState(false);
    const [paymenttime, setPaymentTime] = useState(new Date());
    const [greet, setGreet] = useState(new Date())
    
    setPaymentTime;
    setGreet;

   

    return(
        <>
        <Container>
        {/* <ToastContainer /> */}
            <PaymentFlex>

                <PaymentColor>
                <HomeApiAlt className="">
                     
                     <RequestDetails className="pb-5">
                        
                        <span className="font-bold">
                                Your payment request has been approved
                            </span>

                            <Button >
                                <MdOutlineCancelPresentation size="30"/>
                            </Button>
                           
                     </RequestDetails>

                    <Paymentdetails>
                        <DateReference>
                                Payment issued on {paymenttime.toString().toLocaleUpperCase()}
                            </DateReference>
 
                            <SeeDetails className="font-medium">
                                See Details
                            </SeeDetails>
                    </Paymentdetails>


                    </HomeApiAlt>
                </PaymentColor>

          
               
            </PaymentFlex>

            <GreetingTime>
                  {/* <Greeting GreetingDay={"Good Morning"}  GreetingNoon={"Good Afternoon"} GreetingNight={"Good Evening"} /> Emmanuel Umeh */}
             <GreetingEveryday GreetingDay={"Good Morning"}  GreetingNoon={"Good Afternoon"} GreetingNight={"Good Evening"}/>, Emmanuel Umeh
            </GreetingTime>
        </Container>
        </>
    )
}

