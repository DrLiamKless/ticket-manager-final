import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import RestoreButton from './RestoreButton';
import ShowDone from './ShowDone';
import ShowUndone from './ShowUndone';
import SortByDate from './SortByDate';

function Navbar(props) {
  const [toShowDone, setToShowDone] = useState(false);
  const [toShowUndone, setToShowUndone] = useState(false);

  // styles for Navbar
  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: (0),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className="toolBar">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Ticket"
              id="searchInput"
              onChange={props.onInputChange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="hiddenCounter" color="inherit">
              <Badge id="hideTicketsCounter" badgeContent={props.numberOfHidden} color="secondary">
                <VisibilityOffIcon />
              </Badge>
            </IconButton>
          </div>
          <ShowDone
            setTicketsToShow={props.setTicketsToShow}
            doneTickets={props.doneTickets}
            allTickets={props.allTickets}
            toShowDone={toShowDone}
            setToShowDone={setToShowDone}
            setToShowUndone={setToShowUndone}
          />
          <ShowUndone
            setTicketsToShow={props.setTicketsToShow}
            undoneTickets={props.undoneTickets}
            allTickets={props.allTickets}
            toShowUndone={toShowUndone}
            setToShowUndone={setToShowUndone}
            setToShowDone={setToShowDone}
          />
          <SortByDate
            ticketsToShow={props.ticketsToShow}
            setTicketsToShow={props.setTicketsToShow}
          />
          <Typography id="wixTitle" className={classes.title} variant="h6" noWrap>
            Wix Ticket Manager
          </Typography>
          <Typography id="restoreContainer">
            <RestoreButton
              aria-label="hiddenCounter"
              color="inherit"
              setNumberOfHidden={props.setNumberOfHidden}
              toRestore={props.toRestore}
              setToRestore={props.setToRestore}
              ticketsToShow={props.ticketsToShow}
              setTicketsToShow={props.setTicketsToShow}
              allTickets={props.allTickets}
            />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
