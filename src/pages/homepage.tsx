import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BiographyCard from '../custom-components/biography-card';
import AutoTyper from "../custom-components/autotyper";
import { TypeAnimation } from "react-type-animation";

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
                        sx={{ borderRadius: "10px" }}>
                        {/*Left Side Content Here  */}

                        <Stack spacing={4}>
                            <Typography variant="h3" color="primary.light">
                                Hi there!
                            </Typography>
                            <Typography variant="h2">
                                I'm Samesh Desai
                            </Typography>

                            {/* This should be moved to its own component */}
                            <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'I am proficient in TypeScript',
                                    1000, 
                                    'I am proficient in React',
                                    1000,
                                    'I am proficient in Java',
                                    1000,
                                    'I am proficient in Python',
                                    1000,
                                    'I am proficient in C#',
                                    1000,
                                    'I am proficient in HTML',
                                    1000,
                                    'I am proficient in C',
                                    1000,
                                    'I am proficient in .NET',
                                    1000,
                                    'I am proficient in Agile',
                                    1000,
                                    'I am proficient in GitHub',
                                    1000,
                                    'I am proficient in Jira',
                                    1000,
                                    'I am proficient in Linux',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1em', display: 'inline-block' }}
                                repeat={Infinity}
                            />

                            <Button variant="contained" sx={{ maxWidth: "150px" }}>
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