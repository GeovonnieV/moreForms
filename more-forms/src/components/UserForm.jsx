import userEvent from '@testing-library/user-event';
import React, {useState} from 'react';

const UserForm = ({setFirstName,setLastName,setEmail,setPassword}) => {

    const [firstNameError, setFirstNameError] = useState("")
 
    // gets the events target value and updates the firstnames state with it
    const handleFirstName = (e) => {
        setFirstName(e.target.value)

        if(e.target.value.length < 1 ){
            setFirstNameError("First Name is required")
        }else if(e.target.value.length < 2){
            setFirstNameError("First Name must be longer")
        }else{
            setFirstNameError("")
        }
    }


    return (        
       <div>
           <h1>User Form</h1>
           <form>
               <div>
                   {/* is there a firstNameError if so display it in a p tag */}
                {
                    firstNameError ? 
                    <p>{firstNameError}</p>: ''
                }
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={handleFirstName} />
               </div>
               <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)}  />
               </div>
               <div>
                <label>Email: </label>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
               </div>
               <div>
                <label>Password: </label>
                <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
               </div>
           </form>
       </div>
    );
};
    
export default UserForm;