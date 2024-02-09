import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
// import FormHelperText from "@mui/material/FormHelperText";

import AddIcon from "@mui/icons-material/Add";
import { HabitContext } from "../Context/habitContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { state, dispatch, addHabit } = React.useContext(HabitContext);
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        <AddIcon fontSize="large" />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Add Habit</h3>
          <TextField
            fullWidth
            label="Enter Habit"
            id="fullWidth"
            required
            value={state.title}
            onChange={(e) =>
              dispatch({ type: "title", payload: e.target.value })
            }
          />

          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <InputLabel id="demo-simple-select-helper-label">Repeat</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={state.repeat}
              label="Repeat"
              onChange={(e) =>
                dispatch({ type: "repeat", payload: e.target.value })
              }
            >
              <MenuItem value="Daily">Daily</MenuItem>
              <MenuItem value={"Weekly"}>Weekly</MenuItem>
              <MenuItem value={"Monthly"}>Monthly</MenuItem>
              <MenuItem value={"Yearly"}>Yearly</MenuItem>
            </Select>
            {/* <FormHelperText>With label + helper text</FormHelperText> */}
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <InputLabel id="demo-simple-select-helper-label">Goal</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={state?.goal}
              label="Goal"
              onChange={(e) =>
                dispatch({ type: "goal", payload: e.target.value })
              }
            >
              <MenuItem value={"1 Time"}>1 Time</MenuItem>
              <MenuItem value={"2 Times"}>2 Times</MenuItem>
              <MenuItem value={"3 Times"}>3 Times</MenuItem>
              <MenuItem value={"4 Times"}>4 Times</MenuItem>
            </Select>
            {/* <FormHelperText>With label + helper text</FormHelperText> */}
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Time of Day
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={state.timeOfDay}
              label="Time of Day"
              onChange={(e) =>
                dispatch({ type: "timeOfDay", payload: e.target.value })
              }
            >
              <MenuItem value={"Morning"}>Morning</MenuItem>
              <MenuItem value={"Afternoon"}>Afternoon</MenuItem>
              <MenuItem value={"Evening"}>Evening</MenuItem>
              <MenuItem value={"Night"}>Night</MenuItem>
            </Select>
            {/* <FormHelperText>With label + helper text</FormHelperText> */}
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <TextField
              id="outlined-number"
              label="Start date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={state.startDate}
              onChange={(e) =>
                dispatch({ type: "startDate", payload: e.target.value })
              }
            />
          </FormControl>

          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              onClick={() => {
                handleClose();
                dispatch({ type: "reset" });
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                addHabit();
                handleClose();
              }}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
