import {Card, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Skills(){
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
            <Typography variant="h4" sx={{fontFamily: "monospace", paddingBottom: '50px',}}>Skills</Typography>
            <Grid container spacing={2} sx={{ width: "90%", display: "flex", justifyContent: "center" }}>
                <Grid size = {4} sx={{ display: "flex", justifyContent: "center" }}>
                    <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h5" component="h5" sx={{fontFamily: "monospace", color: "primary.main"}}>
                                Frontend
                            </Typography>
                            <Typography variant="body1" component="p" sx={{fontFamily: "", color: "text.secondary"}}>
                                Experience with React, TypeScript, HTML, CSS
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size = {4} sx={{ display: "flex", justifyContent: "center" }}>
                    <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h5" component="h5" sx={{fontFamily: "monospace", color: "primary.main"}}>
                                Backend
                            </Typography>
                            <Typography variant="body1" component="p" sx={{fontFamily: "", color: "text.secondary"}}>
                                Experience with .NET Core, Django, MS SQL Studio, SQLiteCloud
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size = {4} sx={{ display: "flex", justifyContent: "center" }}>
                    <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h5" component="h5" sx={{fontFamily: "monospace", color: "primary.main"}}>
                                General
                            </Typography>
                            <Typography variant="body1" component="p" sx={{fontFamily: "", color: "text.secondary"}}>
                                Experience with general project management tools such as Jira, GitHub, and Slack
                            </Typography>
                            <Typography variant="body1" component="p" sx={{fontFamily: "", color: "text.secondary"}}>
                                Soft Skills include time management, communication, multitasking, and organization
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>

    )
}