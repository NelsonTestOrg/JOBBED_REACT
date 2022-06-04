import React from 'react';
import { Button, TextField   } from '@mui/material';

const CommonButton= ({children, color, sx , variant}) =>{
    return (

        <Button
            variant={variant}
            color ={color}
            sx={sx}
        >
            {children}

        </Button>
    )
}

export default CommonButton