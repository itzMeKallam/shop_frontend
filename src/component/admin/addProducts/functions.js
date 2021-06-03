import {useAuthEffectsGeneral} from '../common/auth/effect/'
import {addProductAction} from '../../../store/admin/addProduct/'
import { useDispatch, useSelector} from 'react-redux' 
import Axios from '../../../axios'
// Error Action
import {useDisplay} from '../common/display/action/'
// BAckdrop Actions
import {useToggleBackdrop} from '../common/backdrop/action/'
export const useFunctions=()=>{

    useAuthEffectsGeneral() 
    
    // Backdrop
    const [toggleBackdrop] = useToggleBackdrop()
    // Error
    const [openDisplayStatus, closeDisplayStatus] = useDisplay()
    const dispatch = useDispatch()
    const products = useSelector(state=> state.adminAddProduct)
    const token = useSelector(state=> state.adminAuth.token)
    let message, data
    const addProduct=(e, field)=>{
        dispatch(addProductAction.addProduct({field, value: e.target.value}))
    }

    const submit=()=>{
        let config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
          }
        toggleBackdrop()
        Axios.post('/admin/addProducts', products, config).then(response=>{
            message = response.data.message
            data = response.data.data
            toggleBackdrop()
            openDisplayStatus({message, data})
            dispatch(addProductAction.restProduct())
        }).catch(error=>{
            message = error.response.data.message
            data = error.response.data.data
            toggleBackdrop()
            openDisplayStatus({message, data})
        })
    } 

    return [addProduct, submit,closeDisplayStatus]

}