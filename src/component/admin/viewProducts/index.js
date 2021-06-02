import React from 'react'
import {
    Box, AppBar , 
    Typography , Button ,
} from '@material-ui/core'
import {useStyles} from './styles'
import {useFunctions} from './functions'
import Header from '../common/header/'
export default function Index() {
    useFunctions()
    return (
        <Box component="div">
            <Header />
        </Box>
    )
}
