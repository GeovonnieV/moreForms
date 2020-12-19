import React, {useState} from "react";
import './App.css';
import UserForm from "./components/UserForm"
import Results from "./components/Results"

function App() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="App">
      <UserForm setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} setPassword={setPassword} />
      <Results firstName={firstName} lastName={lastName} email={email} password={password} />
    </div>
  );
}

export default App;
