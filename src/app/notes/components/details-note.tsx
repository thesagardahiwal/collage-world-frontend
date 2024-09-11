import { INote } from '@/redux/slices/noteSlice'
import { Image } from '@nextui-org/image'
import React from 'react'


import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import useNote from '@/hooks/useNote';
import { del as delNote } from '@/services/useQuery';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

type Props = {
    note: INote;
    setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShowNoteDetails({note, setIsUpdate}: Props) {
    const { del } = useNote();
    const router = useRouter();
    const { token } = useAuth();
    const handleDelete = () => {
        del(note);
        if (typeof token === 'string') {
            delNote('/notes/'+note._id, token).then(() => {
                toast({
                    title: "Note: Successfully",
                    description: "Note deleted successfully"
                });
                router.push('/notes');
            })
            .catch(() => {
                toast({
                    title: "Note: Unsuccessfull",
                    description: "Note is not deleted!",
                    variant: "destructive"
                })
            })
        }
    }
  return (
    <div className='bg-slate-800 overflow-hidden text-white rounded-md justify-center max-w-xl mx-auto'>
        <div className='text-pretty flex justify-end items-center text-left relative p-2 bg-slate-950 text-lg font-semibold'>
            <h1 className='text-left w-full'>
                {note.title}
            </h1>
            <span 
            onClick={() => setIsUpdate((prev) => !prev)}
            className='absolute w-10 h-10 scale-55 hover:text-green-500 flex items-center justify-center right-0'>
                <BorderColorIcon/>
            </span>
            <span 
            onClick={handleDelete}
            className='absolute w-10 h-10 scale-55 hover:text-red-400 flex items-center justify-center right-10'>
                <RemoveCircleOutlineIcon/>
            </span>
        </div>
        {note.attachments?.imageUrls && note.attachments.imageUrls.length > 0 &&
            note.attachments?.imageUrls.map((imageSrc, i) => (
                <Image src={imageSrc} width={300} key={i} />
            ))
        }
        <p className='text-md min-h-32 p-4 font-medium'>{note.content}</p>
    </div>
  )
}

export default ShowNoteDetails