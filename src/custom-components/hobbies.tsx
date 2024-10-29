import React from 'react';
import { StlViewer } from "react-stl-viewer";
import { Box, Card, CardContent} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Hobbies() {


    const url = require('../assets/cube.stl')

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
                                Travel
                            </Typography>
                            <Typography variant="body1" component="p" sx={{ fontFamily: "", color: "text.secondary" }}>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <ImageIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Work" secondary="Jan 7, 2014" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <BeachAccessIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Vacation" secondary="July 20, 2014" />
                                    </ListItem>
                                </List>
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


