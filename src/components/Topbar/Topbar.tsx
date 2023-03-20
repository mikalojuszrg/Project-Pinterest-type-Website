import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ImageSearchbar from "../SearchBar/ImageSearchbar";
import Toolbar from "@mui/material/Toolbar";
import TopbarMenu from "./TopbarMenu";
import Typography from "@mui/material/Typography";

const Topbar = () => {
  return (
    <Box sx={{ zIndex: 1, flexGrow: 1, position: "sticky", top: 0 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Interest
          </Typography>
          <ImageSearchbar />
          <TopbarMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Topbar;
