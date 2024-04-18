import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux';
import authservice from '../appwrite/auth';
import { useForm } from 'react-hook-form';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState("");

    const login = async (data) {
        setError("")
        try {
            const session = await authservice.login(data);
            if(session) {
                const userData = await authservice.getCurrentUser();
                if(userData) dispatch(authLogin(userData))
                navigate("/")
            }
        } catch(error) {
            setError(error.message)
        }
    }



  return (
    <>
    </>
  );
};

export default Login;