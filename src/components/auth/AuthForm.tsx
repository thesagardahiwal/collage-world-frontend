'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';
import { login, register } from '../../services/api';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState("student");
    const [name, setName] = useState('');
    const { login: loginUser } = useAuth();
    const router = useRouter();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userData = isLogin ? await login(email, password) : await register(email, password);
            loginUser(userData);
            router.push('/dashboard');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const registerBlock = () => {
        return (
            <div>
                <input
                    type="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
                <select
                    id="roleSelect"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block"
                >
                    <option value="" disabled>Select role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
            </div>
        );
    };


    const loginBlock = () => {
        return (
            <div className=''>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
            </div>
        );
    }

    return (
        <div className='w-full h-full flex bg-blue-400 rounded-md items-center justify-center'>
            <form onSubmit={handleSubmit} className='flex flex-col text-white items-center gap-y-10'>
                <div>
                    <h2>{isLogin ? 'Login' : 'Register'} to</h2>
                    <h1 className='text-2xl font-extrabold'>Collage World</h1>
                </div>

                <div className='flex items-center gap-2'>
                    {!isLogin && registerBlock()}
                    {loginBlock()}
                </div>



                <button className='loginButton' type="submit">{isLogin ? 'Login' : 'Register'}</button>
                <p onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ?
                        <>Need an account? <span className='linkButton'>Register</span></>
                        :
                        <>Have an account? <span className='linkButton'>Login</span></>
                    }
                </p>
            </form>
        </div>
    );
};

export default AuthForm;