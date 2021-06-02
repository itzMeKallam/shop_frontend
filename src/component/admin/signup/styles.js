import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      background: '#000',
      width: '100%',
      height: '100vh',
      position: 'relative'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
    progress:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%)',
        zIndex: 500,
    },
    dialogTitle:{
      fontWeight: 700,
      color: '#f00'
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        width: '320px',
        maxHeight: '100%',
        padding: '25px 20px 35px',
        background: '#f0f0f0',
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%)',
        borderRadius: '15px'
    },
    button:{
        background: '#000',
        borderRadius: '15px',
        color: '#fff',
        marginTop: '25px',
        '&:hover':{
            background: '#f0f0f0',
            color: '#000'
        }
    }
  }));