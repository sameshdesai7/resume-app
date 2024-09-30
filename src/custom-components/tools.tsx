import {Card, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Tools(){
    const tools = [
        {name: "VS Code", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "Visual Studio", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "Postman", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
        {name: "Swagger", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
  
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{fontFamily: "monospace", paddingBottom: '50px',}}>Tools I Use</Typography>
            <Grid container spacing={2} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                {tools.map(tool => (
                    <Grid key={tool.name} size = {1} sx={{ display: "flex", justifyContent: "center" }}>
                        <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "150px", borderRadius: "10px", boxShadow: 3 }}>
                            <CardContent>
                                <img src={tool.image} alt={tool.name} style={{ width: "100px", height: "100px", filter: "brightness(0) invert(1)" }} />
                                <Typography variant="body1" component="p" sx={{fontFamily: "monospace", textAlign: "center"}}>
                                    {tool.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>

    )
}

