import {Card, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Skills(){
    return (
        <Box>
            <Typography variant="h4" sx={{fontFamily: "monospace", paddingBottom: '50px'}}>Skills</Typography>
            <Grid container spacing={2}>
                <Grid size = {4} >
                    <Card>
                        <Card sx={{ backgroundColor: "background.default" }}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Frontend
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Experience with React, Typescript, and Material UI
                                </Typography>
                            </CardContent>
                        </Card>
                    </Card>
                </Grid>
                <Grid size = {4} >
                    <Card sx = {{ backgroundColor: "background.default" }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Backend
                            </Typography>
                            <Typography variant="body2" component="p">
                                Experience with .NET Core, Django, MS SQL Studio, SQLiteCloud
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size = {4} >
                    <Card sx = {{ backgroundColor: "background.default" }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                General
                            </Typography>
                            <Typography variant="body2" component="p">
                                Experience with general project management tools such as Jira, GitHub, and Slack
                            </Typography>
                            <Typography variant="body2" component="p">
                                Soft Skills include time management, communication, multitasking, and organization
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>

    )
}