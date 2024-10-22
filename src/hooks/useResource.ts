import { RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { addResource, IResource, removeResource } from '@/redux/slices/resourceSlice';

function useResource() {
    const { resource } = useSelector((state : RootState) => state.resource);
    const dispatch = useDispatch();

    const addRes = (resource: IResource) => {
        dispatch(addResource(resource));
    }

    const delRes = (resource: IResource) => {
        dispatch(removeResource(resource));
    }

    const getRes = (id: string) => {
        return resource.find(el => el._id === id);
    }

  return { addRes, getRes, resource, delRes };
}

export default useResource