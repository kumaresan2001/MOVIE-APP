import reactLogo from "./assets/react.svg";
import "./App.css";
import { TicTacToe } from "./TicTacToe";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { MovieList } from "./MovieList";
import { useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { AddMovie } from "./AddMovie";
import { MovieDetails } from "./MovieDetails";
import { BasicForm } from "./BasicForm";
import { EditMovie } from "./EditMovie";
function App() {
  const Navigate = useNavigate();
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const bgstyles = {
    borderRadius: "0px",
    minHeight: "100vh",
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={bgstyles} elevation={4}>
        <div className="app">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => Navigate("*")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => Navigate("/ TicTacToe")}>
                TicTacToe
              </Button>
              <Button color="inherit" onClick={() => Navigate("/movielist")}>
                movielist
              </Button>
              <Button color="inherit" onClick={() => Navigate("/ movies/add")}>
                AddMovie
              </Button>

              <Button color="inherit">Login</Button>
              <Button
                color="inherit"
                variant="containd"
                startIcon={
                  mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                sx={{ marginLeft: "auto" }}
              >
                {mode === "dark" ? "light" : "dark"}mode
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/ TicTacToe" element={<TicTacToe />} />
            <Route path="/movielist" element={<MovieList />} />
            <Route path="/ movies/add" element={<AddMovie />} />
            <Route
              path="/films"
              element={<Navigate replace to="/movielist" />}
            />
            <Route path="/movielist/:id" element={<MovieDetails />} />
            <Route path="/movielist/edit/:id" element={<EditMovie />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/basic-form" element={<BasicForm />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
export default App;
function NotFound() {
  return (
    <div>
      <h1>Welcome to movie App</h1>
    </div>
  );
}
