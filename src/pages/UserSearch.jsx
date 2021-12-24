import React from 'react';
import { blueGrey } from "@material-ui/core/colors";
import { makeStyles } from '@mui/styles';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';

const useStyles = makeStyles((theme) => ({
    // Styling material components
    root: {
        width: "100%",
        minHeight: "100vh",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: blueGrey[800],
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        marginBottom: "4rem"
    }
}));

const UserSearch = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                <Logo height={72} />
            </div>
            <SearchBar />
        </div >
    )
}

export default UserSearch;
