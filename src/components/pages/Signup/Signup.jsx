import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Header/Header';

const Signup = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const redirect_uri = location.state?.from || '/';
    const history = useNavigate();

    const { signInUsingGoogle } = useAuth();

    const handleSignInUsingGoogle = () => {
        signInUsingGoogle();
        history.push(redirect_uri);
    }

    const handleSignup = e => {
        const auth = getAuth();
        e.preventDefault();
        if (password.length < 6) {
            setError('Password has to be at least 6 characters long')
            return
        }

        const setUserName = () => {
            updateProfile(auth.currentUser, { displayName: name }).then(result => {

            })
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('')
                setUserName();
                console.log(user);

                // SAVE USER TO DATABASE
                saveUser(email, name, 'POST');

                toast.success('User Successfully Registered & Signed In')
                history.push('/');
                window.location.reload();
            }).catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
        setError('')

    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }

    // SAVE USER TO DATABASE
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }





    return (
        <>
            <Header></Header>
            <h2 className='text-4xl font-bold pt-28 text-center'>Signup</h2>
            <div className="w-5/6 md:w-1/2 lg:w-1/4 mx-auto py-16 mt-10 bg-gray-800 rounded-box">
                <form onSubmit={handleSignup}>
                    <div className="form-control w-3/4 md:w-2/3  mx-auto ">
                        <label className="label">
                            <span className="label-text text-white">Your Name</span>
                        </label>
                        <input onBlur={handleNameChange} required type="text" placeholder="Type your Name" className="input text-gray-900 text-lg" />
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input onBlur={handleEmailChange} required type="email" placeholder="Type your email" className="input text-gray-900 text-lg" />
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input onBlur={handlePasswordChange} required type="password" placeholder="Type your password" className="input text-gray-900 text-lg" />
                        <br /><br />
                        <input type="submit" value="SIGNUP NOW" className=" btn bg-rose-500 hover:bg-gray-500 text-white" />
                        <br />
                        <div className="text-red-500 pb-5">
                            {error}
                        </div>
                        <h2 className='text-white text-center'>Have an Account?<NavLink to="/login" className="text-rose-500"> Click to Login</NavLink></h2>
                        <br />
                        <button onClick={handleSignInUsingGoogle} className=" btn bg-gray-50 hover:bg-gray-200 text-gray-500 border-none">
                            <i className="fab fa-google text-xl text-rose-500 pr-2"></i>Signup With Google</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Signup;