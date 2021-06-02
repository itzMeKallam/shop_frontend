
import {useDispatch, useSelector} from 'react-redux'
// Backdrop Action
import {adminAuthAction} from '../../../../../store/admin/auth/'
export const useAdminAuth=()=>{
    const dispatch = useDispatch() 

    
    const setAuth=(token)=>{
        dispatch(adminAuthAction.setAuth({token: token}))
    }

    const restAuth=()=>{
        dispatch(adminAuthAction.resetAuth())
    }

    return [setAuth, restAuth]
}
