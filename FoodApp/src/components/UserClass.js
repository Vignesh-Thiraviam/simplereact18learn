import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            count2: 0,
            role: "Senior Engineer"
        }
    }

    componentDidMount() {

    }
    
    render() {
        const {name , location} = this.props;
        const {count , role} = this.state;
        return (
        <div className="UserDetails">
            <h3> {name} </h3>
            <p>Likes : {count} <button onClick={() => {
                this.setState({
                    count : this.state.count +1,
                    count2 : this.state.count +1
                })
            }}>like</button></p>
            <p className="role">{role}</p>
            <p className="location">{location}</p>
        </div>
        );
    }
}

export default UserClass;