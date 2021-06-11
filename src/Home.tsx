import {
  useAuth
} from "reactfire";
import "./App.css";

// Meant to use this for something eles, may use again
function Home() {
  const auth = useAuth();

  return (
      <div style={{padding: 20}}>
        <h1>{auth.currentUser!.email}</h1>
        <button onClick={async ()=> await auth.signOut} style={{margin: 12}}>LOGOUT</button>
      </div>
  );
}

export default Home;
