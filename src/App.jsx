import './App.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from './firebase/firebase.config';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function App() {

  const handelGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const googleUser = result.user;
      console.log(googleUser);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <div>
   
     <h1>Assignment 09</h1>
      
       <div>
        <button onClick={handelGoogleSignIn}>Google SignIn</button>
       </div>
      </div>
      
    </>
  )
}

export default App
