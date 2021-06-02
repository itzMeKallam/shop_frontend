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
    const [onChangeHandler, submit, closeErrorStatus] = useFunctions() 
    const form = useSelector(state=> state.adminSignin.form)
    const backdrop = useSelector(state=> state.backdrop.backdrop)
    const error = useSelector(state=> state.error)
    return (
        <Box component='div' className={classes.root}>
            {/* Backdrop */}
            <Backdrop className={classes.backdrop} open={backdrop}>
                <CircularProgress color="secondary" className={classes.progress}/>
            </Backdrop>
            {/* Error */}
            <Dialog onClose={closeErrorStatus} aria-labelledby="simple-dialog-title" open={error.status}>
                <DialogTitle id="simple-dialog-title" className={classes.dialogTitle}>{error.message}</DialogTitle>
                <Divider />
                <List>
                    {error.data.map((d, index) => (
                    <ListItem button key={index}>
                        <ListItemText primary={d.msg} />
                    </ListItem>
                    ))}
                </List>
                <DialogActions>
                    <Button onClick={closeErrorStatus} color="primary">
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
