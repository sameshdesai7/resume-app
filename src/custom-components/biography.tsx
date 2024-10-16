import { Box, Stack, Typography, Button, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AutoTyper from "./autotyper";

export default function Biography() {

    const handleEmailClick = () => {
        window.open("mailto:sameshdesai7@gmail.com");
    }

    return (
        <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 7 }}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ 
                    borderRadius: "10px",

                }}>
                {/*Left Side Content Here  */}

                <Stack spacing={1}>
                    <Typography variant="h1" sx={{fontFamily: "monospace", fontWeight: "bold", color: "primary.light", fontSize: {xs: "3rem", md: "6rem"}}}>
                        Hi there!
                    </Typography>
                    <Typography variant="h3" sx={{fontFamily: "monospace", fontSize: {xs: "2rem", md: "2rem"}}}>
                        I'm Samesh Desai
                    </Typography>

                    <Typography variant="h6" sx={{ color: "text.secondary" }}>
                        I'm a computer science student with a passion for software development. Currently I am enrolled at West Virgnia University set to graduate in December 2024. 
                        During my time at WVU I haved gained skills in&nbsp;
                        <Box sx={{ color: "primary.main", display: "inline" }}>
                            <AutoTyper></AutoTyper>
                        </Box>
                    </Typography>

                    <Button onClick={handleEmailClick} variant="contained" sx={{ maxWidth: "150px" }}>
                        Email Me!
                    </Button>
                </Stack>
            </Box>

        </Grid>

        <Grid size={{ xs: 12, md: 5 }} sx = {{display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center'}}>
            <Box sx={{ flexDirection: 'column', alignItems: 'center' }}>
                <img src={require("../assets/programmer.png")} alt="ProgrammerImage" style={{ width: "400px", borderRadius: "10px"}} />
            </Box>

        </Grid>
        
    </Grid>
    )
}