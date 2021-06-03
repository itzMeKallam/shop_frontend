import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import Axios from '../../../axios'

// Auth Effect
import {useAuthEffects} from '../common/auth/effect/'

// Signin Actions
import {adminSigninAction} from '../../../store/admin/signin/'
// auth Actions
import {useAdminAuth} from '../common/auth/action/'
// Error Action
import {useDisplay} from '../common/display/action/'
// BAckdrop Actions
import {useToggleBackdrop} from '../common/backdrop/action/'

export const useFunctions=()=>{
    // Effects
    // Auth Effects
    useAuthEffects()
 
    //Actions
    // Auth Actions
    const [setAuth, restAuth] = useAdminAuth()
    // Backdrop
    const [toggleBackdrop] = useToggleBackdrop()
    // Error
    const [openDisplayStatus, closeDisplayStatus] = useDisplay()

    let message, data
    const dispatch = useDispatch() 
    const signin = useSelector(state=> state.adminSignin)
    const history = useHistory() 
    const onChangeHandler=(e, field)=>{
        dispatch(adminSigninAction.onChangeHandler({field, value: e.target.value}))
    }
    const submit=()=>{
        toggleBackdrop()
        Axios.post('/admin/signin', signin.form).then(response=>{
            toggleBackdrop()
            localStorage.setItem('token', response.data.token)
            setAuth(response.data.token)
            history.replace("/admin/")
        }).catch(error=>{
        if(error.response.status === 422){
            message = error.response.data.message
            data = error.response.data.data
            toggleBackdrop()
            openDisplayStatus({message, data})
        }
        })
        dispatch(adminSigninAction.clearFields())
    }

    return [onChangeHandler, submit, closeDisplayStatus]

}
