import HomeApi from "../../Api/HomeApi";
import Sidebar from "../Sidebar";



export default function Home() {
    return(
        <>
           <Sidebar /> 
           <HomeApi />
        </>
    )
}