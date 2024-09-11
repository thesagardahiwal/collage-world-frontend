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

  return { addRes, resource, delRes };
}

export default useResource