import React from 'react';
import {StlViewer} from "react-stl-viewer";
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import Cubes from '../Hobbies/rubix-cubes';
import Gaming from '../Hobbies/gaming';


export default function Hobbies() {
    return (

        <Stack spacing = {2}>
            <Typography variant="h4" sx={{fontFamily: "monospace", paddingBottom: '50px',}}>Hobbies</Typography>
            <Cubes/>
            <Gaming/>
        </Stack>
        
    );
}


