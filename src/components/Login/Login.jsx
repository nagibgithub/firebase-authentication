import React, {useState} from 'react';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/firebase.init';
import './Login.css'

const Login = () => {

    const [userData, setUserData] = useState(null)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUserData(result.user)
            })
            .catch(error => {
                console.log('error: ', error);
            })
    }

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                console.log(result.user);
                setUserData(result.user)
            })
            .catch(error => {
                console.log('error: ', error);
            })
    }

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUserData(null)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // console.log(userData.photoURL);

    return (
        <div>
            <div className='btn-login'>
                {
                    userData ?
                        <button onClick={handleLogOut}>Log Out</button>
                        :
                        <>
                            <button onClick={handleGoogleSignIn}>Google Log In</button>
                            <button onClick={handleGitHubSignIn}>GitHub Log In</button>
                        </>
                }
            </div>
            <div>
                {
                    userData && <div className='user-info'>
                        <img src={userData.photoURL} alt="" />
                        <h3>Name: {userData.displayName}</h3>
                        <h3>email: {userData.email}</h3>
                    </div>
                }
            </div>
        </div>
    );
};



export default Login;