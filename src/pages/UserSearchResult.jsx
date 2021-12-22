
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserGistsAsync, selectUser } from '../reducerSlices/userReducer';
import { blueGrey } from "@material-ui/core/colors";
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import SearchResults from '../components/SearchResults';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useQuery } from '../hooks/useQuery';
import Logo from '../components/Logo';

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
        alignItems: "center"
    },
    searchBar: {
        display: "flex",
        justifyContent: "space-between",
        width: "90%"
    }
}));

const UserSearchResult = () => {
    const navigate = useNavigate();
    const query = useQuery();

    const classes = useStyles();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState(query.get("searchText"));
    const [gistList, setGistList] = useState([]);

    const getUsers = () => {
        dispatch(getUserGistsAsync(searchText))
    }

    const handleChange = () => (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchText) navigate(`/search?searchText=${searchText}`)
    }

    useEffect(() => {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    useEffect(() => {
        setGistList(user.results)
    }, [user])

    console.log(user)
    if (user.status !== "idle") return <div>{user.status}</div>

    return <div className={classes.root}>
        <div className={classes.searchBar}>
            <Paper
                component="form"
                action="/search"
                onSubmit={handleSearch}
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, margin: 4 }}
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
            <Logo height={52} />
        </div>
        <SearchResults results={gistList} />
    </div>
}

export default UserSearchResult;
