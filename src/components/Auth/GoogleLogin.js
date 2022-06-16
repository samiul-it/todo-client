import React, { useEffect } from 'react';
import auth from './../../firebase/firebase.init';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate=useNavigate();

    const loginWithGoogle = async () => {
      await signInWithGoogle();
    };
    useEffect(() => {
      if (user) {
        console.log("Sign in Successful");
        navigate("/home");
      }
    }, [user]);

    if (error) {
      console.log(error.message);
    }
    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <button onClick={loginWithGoogle} className="btn btn-info">
         Log in With Google
        </button>
      </div>
    );
};

export default GoogleLogin;