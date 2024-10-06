import { Box, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import tools from "./tools";
import SuggesTunesPreview from "../assets/SuggesTunesPreview.jpg"
import JitHubOSPreview from "../assets/JitHubOSPreview.png"
import Programmer from "../assets/programmer.png"
import LinuxAccessControlPreveiew from "../assets/LinuxACSPreview.jpg"
import PRTAppPreview from "../assets/PRTAppPreview.jpg"

export default function Projects() {

    const projects = [
        {name: "PRT Telematics System", image: PRTAppPreview, description: "A capstone project where I worked on a team to develop a telematics system for the PRT"},
        {name: "SuggesTunes", image: SuggesTunesPreview, description: "A music suggestion web application that recommends songs based on a user's listening history."},
        {name: "C Operating System", image: JitHubOSPreview, description: "An operating system written in C that supports a command line interface and allows users to execute commands."},
        {name: "Portfolio Website", image: Programmer, description: "This website is a portfolio of my projects and skills. It is built using React and MUI."},
        {name: "Linux/Unix Access Control", image: LinuxAccessControlPreveiew, description: "A system for managing access control in a Linux/Unix environment"}
    ]


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{fontFamily: "monospace", paddingBottom: '50px',}}>My Recent&nbsp;
                <Box sx={{ color: "primary.main", display: "inline" }}>
                    Works
                </Box>
            </Typography>
            <Typography variant="body1" sx={{fontFamily: "monospace", paddingBottom: '50px',}}>&nbsp;
                Here are a few of the projects I've worked on recently.
            </Typography>
            <Grid container spacing={2} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                {projects.map(tool => (
                    <Grid key={tool.name} size = {3} sx={{ display: "flex", justifyContent: "center" }}>
                        <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "600px", borderRadius: "10px", boxShadow: 3, ":hover": { boxShadow: 20, color: "primary.main", transform: "scale(1.05)" }}}>
                            <CardContent sx={{padding: 0}}>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <img src={tool.image} alt={tool.name} style={{ width: "100%", height: "200px", maxWidth : "400px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
                                </Box>
                                <Typography variant="h6" component="h6" sx={{fontFamily: "monospace", textAlign: "center", padding: "10px" }}>
                                    {tool.name}
                                </Typography>
                                <Typography variant="body1" component="p" sx={{fontFamily: "monospace", textAlign: "center", padding: "10px" }}>
                                    {tool.description}
                                </Typography>
                                <Stack direction="row" spacing={2} sx={{justifyContent: "center", padding: "10px"}}>
                                    <Button variant="contained">Demo</Button>
                                    <Button variant="outlined">Github</Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
