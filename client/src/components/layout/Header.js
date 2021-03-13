import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);
  const [pageAnchorEl, setpageAnchorEl] = useState(null);
  const openAccountMenu = Boolean(accountAnchorEl);
  const openPagesMenu = Boolean(pageAnchorEl);

  const handleAccountMenu = (e) => {
    setAccountAnchorEl(e.currentTarget);
  };

  const handleAccountClose = () => {
    setAccountAnchorEl(null);
  };

  const handlePagesMenu = (e) => {
    setpageAnchorEl(e.currentTarget);
  };

  const handlePageClose = (e) => {
    setpageAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handlePagesMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={pageAnchorEl}
            keepMounted
            open={openPagesMenu}
            onClose={handlePageClose}
          >
            <Link to="/">
              <MenuItem onClick={handlePageClose}>Home</MenuItem>
            </Link>
            <Link to="/calendar">
              <MenuItem onClick={handlePageClose}>Calendar</MenuItem>
            </Link>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            L36
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleAccountMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={accountAnchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openAccountMenu}
                onClose={handleAccountClose}
              >
                <MenuItem onClick={handleAccountClose}>Profile</MenuItem>
                <MenuItem onClick={handleAccountClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
