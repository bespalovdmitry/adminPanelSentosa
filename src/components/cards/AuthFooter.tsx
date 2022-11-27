// material-ui
import { Container,Typography} from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {

  return (
    <Container maxWidth="xl">
        <Typography variant="subtitle2" color="secondary" component="span">
          This site is protected by Sentosa tour
        </Typography>
    </Container>
  );
};

export default AuthFooter;
