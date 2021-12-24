import { makeStyles } from '@mui/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles(() => ({
    logos: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    }
}));

function Logo({ height }) {
    const classes = useStyles();
    const navigate = useNavigate();
    return <div data-testid="logo" className={classes.logos} onClick={() => navigate("/")}>
        <img src="/GitHub_Logo_White.png" alt="GitHub Logo" height={height} />
        <img src="/Gist.png" alt="Gist Logo" height={height - 16} />
    </div>
}

export default Logo;
