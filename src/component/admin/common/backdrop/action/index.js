
import {useDispatch, useSelector} from 'react-redux'
// Backdrop Action
import {backdropAction} from '../../../../../store/backdrop/'
export const useToggleBackdrop=()=>{
    const dispatch = useDispatch() 

    const toggleBackdrop=()=>{
        dispatch(backdropAction.toggleBackdrop())
    }

    return [toggleBackdrop]
}
