import React from 'react'
import {
    Box, Typography, TextField, Button,
    Backdrop, CircularProgress, Divider,
    Dialog, DialogTitle, List, ListItem, ListItemText, DialogActions
} from '@material-ui/core'

import {useStyles} from './styles'
import { useSelector} from 'react-redux' 
import {useFunctions} from './functions'
export default function Index() {
    const classes = useStyles()
    const [onChangeHandler, submit, closeDisplayStatus] = useFunctions() 
    const form = useSelector(state=> state.adminSignin.form)
    const backdrop = useSelector(state=> state.backdrop.backdrop)
    const display = useSelector(state=> state.display)
    return (
        <Box component='div' className={classes.root}>
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
                </DialogActions>
            </Dialog>
            {/* Form */}
            <Box component="div" className={classes.form}>
                <TextField  
                    label="Email" 
                    value={form.email} 
                    type="email"
                    onChange={(e)=>onChangeHandler(e, 'email')}
                />
                <TextField  
                    label="Password" 
                    value={form.password}
                    type="password"
                    onChange={(e)=>onChangeHandler(e, 'password')}
                />
                <Button className={classes.button} onClick={submit}>Submit</Button>
            </Box>
        </Box>
    )
}
