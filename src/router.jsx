
import {BrowserRouter,RouterProvider,createBrowserRouter} from "react-router-dom";
import './App.css'
import Navbar from "./Navbar";
import SignUpForm from "./signup";
import LoginForm from "./login";
import CardsRow from "./CardsRow";


const router=createBrowserRouter(
    [
        {
            path:"/CardsRow",
            element:
            <div>
                <Navbar/>
                <CardsRow/>
            </div>
        },

        {
            path:"/SignUpFormp",
            element:
            <div>
                <Navbar/>
                <SignUpForm/>
            </div>
        },
        {
            path:"/LoginFormn",
            element:
            <div>
                <Navbar/>
                <LoginForm/>
            </div>
        },
        


    ]
   
)


function Routing(){
    return(
        <>
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
        </>
    )
}

export default Routing