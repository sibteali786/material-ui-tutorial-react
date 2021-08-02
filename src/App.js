import "./App.css";
import React from "react";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "fontsource-roboto";

// Another important thing in material Ui is usage of custom styles.
function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      {/* <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        color="primary"
         
      /> */}
      {/* for applying label to check box use formcontroller */}
      <FormControlLabel
        label="Hello Buddy"
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon />} // using delete icon and save icon instead of tick box
            checkedIcon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            color="primary"
          />
        }
      />
    </div>
  );
}

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg,#FE6B8B,#FF8E53)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <div className="App">
          Hello World
          {/* We can directly use href in button to make it a link. Like href="#" */}
          <header className="App-header">
            <Typography variant="h2" component="div">
              Welcome To Material UI
            </Typography>
            <ButtonStyled></ButtonStyled>
            <CheckboxExample />
            <TextField
              id="outlined-basic"
              variant="outlined"
              color="secondary"
              type="email"
              label="The Time"
              // value="test@test.com"
              placeholder="test@test.com"
            />
            <ButtonGroup variant="contained" color="primary" aria-label="">
              <Button endIcon={<SaveIcon />}>Save</Button>
              <Button endIcon={<DeleteIcon />}>Discard</Button>
            </ButtonGroup>
            <Button
              // startIcon={<SaveIcon />}
              endIcon={<SaveIcon />}
              onClick={() => console.log("Hello")}
              size="large" // vary its size
              // disabled // To disable it
              style={{
                fontSize: 24, // Custom styling
              }}
              variant="contained"
              color="secondary"
            >
              Hello World
            </Button>
          </header>
          {/* <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </div> */}
        </div>
      </ThemeProvider>
    </Container>
  );
}

export default App;
