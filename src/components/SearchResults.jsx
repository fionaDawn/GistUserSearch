import React from 'react';

function SearchResults({ results }) {

    return (
        <div>
            {results.length > 0 ?
                results.map(gist => <div key={gist.node_id}>{gist.url}</div>)
                : "No Record FOund!"
            }
        </div>
    )
}

export default SearchResults;
