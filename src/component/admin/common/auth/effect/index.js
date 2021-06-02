import {useEffect } from 'react'
import {useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import {useAdminAuth} from '../action/'
export const useAuthEffectsGeneral=()=>{
    const Auth = useSelector(state=> state.adminAuth)
    const history = useHistory()
    const [setAuth, restAuth] = useAdminAuth()
    useEffect(()=>{
        let token = localStorage.getItem('token');
        if(token === null){
            localStorage.setItem('token', 'login')
            token='login'
        }
        if(token === 'login'){
            return history.replace('/admin/signin')
       }

       setAuth(token)
       
    }, [Auth.token])
    return 
}


export const useAuthEffects=()=>{
    const Auth = useSelector(state=> state.adminAuth)
    const history = useHistory()
    useEffect(()=>{
        let token = localStorage.getItem('token');
        if(token === null){
            localStorage.setItem('token', 'login')
        }
        if(token !== 'login'){
            history.replace('/admin/')
       }
    }, [Auth.token])
    return 
}