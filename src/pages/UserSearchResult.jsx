
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserGistsAsync, selectUser } from '../reducerSlices/userReducer';
import { blueGrey } from "@material-ui/core/colors";
import { makeStyles } from '@mui/styles';
import SearchResults from '../components/SearchResults';
import { useQuery } from '../hooks/useQuery';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';

const useStyles = makeStyles((theme) => ({
    // Styling material components
    root: {
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: blueGrey[800],
        [theme.breakpoints.down("xs")]: {
            paddingTop: theme.spacing(2),
        },
        alignItems: "center",
    },
    searchBar: {
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
        alignItems: "center",
        marginTop: "2rem"
    }
}));

const UserSearchResult = () => {
    const query = useQuery();
    const searchText = query.get("searchText");

    const classes = useStyles();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [gistList, setGistList] = useState([]);

    const getUsers = () => {
        dispatch(getUserGistsAsync(searchText))
    }

    useEffect(() => {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    useEffect(() => {
        setGistList(user.results)
    }, [user])

    return <div className={classes.root}>
        <div className={classes.searchBar}>
            <Logo height={52} />
            <SearchBar defaultText={searchText} />
        </div>
        <SearchResults user={user} results={gistList} />
    </div>
}

export default UserSearchResult;
