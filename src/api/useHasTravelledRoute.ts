import { useState } from 'react'
import Resource, { ResourceLoadState } from './Resource';

const useHasTravelled = () => {
    const [hasTravelled, setHasTravelled] = useState<Resource<number>>({state: ResourceLoadState.Loading, value: 0 });
    
    return {
        getHasTravelled: (data: any) => {
            setHasTravelled({state: ResourceLoadState.Loaded, value: data.id});
        },
        hasTravelled: hasTravelled
    }
}

export default useHasTravelled;