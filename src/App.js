import "./App.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div>
      Hello World
      <Button variant="text" color="secondary">
        Hello World
      </Button>
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default App;
