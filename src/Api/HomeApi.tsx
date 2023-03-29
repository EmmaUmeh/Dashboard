import styled from "styled-components";
import {MdOutlineCancelPresentation} from 'react-icons/md';
import { useState } from "react";
import GreetingEveryday from "./Greeting/GreetingEveryday";
import { motion } from "framer-motion";
// import Greeting from "./Greeting/Greeting";
// import GreetingEveryday from "./Greeting/GreetingEveryday";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
padding-top: 140px;

.hidden{
    display: none;
}

@media (max-width: 500px) {
   
    .greetingtxt{
        // display: none;
        font-size: 15px;
        font-weight: 500;
        display: flex;
        justify-content: center;
     
    }

    .paymentscreenmode{
       
        margin-left:0px;
    }
    .paymentdetails{
        display: flex;
        flex-direction: column;
    }

.paymentcolor{
    width: 80%;
}

    }

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
justify-content: space-between;
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
font-size: 50px;
margin-top: 50px;
margin-left: 80px;
font-weight: 500;

`;

const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none"
    }
  };


export  default function HomeApi() {

   
    // const[cancel, setCancel] = useState(false);
    const [paymenttime, setPaymentTime] = useState(new Date());
    const [greet, setGreet] = useState(new Date());
    const [cancelout, setCancelout] = useState(false);
    
   const CancelAll = () => setCancelout(!cancelout)
    
    setPaymentTime;
    setGreet;
    
    

   

    return(
        <>
        <Container>
        <motion.div
animate={cancelout ? hide : ''}

>
<PaymentFlex className="paymentscreenmode">

                <PaymentColor className="paymentcolor">
                <HomeApiAlt className="">
                     
                     <RequestDetails className="pb-5">
                        
                        <span className="font-bold">
                                Your payment request has been approved
                            </span>

                            <Button onClick={CancelAll}>
                                <MdOutlineCancelPresentation size="30"/>
                            </Button>
                           
                     </RequestDetails>

                    <Paymentdetails className="paymentdetails">
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
            </motion.div>
            
            <GreetingTime>
                  {/* <Greeting GreetingDay={"Good Morning"}  GreetingNoon={"Good Afternoon"} GreetingNight={"Good Evening"} /> Emmanuel Umeh */}
            
                <div className="greetingtxt">
                    <GreetingEveryday GreetingDay="Good Morning" GreetingNoon="Good Afternoon" GreetingNight="Good Evening"/>, Emmanuel Umeh
                </div>
            
            </GreetingTime>

            
        </Container>
        </>
    )
}

