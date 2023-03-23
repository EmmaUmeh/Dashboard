import styled from "styled-components";
import {MdOutlineCancelPresentation} from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Sidebar from "../Sidebar";

const Container = styled.div`
width: 100%;
position: relative;
top: 120px;
`;

const ContainerChild = styled.div`
background: #D1E9E9;
width: 65%;
position: relative;
left: 25%;
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

export  default function HomeApi() {
    const showToastMessage = () => {
        toast.success('Notification Deleted!', {
            position: toast.POSITION.TOP_RIGHT

        });
    };
    return(
        <>
        <Container>
        <ToastContainer />
            <ContainerChild className="childt">
                    <HomeApiAlt className="homet">
                     
                     <RequestDetails className="pb-5">
                        
                        <span className="font-bold">
                                Your payment request has been approved
                            </span>

                            <Button onClick={showToastMessage}>
                                <MdOutlineCancelPresentation size="30"/>
                            </Button>
                           
                     </RequestDetails>

                    <Paymentdetails>
                        <DateReference>
                                Payment issued on: Mon Jan 02 2023 04:58:04 GMT-0800 (Pacific Standard Time)
                            </DateReference>

                            <SeeDetails className="font-medium">
                                See Details
                            </SeeDetails>
                    </Paymentdetails>


                    </HomeApiAlt>
            </ContainerChild>
        </Container>
        </>
    )
}