import React from 'react';
import { blueGrey } from "@material-ui/core/colors";
import { makeStyles } from '@mui/styles';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';

const useStyles = makeStyles((theme) => ({
    // Styling material components
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: blueGrey[800],
        [theme.breakpoints.down("xs")]: {
            paddingTop: theme.spacing(2),
        },
        justifyContent: "center",
        alignItems: "center"
    },
}));

const UserSearch = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Logo height={72} />
            <SearchBar />
        </div >
    )
}

export default UserSearch;
