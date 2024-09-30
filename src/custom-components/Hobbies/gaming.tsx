import { Box, Card, CardContent, Typography } from "@mui/material";
import  Grid  from "@mui/material/Grid2";
import { url } from "inspector";
import { StlViewer } from "react-stl-viewer";

export default function Gaming() {
    return (
        <Box>
            <Typography variant="h5" sx={{fontFamily: "monospace", paddingBottom: '50px',}}>Gaming</Typography>
            <Grid container direction="row" spacing={2}>
                <Grid size = {4}>  
                <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h5" component="h5" sx={{fontFamily: "monospace", color: "primary.main"}}>
                                Counter Strike 2
                            </Typography>
                            <Typography variant="body1" component="p" sx={{fontFamily: "", color: "text.secondary"}}>
                                <ul>
                                    <li>Skills Learned: Communication, Teamwork, Reaction Time, Hand Eye Coordination</li>
                                    <li>Highest Rank: 17000</li>
                                    <li>Hours Played: 3000+</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size = {4}> 
                    <Box sx={{border: '1px solid', borderColor: 'primary.main'}}>
                        
                    </Box>
                </Grid>
                <Grid size = {4}> 
                    <Box sx={{border: '1px solid', borderColor: 'primary.main'}}>
                        
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}