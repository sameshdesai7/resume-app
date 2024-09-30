import React from 'react';
import {StlViewer} from "react-stl-viewer";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const url = require('../../assets/cube.stl')

const style = {
    top: 0,
    left: 0,
    width: '100%',
    height: '400px',
}
export default function RubixCubes() {
    return (
        <Box>
            <Typography variant="h5" sx={{fontFamily: "monospace", paddingBottom: '50px',}}>Rubix Cubes</Typography>
            <Grid container direction="row" spacing={2}>
            <Grid size = {4}>  
                <Box sx={{border: '1px solid', borderColor: 'primary.main'}}>
                    <StlViewer
                        style={style}
                        orbitControls
                        shadows
                        url={url}
                    />
                </Box>
            </Grid>
            <Grid size = {4}> 
            <Box sx={{border: '1px solid', borderColor: 'primary.main'}}>
                    <StlViewer
                        style={style}
                        orbitControls
                        shadows
                        url={url}
                    />
                </Box>
            </Grid>
            <Grid size = {4}> 
            <Box sx={{border: '1px solid', borderColor: 'primary.main'}}>
                    <StlViewer
                        style={style}
                        orbitControls
                        shadows
                        url={url}
                    />
                </Box>
            </Grid>
        </Grid>
    </Box>
    )
}