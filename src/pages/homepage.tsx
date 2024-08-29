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
                    <Box sx={{ backgroundColor: "#000000" }}>
                        {/*Left Side Content Here  */}
                    </Box>

                </Grid>
                <Grid size={6}>

                    <Box sx={{ backgroundColor: "#000000" }}>
                        {/* Right Side Content here  */}
                    </Box>
                </Grid>
            </Grid>

            {/* Items below will go here  */}
        </Stack>

    )
}