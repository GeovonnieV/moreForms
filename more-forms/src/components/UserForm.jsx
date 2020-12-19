import React from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (        
       <div>
           <h1>User Form</h1>
           <form>
               <div>
                <label>First Name: </label>
                <input type="text" name="firstName"/>
               </div>
               <div>
                <label>Last Name: </label>
                <input type="text" name="lastName"/>
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