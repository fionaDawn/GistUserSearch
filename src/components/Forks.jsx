import { Avatar, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllForksByGistIdAsync } from '../reducerSlices/userReducer';


function Forks({ list, id }) {
    const dispatch = useDispatch()

    const getForks = () => {
        dispatch(getAllForksByGistIdAsync(id))
    }

    useEffect(() => {
        getForks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return <div>
        <Typography variant="caption"    >
            Forks
        </Typography>
        {list ? <Stack direction="row" spacing={2}>
            {list.map(f => (
                <Avatar alt="Remy Sharp" src={f.owner.avatar_url} />
            ))}
        </Stack> : null}
    </div>
}

export default Forks;
