import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationComponent = ({currentPage, totalPages, onPageChange}) => {
    const handleChange = (event, value) => {
        onPageChange(value);
    }
    
    return (
        <Stack spacing={2} sx={{ display: 'flex', alignItems: 'center', marginTop: 3 }}>
            <Pagination 
                count={totalPages}
                page={currentPage}
                onChange={handleChange}
                showFirstButton
                showLastButton
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: 'White',
                        fontWeight: 600,
                    },               
                    '& .MuiPaginationItem-root.Mui-selected' : {
                    backgroundColor: '#dee4eaff',
                    color: '#0a0a0aff',                                      
                    },
                    '& .MuiPaginationItem-root:hover': {
                    backgroundcolor: '#333',
                    },                    
                    '& .MuiPaginationItem-previousNext': {
                    color: '#fff',
                    }

                }}
             />
        </Stack>
    );
}

export default PaginationComponent;