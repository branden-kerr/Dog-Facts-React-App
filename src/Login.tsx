import { useAuth } from "reactfire";
import React from "react";
import "./App.css";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((Theme) => createStyles({
  root: {
      minWidth: 645,
      maxWidth: 645,
      background: 'rgba(0,0,0,0.5)',
      margin: '20px',
    },

}));

function Login() {
  const auth = useAuth();
  const classes = useStyles();
  const handleSubmit = async (_event: any) => {
    _event.preventDefault();
    
    try {
        const { email, password } = _event.target.elements;
        const resp = await auth.signInWithEmailAndPassword(email.value, password.value);  

        // Ensure user exists to avoid null error
        if(resp.user){
            alert("Logged in: " + resp.user.email);
        }
   
    } catch (e) {
        alert("ERROR: " + e.message);
    }
  }
  return (
      <div style={{padding: 20}} className={classes.root}>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="email" style={{display: "block", margin: 12, width: 220}}/>
            <input type="password" name="password" placeholder="password" style={{display: "block", margin: 12, width: 220}}/>
            <button type="submit" style={{margin: 12}}>LOGIN</button>
        </form>
      </div>
  );
}

export default Login;
