import {Card, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function SoftSkills(){
    const skills = [
        {name: "Communication", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "Teamwork", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},

    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{fontFamily: "monospace", paddingBottom: '50px',}}>Soft Skills</Typography>
            <Grid container spacing={2} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                {skills.map(skill => (
                    <Grid key={skill.name} size = {1} sx={{ display: "flex", justifyContent: "center" }}>
                        <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "150px", borderRadius: "10px", boxShadow: 3 }}>
                            <CardContent>
                                <img src={skill.image} alt={skill.name} />
                                <Typography variant="body1" component="p" sx={{fontFamily: "monospace", color: "primary.main", textAlign: "center"}}>
                                    {skill.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>

    )
}

