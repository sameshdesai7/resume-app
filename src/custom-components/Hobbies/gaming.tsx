import { Box, Typography } from "@mui/material";
import  Grid  from "@mui/material/Grid2";
import { url } from "inspector";
import { StlViewer } from "react-stl-viewer";

export default function Gaming() {
    return (
        <Box>
            <Typography variant="h5" sx={{fontFamily: "monospace", paddingBottom: '50px',}}>Gaming</Typography>
            <Grid container direction="row" spacing={2}>
            <Grid size = {4}>  
                <Box sx={{border: '1px solid', borderColor: 'primary.main'}}>
                    
                </Box>
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