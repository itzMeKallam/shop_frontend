import React from 'react'
import {
    Box, Typography, TextField, Button, 
    CircularProgress, Backdrop, Divider ,
    Dialog, DialogTitle, List, ListItem, ListItemText, DialogActions
} from '@material-ui/core'

import {useStyles} from './styles'
import { useSelector} from 'react-redux'

import {useFunctions} from './functions'
export default function Index() {
    const classes = useStyles()
    const form = useSelector(state=> state.adminSignup.form)
    const backdrop = useSelector(state=> state.backdrop.backdrop)
    const display = useSelector(state=> state.display)
    const [onChangeHandler, submit, closeDisplayStatus] = useFunctions()

   
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
                    <ListItem button >
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
                    label="Username"
                    type="text" 
                    value={form.username} 
                    onChange={(e)=>onChangeHandler(e, 'username')} 
                    />
                <TextField  
                    label="Email" 
                    type="text" 
                    value={form.email} 
                    onChange={(e)=>onChangeHandler(e, 'email')} 
                />
                <TextField  
                    label="Password" 
                    type="password" 
                    value={form.password} 
                    onChange={(e)=>onChangeHandler(e, 'password')} 
                />
                <TextField  
                    label="Confirm Password" 
                    type="password" 
                    value={form.confirmPassword} 
                    onChange={(e)=>onChangeHandler(e, 'confirmPassword')} 
                />
                <Button className={classes.button} 
                onClick={submit}
                >Submit</Button>
            </Box>
        </Box>
    )
}
