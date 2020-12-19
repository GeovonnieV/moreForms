import React from "react";

const Results = ({firstName, lastName, email, password}) => {
    
    return(
        <div>
            <h2>Results</h2>
            <p>Welcome {firstName} {lastName} </p>
            <p>We will spam you at {email}</p>
            <p>We will publish your password {password}</p>
        </div>
    )
}

export default Results;