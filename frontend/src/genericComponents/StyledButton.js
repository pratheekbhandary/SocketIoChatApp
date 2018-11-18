import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      width: '100%',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  export default StyledButton;