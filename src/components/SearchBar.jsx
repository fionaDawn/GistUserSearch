import { IconButton, InputBase, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ defaultText }) => {
    const navigate = useNavigate();

    const [searchText, setSearchText] = useState(defaultText || "");

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
    return <Paper
        component="form"
        action="/search"
        onSubmit={handleSearch}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
        <InputBase
            data-testid="search-input"
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
}

export default SearchBar;
