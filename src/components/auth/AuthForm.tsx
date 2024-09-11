'use client';
import { useState } from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { Button } from '../ui/button';


const AuthForm = () => {
    const [isLogin, setLogin] = useState(true);
    
    return (
        <div className='w-full h-[100vh] flex justify-center rounded-md items-center bg-blue-400'>
            <div className='bg-white h-fit animation p-4 rounded-md'>
                <div className='flex flex-col items-center gap-2 justify-center'>
                    <h1 className='font-bold text-3xl'>Collage World</h1>
                    <h4 className='text-md'>{isLogin ? 'Login' : 'Register'}</h4>
                </div>

                <div className=''>
                    {isLogin ? <LoginPage /> : <RegisterPage />}
                </div>
                {isLogin ? (
                    <h3>
                        If you don't have an account?{' '}
                        <Button variant="outline" onClick={() => setLogin(false)}>Register</Button>
                    </h3>
                ) : (
                    <h3>
                        If you have already an account?{' '}
                        <Button variant="outline" onClick={() => setLogin(true)}>Login</Button>
                    </h3>
                )}
            </div>
        </div>
    );
};

export default AuthForm;
