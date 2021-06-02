
import {useDispatch, useSelector} from 'react-redux'
// Backdrop Action
import {errorAction} from '../../../../../store/error/'
export const useError=()=>{
    const dispatch = useDispatch() 

    
    const closeErrorStatus=()=>{
        dispatch(errorAction.closeErrorStatus())
    }

    const openErrorStatus=(message, data)=>{
        dispatch(errorAction.openErrorStatus({message, data}))
    }

    return [openErrorStatus, closeErrorStatus]
}
