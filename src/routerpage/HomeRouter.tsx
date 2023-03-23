


import styled from "styled-components"
import {TbHomeShare} from 'react-icons/tb'
// import Sidebar from "../Sidebar";

const Container = styled.div`
margin-top: 50px;
`;

const HomeAlt = styled.div`
cursor: pointer;
display: flex;
padding: 5px 5px 5px 20px;
align-items: center;
// background: #2A9D8F;
color: #2A9D8F;
`;

export  default function HomeRouter() {
    return(
        <>
        <Container>
            <HomeAlt>
            <TbHomeShare size="28" className="mr-5"/>
                Home
            </HomeAlt>
        </Container>
        </>
    )
}