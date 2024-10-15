import {Card, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import VSCodeLogo from '../assets/VSCodeLogo.png';
import PostmanLogo from '../assets/postmanLogo.png';
import SwaggerLogo from '../assets/SwaggerLogo.svg';
import ViteLogo from '../assets/viteLogo.png';

export default function Tools(){
    const tools = [
        {name: "VS Code", image: VSCodeLogo},
        {name: "Visual Studio", image: VSCodeLogo},
        {name: "Postman", image: PostmanLogo},
        {name: "Swagger", image: SwaggerLogo},
        // {name: "Vite", image: ViteLogo},

  
    ];

    return (
        <Box id = "Tools"sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{fontFamily: "monospace", paddingBottom: '50px',}}>Tools&nbsp;
                <Box sx={{ color: "primary.main", display: "inline" }}>
                    I Use
                </Box>
            </Typography>
            <Grid container spacing={2} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                {tools.map(tool => (
                    <Grid key={tool.name} size = {{md: 1, xs: 4}} sx={{ display: "flex", justifyContent: "center" }}>
                        <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "150px", borderRadius: "10px", boxShadow: 3, ":hover": { boxShadow: 20, color: "primary.main", transform: "scale(1.05)" }}}>
                            <CardContent>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <img src={tool.image} alt={tool.name} style={{ width: "100px", height: "100px", filter: "brightness(0) invert(1)" }} />
                                </Box>
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

