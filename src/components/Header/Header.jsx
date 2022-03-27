import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, ToolBar, Tyopography, UnputBase, Box, Typography, InputBase } from '@material-ui/core';
import Searchicon from '@marterial-ui/icons/search';

import useStyles from './styles';

const Header = ({ onPlaceChanged, onLoad }) => {
    const classes = useStyles();
    return (
     <AppBar position='static'>
         <ToolBar className={classes.toolbar}>
            <Typography variant="h5" className={classes.title}>
                Where?
            </Typography>
            <Box display="flex">
             <Typography variant="h6" className={classes.title}>
                 You choose...
             </Typography>
             <Autocomplete onLoad={onLoad} onPlaceChange={onPlaceChanged}>
                 <div className={classes.search}>
                     <div className={classes.searchIcon}>
                         <Searchicon />
                     </div>
                     <InputBase placeholder='Seach...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                 </div>
             </Autocomplete>
            </Box>
         </ToolBar>
     </AppBar>
    )
}

export default Header;