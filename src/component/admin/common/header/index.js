import React from 'react'
import {
    Box, AppBar , Toolbar ,
    Typography , Button 
} from '@material-ui/core'
import { Link , useLocation } from 'react-router-dom'
import {useStyles} from './styles'

export default function Index() {
    let location = useLocation();
    const classes = useStyles()
    return (
        <Box component="div" className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <Link to ="/admin/"> Ecom</Link>
                </Typography>
                <Button color="inherit" className={[classes.button, location.pathname === "/admin/viewProducts" ? classes.active: ''].join(' ')}><Link to="/admin/viewProducts">View Products</Link></Button>
                <Button color="inherit" className={[classes.button, location.pathname === "/admin/addProducts" ? classes.active: ''].join(' ')}><Link  to="/admin/addProducts">Add Products</Link></Button>
                <Button color="inherit" className={[classes.button, location.pathname === "/admin/updateProducts" ? classes.active: ''].join(' ')}><Link  to="/admin/updateProducts">Update Products</Link></Button>
                <Button color="inherit" className={[classes.button, location.pathname === "/admin/viewProducts" ? classes.active: ''].join(' ')}>Logout</Button>
                </Toolbar>
            </AppBar> 
        </Box>
    )
}