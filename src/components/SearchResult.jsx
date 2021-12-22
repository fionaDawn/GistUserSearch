import React from 'react';

function SearchResult({ user, results }) {
    if (user.status !== "idle") return <div>{user.status}</div>

    return <div>{results.map(gist => <div key={gist.node_id}>{gist.url}</div>)}</div>
}

export default SearchResult;
