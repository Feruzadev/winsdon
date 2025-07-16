import { Outlet } from "react-router-dom";
import Sdbar from "../Components/Sdbar/Sdbar";

export default function AdminLayout(){
    return(
        <div className="flex w-[100%] overflow-hidden">
            <Sdbar/>
            <Outlet/>
        </div>
    )
}