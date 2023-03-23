import styled from "styled-components"
import {TbReportMoney} from 'react-icons/tb'

const Container = styled.div`
margin-top: 30px;
`;

const PayrollAlt = styled.div`
cursor: pointer;
display: flex;
padding: 5px 5px 5px 20px;
align-items: center;
// background: #2A9D8F;
color: #2A9D8F;
`;

export  default function PayrollRouter() {
    return(
        <>
        <Container>
            <PayrollAlt>
            <TbReportMoney size="28" className="mr-5"/>
                Payroll
            </PayrollAlt>

        </Container>
        </>
    )
}