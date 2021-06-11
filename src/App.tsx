import './App.css';

import 'firebase/firestore';

import { makeStyles } from '@material-ui/core/styles';

import Header from "./components/Header";
import PlaceToVisit from "./components/DogContainer"
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
      <CssBaseline/>   
      <Header />
      <PlaceToVisit />


    {/* { <Router>
      <Suspense fallback={'loading burrito status...'}>

      <AuthCheck fallback={<Login/>} auth={auth}>
        <Route exact path="/" component={Home} />

      </AuthCheck>
      </Suspense>
    </Router> } */}
    </div>

  );
}

// function Burrito() {
//   // easily access the Firestore library
//   const burritoRef = useFirestore()
//     .collection('tryreactfire')
//     .doc('burrito');
//   const { status, data }: { status: any; data: any }  = useFirestoreDocData(burritoRef);


//   // easily check the loading status
//   if (status === 'loading') {
//     return <p>Fetching burrito flavor...</p>;
//   }

//   return <p>The burrito is {data.yummy ? 'good' : 'bad'}!</p>;
// }


export default App;
