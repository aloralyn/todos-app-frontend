import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { NavLink as RouterLink } from "react-router-dom";
import styled from "styled-components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: "#fff",
    },
    title: {
      flexGrow: 1,
    },
  })
);

const StyledAppBar = styled(AppBar)`
  background-image: linear-gradient(
    to bottom,
    #282c34 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

const DemoNavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledAppBar position="fixed" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            L!stify - a toy project inspired by a fave music app
          </Typography>
          <Button color="inherit" component={RouterLink} to="/signup">
            Sign up
          </Button>
          <Button color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};

export default DemoNavBar;
