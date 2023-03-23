import styled from "styled-components";
import {AiOutlineCalendar} from 'react-icons/ai';

const Container = styled.div`
margin-top: 30px;
`;

const ScheduleAlt = styled.div`
cursor: pointer;
display: flex;
padding: 5px 5px 5px 20px;
align-items: center;
// background: #2A9D8F;
color: #2A9D8F;
`;

export  default function ScheduleRouter() {
    return(
        <>
        <Container>
            <ScheduleAlt>
            <AiOutlineCalendar size="28" className="mr-5"/>
            Schedule Meeting
            </ScheduleAlt>

        </Container>
        </>
    )
}