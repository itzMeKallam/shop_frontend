import {useDispatch, useSelector} from 'react-redux'
import Axios from '../../../axios'
import { useHistory } from "react-router-dom";

// Auth Effect
import {useAuthEffects} from '../common/auth/effect/'

// Signup Actions
import {adminSignupAction} from '../../../store/admin/signup/'
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
    const signup = useSelector(state=> state.adminSignup)
    const history = useHistory()
    const onChangeHandler=(e, field)=>{
        dispatch(adminSignupAction.onChangeHandler({field, value: e.target.value}))
    }

     
    const submit=()=>{
        toggleBackdrop()
        Axios.post('/admin/signup', signup.form).then(response=>{
            toggleBackdrop()
            localStorage.setItem('token', response.data.token)
            setAuth(response.data.token)
            history.replace("/admin/")
        }).catch(error=>{
        if(error.response.status === 422){
            message = error.response.data.message
            data = error.response.data.data
            toggleBackdrop()
            openDisplayStatus(message)
        }
        })
        dispatch(adminSignupAction.clearFields())
    }

    return [onChangeHandler, submit, closeDisplayStatus]

}
