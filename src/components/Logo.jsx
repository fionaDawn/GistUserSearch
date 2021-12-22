import { makeStyles } from '@mui/styles';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    logos: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2rem"
    }
}));

function Logo({ height }) {
    const classes = useStyles();
    return <div className={classes.logos}>
        <img src="/GitHub_Logo_White.png" alt="GitHub Logo" height={height} />
        <img src="/Gist.png" alt="Gist Logo" height={height - 16} />
    </div>
}

export default Logo;
