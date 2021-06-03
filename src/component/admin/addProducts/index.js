import React from 'react'
import {
    Box, TextField , Button,
    Backdrop, CircularProgress, Divider,
    Dialog, DialogTitle, List, ListItem, ListItemText, DialogActions
} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {useStyles} from './styles'
import {useFunctions} from './functions'
import { useSelector} from 'react-redux' 
import Header from '../common/header/'
export default function Index() { 
    useFunctions()
    const classes = useStyles()
    const [addProduct, submit, closeDisplayStatus] = useFunctions()
    const product = useSelector(state=> state.adminAddProduct)
    const backdrop = useSelector(state=> state.backdrop.backdrop)
    const display = useSelector(state=> state.display)
    return (
        <Box component="div" className={classes.root}>
            {/* Backdrop */}
            <Backdrop className={classes.backdrop} open={backdrop}>
                <CircularProgress color="secondary" className={classes.progress}/>
            </Backdrop>
            {/* Error */}
            <Dialog onClose={closeDisplayStatus} aria-labelledby="simple-dialog-title" open={display.status}>
                <DialogTitle id="simple-dialog-title" className={classes.dialogTitle}>{display.message}</DialogTitle>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemText primary={display.data} />
                    </ListItem>
                </List> 
                <DialogActions>
                    <Button onClick={closeDisplayStatus} color="primary">
                        Close
                    </Button>
                    <Button onClick={closeDisplayStatus} color="primary">
                        <Link to="/admin/viewProducts">View Products</Link>
                    </Button>
                </DialogActions>
            </Dialog>
            <Box component="div">
                <Header  />
            </Box>
            <Box component="div" className={classes.info}>
                <Box component="div" className={classes.form}>
                    <TextField label="Title" type="text" value={product.title} onChange={(e)=>addProduct(e, 'title')}/>
                    <TextField label="Description" type="text" value={product.description} onChange={(e)=>addProduct(e, 'description')}/>
                    <TextField label="Price" type="Number" value={product.price === 0 ? '' : product.price} onChange={(e)=>addProduct(e, 'price')}/>
                    <Button className={classes.button} type="submit" onClick={submit}>Submit</Button>
                </Box>
            </Box>
        </Box>
    )
}
