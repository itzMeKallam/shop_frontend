import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar:{
    background: '#ff4aa4'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    '& a':{
      color: '#fff',
      textDecoration: 'none',
      '&:hover':{
        color: '#f0f0f0'
      }
    }
  },
  button: {
    '& a':{
      color: '#f0f0f0',
      textDecoration: 'none',
      '&:hover':{
        color: '#fff'
      }
    }
  },
  active: {
    '& a':{
      color: '#fff'
    }
  }
  }));