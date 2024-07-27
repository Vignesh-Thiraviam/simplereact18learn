export const User = (props) => { 
    const {name,location} = props;
    return ( 
        <div className="flex flex-wrap ">
            <h3 className="font-bold font-sans to-blue-300 px-4 "> {name} 🧔🏾 </h3>
            <p className="font-extralight to-blue-300 px-4">Software Engineer 🧰</p>
            <p className="location">📍 {location}</p>
        </div>
    );
}