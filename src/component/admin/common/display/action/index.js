
import {useDispatch, useSelector} from 'react-redux'
// Backdrop Action
import {displayAction} from '../../../../../store/display/'
export const useDisplay=()=>{
    const dispatch = useDispatch() 

    
    const closeDisplayStatus=()=>{
        dispatch(displayAction.closeDisplayStatus())
    }

    const openDisplayStatus=({message, data})=>{
        dispatch(displayAction.openDisplayStatus({message, data}))
    }

    return [openDisplayStatus, closeDisplayStatus]
}
