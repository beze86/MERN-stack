import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Drawer, AppBar, Toolbar, Typography, CssBaseline, List, ListItem, ListItemText, Divider, IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';

import { useAdminState } from '../../contexts/Admin/AdminProvider';

import { routes } from '../../App';

import { useStyles } from './Header.styles';
import './Header.css';

export const Header = ({ openParentState }) => {
    const theme = useTheme();
    const classes = useStyles();
    const { adminDispatch } = useAdminState();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        openParentState(true)
    };

    const handleDrawerClose = () => {
        setOpen(false);
        openParentState(false)
    };

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        L36
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {routes.map(([page, route], i) => (
                        <Link to={route} key={i} className="link">
                            <ListItem button >
                                <ListItemText primary={page} />
                            </ListItem>
                        </Link>
                    ))}
                    <ListItem className="hidden-link" button onClick={() => adminDispatch('setIsAdmin')}>
                        <ListItemText primary="hidden-link" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}
