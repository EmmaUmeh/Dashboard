import styled from "styled-components";
import {MdOutlineCancelPresentation} from 'react-icons/md';
import { useState } from "react";
import GreetingEveryday from "./Greeting/GreetingEveryday";
import { motion } from "framer-motion";
import CompanyRegImage from "../images/companyregister.svg"

const Container = styled.div`
padding-top: 140px;
background: #EAF4F4;
height: 100vh;
.hidden{
    display: none;
}
.companyimage{
    width: 18%;
}
@media (max-width: 500px) {
   
    .greetingtxt{
       
        font-size: 15px;
        font-weight: 800;
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

const SpanDetails = styled.div`
font-size: 15px;
   margin-left: 320px;
`;

const CompanyRegister = styled.div`
width: 40%;
border-radius: 15px;
background: #FFFFFF;
// box-shadow: 0px 4px 30px 3px rgba(0, 0, 0, 0.25);
margin-left: 320px;
padding: 8px 8px 8px 8px;
margin-top: 50px;

`;


const CompanyText = styled.div`
display: flex;
flex-direction: column;
padding-left: 30px;
`;

const FlexWrapper = styled.div`
display: flex;
justify-content: center;
`;
const Companyparagraph = styled.div`

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

            <SpanDetails>
            <span>Hello, Mr Emma you are have been promoted as our senior developer.</span>
            </SpanDetails>

        <CompanyRegister>
        
        <FlexWrapper>

                <div className="companyimage">
                    <img src={CompanyRegImage} alt="companyregimage"/>
                </div>

        <CompanyText>
 <div className="font-bold">
      Company Register
 </div>

 <p>
 keeping records of all our staffs,working  both locally and international..
 </p>
</CompanyText>
        </FlexWrapper>


        </CompanyRegister>

        </Container>
        </>
    )
}

