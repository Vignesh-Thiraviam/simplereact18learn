import { useRouteError } from "react-router-dom";

export const ContactUs = ()=>{
    return (
        <div>
            We dont have any other alternative means to reach us. Just interact with our website and our AI will reach you.
        </div>
    )
}

export const Error = ()=>{

    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h2>OOPS something went wrong </h2>
            If you have reached here , it is due to {err.data} We will try and sort it out and comeback.
            <h4>{err.status} : {err.statusText}</h4>
        </div>
    )
}