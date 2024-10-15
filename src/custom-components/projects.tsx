import { Box, Typography, Card, CardContent, Button, Stack, Tooltip } from "@mui/material";
import Grid from "@mui/material/Grid2";
import tools from "./tools";
import SuggesTunesPreview from "../assets/SuggesTunesPreview.jpg"
import JitHubOSPreview from "../assets/JitHubOSLogo.png"
import Programmer from "../assets/PortfolioPreview.jpg"
import LinuxAccessControlPreveiew from "../assets/LinuxACSPreview.jpg"
import PRTAppPreview from "../assets/PRTAppPreview.jpg"

export default function Projects() {

    const projects = [
        {name: "PRT Telematics System", image: PRTAppPreview, description: "A capstone project where I worked on a team to develop a telematics system for the PRT. Created a hardware device to capture vehicle telemetry data. Built a RESTful API to store and retrieve data. Finally created a web application to visualize the data.", demo: "", github: ""},
        {name: "SuggesTunes", image: SuggesTunesPreview, description: "An AI enabled music recommendation app that allows users to search for songs based on their current activity.", demo: "", github: ""},
        {name: "C Operating System", image: JitHubOSPreview, description: "An operating system written in C that supports a command line interface and allows users to execute commands using real operating system structures.", demo: "https://github.com/sameshdesai7/JitHubOS/blob/main/Deliverables/CS%20450%20User%20Manual.pdf", github: "https://github.com/sameshdesai7/JitHubOS"},
        {name: "Portfolio Website", image: Programmer, description: "This website is a portfolio of my projects and skills. It is built using React and MUI.", demo: "https://samesh-desai.vercel.app/", github: "https://github.com/sameshdesai7/resume-app"},
        {name: "Linux/Unix Access Control", image: LinuxAccessControlPreveiew, description: "A system designed to mimic the Access Control System of Linux/Unix systems. This project was used to learn about the underlying mechanics of how Linux/Unix manages access control.", demo: "", github: "https://github.com/sameshdesai7/access-control-system"}
    ]


    return (
        <Box id="#Projects" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                    <Grid key={tool.name} size = {{md: 3, xs: 12}} sx={{ display: "flex", justifyContent: "center" }}>
                        <Tooltip title={tool.github == "" ? "Demo and Github link coming soon!" : ""}>
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
                                        <Button disabled = {tool.demo == ""} variant="contained" href={tool.demo}>Demo</Button>
                                        <Button disabled = {tool.github == ""} variant="outlined" href={tool.github}>GitHub</Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Tooltip> 
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}



