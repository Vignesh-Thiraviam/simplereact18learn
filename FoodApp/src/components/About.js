import { useContext } from "react"
import UserContext from "../utils/UserContext"
import { User } from "./User"
import UserClass from "./UserClass"

export const About = ()=>{

    const {loggedInUser , setUserName} = useContext(UserContext);
    return (
        <div>
            <User name = {"Vignesh"} location={"Madurai"} />
            <User name = {"Sasikala"} location={"Madurai"}/>
            <div className="px-4 border-solid ">
                <label className="font-serif font-bold"> Change username</label>
                <input className="bg-slate-400" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <UserContext.Consumer>{ (data) => {
                console.log(data);
                return <h1 className="font-bold pb-8">{data.loggedInUser}</h1>
            }}</UserContext.Consumer>
        </div>
    )
}