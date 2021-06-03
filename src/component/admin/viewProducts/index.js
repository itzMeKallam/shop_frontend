import React from 'react'
import {
    Box, AppBar , 
    Typography , Button ,
} from '@material-ui/core'
import {useStyles} from './styles'
import {useFunctions} from './functions'
import {useEffects} from './effects'
import Header from '../common/header/'
export default function Index() {
    useFunctions()
    useEffects()
    return (
        <Box component="div">
            <Header />
        </Box>
    )
}
