import React from 'react';

const UserForm = (setFirstName,setLastName,setEmail,setPassword) => {
 
    // gets the events target value and updates the firstnames state with it
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    return (        
       <div>
           <h1>User Form</h1>
           <form>
               <div>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={handleFirstName} />
               </div>
               <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)}  />
               </div>
               <div>
                <label>Email: </label>
                <input type="text" name="email"/>
               </div>
               <div>
                <label>Password: </label>
                <input type="text" name="password"/>
               </div>
           </form>
       </div>
    );
};
    
export default UserForm;