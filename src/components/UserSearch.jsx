import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserGistsAsync, selectUser } from '../reducerSlices/userReducer';
import SearchIcon from '@mui/icons-material/Search';
import { blueGrey } from "@material-ui/core/colors";
import { IconButton, InputBase, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Logo from './Logo';

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
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");
    const [gistList, setGistList] = useState([]);

    const getUsers = () => {
        dispatch(getUserGistsAsync("iboss-ptk1"))
    }

    const handleChange = () => (event) => {
        setSearchText(event.target.value);
    };

    // useEffect(() => {
    //     getUsers()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    useEffect(() => {
        setGistList(user.results)
    }, [user])

    return <div className={classes.root}>

        <Logo height={72} />

        <Paper
            component="form"
            action="/search"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Github Username"
                inputProps={{
                    'aria-label': 'search github username',
                    value: searchText,
                    onChange: handleChange()
                }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
        <div>
            {/* <UserSearch
                user={user}
                results={gistList}
            /> */}
        </div>
    </div >
}

export default UserSearch;
