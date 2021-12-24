import { Avatar, Chip, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Forks from './Forks';


const useStyles = makeStyles((theme) => ({
    logos: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        margin: "1rem",
        padding: "2rem 1rem"
    }
}));
function Gist({ gist }) {
    const classes = useStyles();
    const extensions = Object.keys(gist.files);

    return <div className={classes.logos}>
        <div style={{ width: "35%" }} >
            <a href={gist.html_url}>
                <Typography variant="h6"    >
                    {`${gist.owner.login}/${extensions[0] || gist.description}`}
                </Typography>
            </a>
            <Typography variant="body" paragraph >
                {gist.description}
            </Typography>
        </div>
        {/* Chip */}
        <div>
            <Typography variant="caption"    >
                File Types
            </Typography>
            <Stack direction="row" spacing={1}>
                {extensions.map((ext, i) => {
                    const fileType = (ext.split("."))[1];
                    if (fileType) return <Chip key={`ft_${gist.id}_${i}`} label={fileType} color="secondary" />
                    else return null;
                })}
            </Stack>
        </div>

        {/* Forks */}
        <Forks list={gist.forks} id={gist.id} />
    </div>
}

export default Gist;
