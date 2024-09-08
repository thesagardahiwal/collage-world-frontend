import { useAlert } from '@/hooks/useAlert'
import { Alert, AlertTitle } from '@mui/material';
import React from 'react'

function Alerts() {
    const { message, title, severity, hideMessage } = useAlert();
    return (
        <>
            {message.length > 2 &&
                <div className='fixed items-center sm:bottom-0 left-0 m-10  flex justify-center z-50'>
                    <div className='rounded-md w-full'>
                        <div className='flex items-end flex-col w-full'>
                            <div className=' absolute cursor-pointer rounded-md iconFix w-6 h-6 bg-red-500 duration-300 hover:text-white text-gray-900 cancelBtn'
                                onClick={hideMessage}
                            >
                                X
                            </div>
                            <Alert severity={severity}>
                                <AlertTitle>{title}</AlertTitle>
                                {message}
                            </Alert>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Alerts