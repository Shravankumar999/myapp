import React from "react";


export default function App1(props) {
    App1.defaultProps = {name: "Shravan", age: 20};
    return (
        <div>
            Hello {props.name}. You are {props.age} 
        </div>
    )
}