import {useEffect } from 'react'
import {useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import Axios from '../../../axios'
export const useEffects=()=>{
    const token = useSelector(state=> state.adminAuth.token)
    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(()=>{
        Axios.get('/admin/viewProducts', config).then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    }, [])
}
