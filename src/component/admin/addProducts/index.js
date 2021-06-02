import React from 'react'
import {
    Box, TextField , Button
} from '@material-ui/core'
import {useStyles} from './styles'
import {useFunctions} from './functions'
import { useSelector} from 'react-redux' 
import Header from '../common/header/'
export default function Index() { 
    useFunctions()
    const classes = useStyles()
    const [addProduct, submit] = useFunctions()
    const product = useSelector(state=> state.adminAddProduct)

    return (
        <Box component="div" className={classes.root}>
            <Box component="div">
                <Header  />
            </Box>
            <Box component="div" className={classes.info}>
                <Box component="div" className={classes.form}>
                    <TextField label="Title" type="text" value={product.title} onChange={(e)=>addProduct(e, 'title')}/>
                    <TextField label="Description" type="text" value={product.description} onChange={(e)=>addProduct(e, 'description')}/>
                    <TextField label="Price" type="Number" value={product.price} onChange={(e)=>addProduct(e, 'price')}/>
                    <Button className={classes.button} type="submit" onClick={submit}>Submit</Button>
                </Box>
            </Box>
        </Box>
    )
}
