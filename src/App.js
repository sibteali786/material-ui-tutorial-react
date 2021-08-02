import "./App.css";
import React from "react";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

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

function App() {
  return (
    <div className="App">
      Hello World
      {/* We can directly use href in button to make it a link. Like href="#" */}
      <header className="App-header">
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
        <ButtonGroup variant="outlined" color="secondary" aria-label="">
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
  );
}

export default App;
