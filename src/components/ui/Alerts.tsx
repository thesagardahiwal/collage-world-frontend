import { useAlert } from '@/hooks/useAlert'
import React from 'react'

function Alerts() {
    const { message, title, severity, hideMessage } = useAlert();
    return (
        <>
            {message.length > 2 &&
                <div className='fixed items-center sm:bottom-0 left-0 m-10  flex justify-center z-50'>
                    <div className='bg-white rounded-md p-4 w-full'>
                        <div className='flex items-end flex-col w-full'>
                            <div className=' absolute cursor-pointer rounded-md iconFix w-6 h-6 bg-red-400 text-gray-900 cancelBtn'
                                onClick={hideMessage}
                            >
                                X
                            </div>
                            <div className='w-full'>{title}</div>
                            <div className='w-full'>{message}</div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Alerts