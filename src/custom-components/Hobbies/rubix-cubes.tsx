import { StlViewer } from "react-stl-viewer";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { Card, CardContent, Typography } from '@mui/material';

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
            <Typography variant="h5" sx={{ fontFamily: "monospace", paddingBottom: '50px', }}>Rubix Cubes</Typography>
            <Grid container direction="row" spacing={2}>
                <Grid size={4}>
                <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: 3 }}>
                        <CardContent>

                            <StlViewer
                                style={style}
                                orbitControls
                                shadows
                                url={url}
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={4}>
                <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: 3 }}>
                        <CardContent>

                            <StlViewer
                                style={style}
                                orbitControls
                                shadows
                                url={url}
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={4}>
                <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: 3 }}>
                        <CardContent>

                            <StlViewer
                                style={style}
                                orbitControls
                                shadows
                                url={url}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}