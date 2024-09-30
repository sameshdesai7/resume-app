import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Health(){
    return (
        <Box>
        <Typography variant="h5" sx={{fontFamily: "monospace", paddingBottom: '50px',}}>Health</Typography>
        <Grid container direction="row" spacing={2}>
            <Grid size = {4}>  
            <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h5" component="h5" sx={{fontFamily: "monospace", color: "primary.main"}}>
                            Exercise
                        </Typography>
                        <Typography variant="body1" component="p" sx={{fontFamily: "", color: "text.secondary"}}>
                            <ul>
                                <li>Placeholder 1</li>
                                <li>Placeholder 2</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size = {4}> 
            <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h5" component="h5" sx={{fontFamily: "monospace", color: "primary.main"}}>
                            Diet
                        </Typography>
                        <Typography variant="body1" component="p" sx={{fontFamily: "", color: "text.secondary"}}>
                            <ul>
                                <li>Placeholder 1</li>
                                <li>Placeholder 2</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size = {4}> 
            <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h5" component="h5" sx={{fontFamily: "monospace", color: "primary.main"}}>
                            Mental
                        </Typography>
                        <Typography variant="body1" component="p" sx={{fontFamily: "", color: "text.secondary"}}>
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
    )
}