import './App.css';

import 'firebase/firestore';

import { makeStyles } from '@material-ui/core/styles';

import Header from "./components/Header";
import DogContainer from "./components/DogContainer"
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${'/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));


function App() {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <DogContainer />
    </div>

  );
}

export default App;
