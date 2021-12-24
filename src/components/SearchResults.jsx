import React from 'react';
import Gist from './Gist';

function SearchResults({ results }) {

    return (
        <div style={{ width: "90%" }}>
            {results.length > 0 ?
                results.map(gist => <Gist key={gist.id} gist={gist} />)
                : "No Record FOund!"
            }
        </div>
    )
}

export default SearchResults;
