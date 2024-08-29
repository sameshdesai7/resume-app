import { Box, Card, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BiographyCard from '../custom-components/biography-card';

export default function Homepage() {
    return (

        // Page container 
        <Stack sx={{ margin: "2%" }}>
            {/* Grid for biography card and other menu */}
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Box sx={{borderRadius: "10px", backgroundColor: "#FFFFFF" }}>
                        {/*Left Side Content Here  */}
                        <Typography variant="h3">
                            Hi there!
                        </Typography>
                    </Box>

                </Grid>
                <Grid size={6}>

                    <Box sx={{ backgroundColor: "#FFFFFF" }}>
                        {/* Right Side Content here  */}
                    </Box>
                </Grid>
            </Grid>

            {/* Items below will go here  */}
        </Stack>

    )
}