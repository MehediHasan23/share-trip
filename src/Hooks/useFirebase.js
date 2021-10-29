import { useEffect, useState } from "react"
import firebaseInitialize from './../Pages/Login/Firebase/firebase.init'
import { 
  getAuth, 
  signInWithPopup, 
  GithubAuthProvider,
  GoogleAuthProvider, 
  signOut,
  onAuthStateChanged ,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  
  
} 
from "firebase/auth";

firebaseInitialize();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const auth = getAuth();

const useFirebase =()=>{
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
// console.log(user);
  //google
  const signInWithGoogle = () => {
   
    return signInWithPopup(auth, googleProvider);
  };

   //github
   const signInWithGithub = () => {
     
    return signInWithPopup(auth, gitHubProvider);
  };

  //login with Email And Password
  const loginProcess = () =>{ 
   
    return signInWithEmailAndPassword(auth, email, password)
    
    
  }

  // register with email & pass
  const registerProcess = e =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
      const user =result.user
      console.log(user);
      setError('')
      setUserName();
    }).catch(error=>{
      setError(error.message)
    })
  }

  //set user name
  const setUserName =()=>{
    updateProfile(auth.currentUser,{
      displayName : name
    }).then(result=>{})
  }

  //name
  const handleName = e=>{
    setName(e.target.value);
    
  }
  //email
  const handelEmail =e=>{
    setEmail(e.target.value);
    
   }
  //password
  const handelPass =e=>{
    setPassword(e.target.value);
  }


  // sign out
  const logOut = () => {
    
    signOut(auth)
      .then((result) => {
        setUser({});

      })
      .catch((err) => {
        setError(err.message);
      });
      
  };


  // user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
      if (signedInUser) {
        setUser(signedInUser);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  return{
    signInWithGoogle,
    signInWithGithub,
    loginProcess,
    registerProcess,
    handleName,
    handelEmail,
    handelPass,
    user,
    name,
    error,
    setError,
    setUser,
    logOut,
    loading
    
  }

}

export default useFirebase;