import {Card, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function TechSkills(){
    const skills = [
        {name: "React.js", image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'},
        {name: "Node.js", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "TypeScript", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "HTML", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "Material UI", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: ".NET", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "Django", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "MS SQL", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "SQLite", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "Jira", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "GitHub", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "test", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{fontFamily: "monospace", paddingBottom: '50px',}}>Professional&nbsp;
                <Box sx={{ color: "primary.main", display: "inline" }}>
                                Skill Set
                </Box>
            </Typography>
            
            <Grid container spacing={2} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                {skills.map(skill => (
                    <Grid key={skill.name} size = {1} sx={{ display: "flex", justifyContent: "center" }}>
                        <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "150px", borderRadius: "10px", boxShadow: 3 }}>
                            <CardContent>
                                <img src={skill.image} alt={skill.name} style={{ width: "100px", height: "100px", filter: "brightness(0) invert(1)" }} />
                                <Typography variant="body1" component="p" sx={{fontFamily: "monospace", textAlign: "center"}}>
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

