import { Box, Button, IconButton, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const App = () => {
  return (
    <div>
      <Button>YOYOYO</Button>
      <Button variant="contained">YOYOYO</Button>
      <Button variant="contained">YOYOYO</Button>
      <Button variant="contained" disableElevation>
        YOYOYO
      </Button>
      <Button variant="contained" disabled>
        YOYOYO
      </Button>
      <Button variant="outlined">YOYOYO</Button>
      <hr />
      <Button color="secondary">YOYOYO</Button>
      <Button color="secondary" variant="contained">
        YOYOYO
      </Button>
      <Button color="secondary" variant="contained">
        YOYOYO
      </Button>
      <Button color="error" variant="contained" disableElevation>
        YOYOYO
      </Button>
      <Button variant="contained" disabled>
        YOYOYO
      </Button>
      <Button variant="outlined">YOYOYO</Button>
      <hr />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <hr />
      <Typography>HEYHEYEHY</Typography>
      <Typography variant="body2">HEYHEYHYE</Typography>
      <Typography variant="subtitle1">HEYHEYE</Typography>
      <Typography variant="subtitle2">HEYEHYEHEY</Typography>
      <Typography color="textSecondary" variant="subtitle2">
        HEYEHYEHEY
      </Typography>
      <hr />
      <Box
        padding={1}
        sx={(theme) => ({ border: `1px solid ${theme.palette.primary.main}` })}
      >
        asd
      </Box>
    </div>
  );
};

export default App;
