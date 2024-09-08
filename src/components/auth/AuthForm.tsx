'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';
import { login, register } from '../../services/api';
import { checkInputs } from '@/utils/helper';
import { useAlert } from '@/hooks/useAlert';

interface objectType {
    role: 'teacher' | 'student',
    name: string,
    email: string,
    password: string,
    method: 'register' | 'login';
}

interface messageInfo {
    message: string;
    title: 'Success' | 'Info' | 'Warning' | 'Error';
    severity: 'success' | 'info' | 'warning' | 'error';
}

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { setWarningMessage, setErrorMessage, setSuccessMessage } = useAlert()
    const [visibility, setVisibility] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'teacher' | 'student'>('student');
    const [name, setName] = useState('');
    const { login: loginUser } = useAuth();
    const router = useRouter();
    const [message, setMessage] = useState<messageInfo>();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const object: objectType = {
                role, name, email, password, method: isLogin ? 'login' : 'register'
            }
            console.log(object)
            if (checkInputs(object).status == "success") {
                console.log(object)
                const userData = isLogin ? await login(email, password) : await register(email, password, role, name);
                console.log(userData)
                loginUser(userData);
                setSuccessMessage(checkInputs(object).message);
                router.push('/dashboard');
            } else {
                setWarningMessage(checkInputs(object).message);
            }
        } catch (error : any) {
            setErrorMessage(error.message || 'Network Error');
        }
    };

    const registerBlock = () => {
        return (
            <div className='!text-gray-800 authInpWidth'>
                <div className='align-inpts'>

                    <input
                        type="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                    />
                </div>

                <div className='align-inpts'>
                    <select
                        id="roleSelect"
                        value={role}
                        onChange={(e) => setRole(e.target.value == "student" ? 'student' : 'teacher')}
                        className="text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block"
                    >
                        <option value="" disabled>Select role</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>
                </div>

            </div>
        );
    };


    const loginBlock = () => {
        return (
            <div className='!text-gray-800 authInpWidth'>
                <div className='align-inpts'>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className='align-inpts'>
                    <div className='absolute pr-3 iconFix w-10 h-10'>
                        <span className={`material-symbols-rounded ${visibility ? 'bg-gray-300' : 'bg-transparent'} rounded-full p-[2px] scale-75`} onClick={() => setVisibility((prev) => !prev)}>
                            {visibility ? 'visibility' : 'visibility_off'}
                        </span>
                    </div>
                    <input
                        type={visibility ? 'text' : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
            </div>
        );
    }

    return (
        <div className='w-full h-full flex bg-blue-400 rounded-md items-center justify-center'>
            <form onSubmit={handleSubmit} className='flex w-full justify-center flex-col items-center gap-y-10'>
                <div className='text-white text-xl'>
                    <h2 className='text'>{isLogin ? 'Login' : 'Register'} to</h2>
                    <h1 className='text-3xl text collage-header font-extrabold'>Collage World</h1>
                </div>

                <div className='flex sm:flex-row flex-col w-full justify-center items-center gap-2'>
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