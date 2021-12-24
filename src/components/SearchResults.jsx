import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Gist from './Gist';

const useStyles = makeStyles((theme) => ({
    // Styling material components
    result: {
        width: "90%",
    },
    alert: {
        color: "white",
        display: "flex",
        justifyContent: "center",
        marginTop: "4rem"
    }
}));


function SearchResults({ results, user }) {
    const classes = useStyles()

    return (
        <div className={classes.result}>
            {results.length > 0 ?
                results.map(gist => <Gist key={gist.id} gist={gist} />)
                : <div className={classes.alert}>
                    <Typography variant="h5" gutterBottom component="div">
                        {user.status !== "idle" ? user.status : "No Record Found!"}
                    </Typography>
                </div>
            }
        </div>
    )
}

export default SearchResults;
