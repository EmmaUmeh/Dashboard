import styled from "styled-components"
import {AiOutlineUsergroupAdd} from 'react-icons/ai'

const Container = styled.div`
margin-top: 30px;
`;

const CompanyStaffAlt = styled.div`
cursor: pointer;
display: flex;
padding: 5px 5px 5px 20px;
align-items: center;
// background: #2A9D8F;
color: #2A9D8F;
`;

export  default function CompanyStaff() {
    return(
        <>
        <Container>
            <CompanyStaffAlt>
            <AiOutlineUsergroupAdd size="28" className="mr-5"/>
                New Members
            </CompanyStaffAlt>

        </Container>
        </>
    )
}