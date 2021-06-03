import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    background: '#f0f0f0'
  },
  info: {
    position: 'relative',
    height: 'calc(100vh - 66px)'
  }, 
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
},

dialogTitle:{
  fontWeight: 700,
  color: '#f00'
},
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '320px',
    padding: '25px 20px 35px',
    background: '#fff',
    position: 'relative',
    top: '20%',
    left: '50%',
    borderRadius: '15px',
    transform: 'translate(-50%)',
    '& input':{
        marginBottom: '10px'
    }
  },
  button:{
      width: '100px',
      background: '#ff4aa4',
      color: '#fff',
      marginTop: '20px',
      margin: 'auto',
      '&:hover':{
          background: '#fff',
          color: '#ff4aa4'
      }
  }
  }));