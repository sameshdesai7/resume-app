import React from 'react';
import { StlViewer } from "react-stl-viewer";
import { Box, Card, CardContent, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

export default function Hobbies() {

    const url = require('../../assets/cube.stl')

    const style = {
        top: 0,
        left: 0,
        width: '100%',
        height: '400px',
    }

    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
            <Typography variant="h4" sx={{ fontFamily: "monospace", paddingBottom: '50px', }}>Hobbies</Typography>
            <Grid container spacing={2} sx={{ width: "90%", display: "flex", justifyContent: "center" }}>
                <Grid size={4} sx={{ display: "flex", justifyContent: "center" }}>
                    <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h5" component="h5" sx={{ fontFamily: "monospace", color: "primary.main" }}>
                                Rubix Cubes
                            </Typography>
                            <StlViewer
                                style={style}
                                orbitControls
                                shadows
                                url={url}
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={4} sx={{ display: "flex", justifyContent: "center" }}>
                    <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h5" component="h5" sx={{ fontFamily: "monospace", color: "primary.main" }}>
                                Counter Strike 2
                            </Typography>
                            <Typography variant="body1" component="p" sx={{ fontFamily: "", color: "text.secondary" }}>
                                <ul>
                                    <li>Skills Learned: Communication, Teamwork, Quick Thinking, Hand Eye Coordination</li>
                                    <li>Highest Rank: 17000 Elo</li>
                                    <li>Hours Played: 3000+</li>
                                </ul>
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={4} sx={{ display: "flex", justifyContent: "center" }}>
                    <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h5" component="h5" sx={{ fontFamily: "monospace", color: "primary.main" }}>
                                Exercise
                            </Typography>
                            <Typography variant="body1" component="p" sx={{ fontFamily: "", color: "text.secondary" }}>
                                <ul>
                                    <li>Placeholder 1</li>
                                    <li>Placeholder 2</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>

    );
}


