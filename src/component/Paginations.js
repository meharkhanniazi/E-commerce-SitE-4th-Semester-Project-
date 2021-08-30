import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const Paginations=()=>{
    return(
        <>
        <div class="d-flex justify-content-center mb-4">

<Pagination color="primary" count={6} />
</div>

        </>
    )
}

export default Paginations;