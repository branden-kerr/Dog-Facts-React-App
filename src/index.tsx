import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/auth';



var firebaseConfig = {
  apiKey: "AIzaSyCVetV2u0lUTb182faqRj6dgduDZB_ZwmQ",
  authDomain: "material-ui-react-app.firebaseapp.com",
  projectId: "material-ui-react-app",
  storageBucket: "material-ui-react-app.appspot.com",
  messagingSenderId: "385696266667",
  appId: "1:385696266667:web:acf7f423fd7c3068c33aee",
  measurementId: "G-9EDNDKTZ7R"
};


ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
  <App />
  </FirebaseAppProvider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

