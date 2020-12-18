import './App.css';
import UserForm from "./components/UserForm"
import Results from "./components/Results"

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <UserForm />
      <Results />
    </div>
  );
}

export default App;
