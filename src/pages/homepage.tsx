import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BiographyCard from '../custom-components/biography-card';

export default function Homepage() {
    return (

        // Page container 
        <Stack sx={{ margin: "2%", marginTop: "10%" }}>
            {/* Grid for biography card and other menu */}
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ borderRadius: "10px"}}>
                        {/*Left Side Content Here  */}

                        <Stack spacing = {4}>
                        <Typography variant="h3" color = "primary.light">
                            Hi there!
                        </Typography>
                        <Typography variant="h2">
                            I'm Samesh Desai
                        </Typography>
                        <Typography variant="h6">
                           placeholder text
                        </Typography>
                        <Button variant ="contained" sx = {{maxWidth: "150px"}}>
                            View More!
                        </Button>
                        </Stack>
                    </Box>

                </Grid>
                <Grid size={6}>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ borderRadius: "10px", boxShadow: "7", backgroundColor: "#000000" }}>
                        {/* Right Side Content here  */}
                        <Box
                            component="img"
                            sx={{
                                height: 233,
                                width: 350,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="Picture of me."
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                        />
                    </Box>
                </Grid>
            </Grid>

            {/* Items below will go here  */}
        </Stack>

    )
}