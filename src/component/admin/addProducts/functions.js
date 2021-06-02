import {useAuthEffectsGeneral} from '../common/auth/effect/'
import {addProductAction} from '../../../store/admin/addProduct/'
import { useDispatch, useSelector} from 'react-redux' 
import Axios from '../../../axios'

export const useFunctions=()=>{

    useAuthEffectsGeneral() 
    const dispatch = useDispatch()
    const products = useSelector(state=> state.adminAddProduct)
    const token = useSelector(state=> state.adminAuth.token)

    const addProduct=(e, field)=>{
        dispatch(addProductAction.addProduct({field, value: e.target.value}))
    }

    const submit=()=>{
        let config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
          }
        Axios.post('/admin/addProducts', products, config).then(response=>{
        console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    }

    return [addProduct, submit]

}