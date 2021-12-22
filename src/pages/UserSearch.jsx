import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { blueGrey } from "@material-ui/core/colors";
import { IconButton, InputBase, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const classes = useStyles();
    const [searchText, setSearchText] = useState("");

    const handleChange = () => (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchText) {
            navigate({
                pathname: '/search',
                search: `?searchText=${searchText}`,
            });
        }
    }

    return (
        <div className={classes.root}>
            <Logo height={72} />
            <Paper
                component="form"
                action="/search"
                onSubmit={handleSearch}
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginTop: "4rem" }}
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
        </div >
    )
}

export default UserSearch;
