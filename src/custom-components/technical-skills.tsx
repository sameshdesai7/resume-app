import {Card, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import HTMLLogo from '../assets/html.png';
import TypeScriptImage from '../assets/TypeScriptLogo.svg'
import CSSLogo from '../assets/CSSLogo.png'
import MaterialUILogo from '../assets/materialUILogo.png'
import dotNETLogo from '../assets/dotNETLogo.png'
import djangoLogo from '../assets/djangoLogo.png'
import javaLogo from '../assets/javaLogo.png'
import sqLiteLogo from '../assets/sqLiteLogo.png'
import MSSQLLogo from '../assets/MSSQLLogo.png'
import JiraLogo from '../assets/JiraLogo.png'
import GithubLogo from '../assets/githubLogo.png'
import CLogo from '../assets/cLogo.png'
import PythonLogo from '../assets/pythonLogo.png'


export default function TechSkills(){
    const skills = [
        {name: "React.js", image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'},
        {name: "Node.js", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"},
        {name: "TypeScript", image: TypeScriptImage},
        {name: "HTML", image: HTMLLogo },
        {name: "CSS", image: CSSLogo},
        {name: "Material UI", image: MaterialUILogo},
        {name: ".NET", image: dotNETLogo},
        {name: "Django", image: djangoLogo},
        {name: "MS SQL", image: MSSQLLogo},
        {name: "SQLite", image: sqLiteLogo},
        {name: "Jira", image: JiraLogo},
        {name: "GitHub", image: GithubLogo},
        {name: "Java", image: javaLogo},
        {name: "C", image: CLogo},
        {name: "Python", image: PythonLogo},
        
    ];

    return (
        <Box id = "Skills" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{fontFamily: "monospace", paddingBottom: '50px',}}>Professional&nbsp;
                <Box sx={{ color: "primary.main", display: "inline" }}>
                                Skill Set
                </Box>
            </Typography>
            
            <Grid container spacing={2} sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
                {skills.map(skill => (
                    <Grid key={skill.name} size = {{md: 1, xs: 4}} sx={{ display: "flex", justifyContent: "center" }}>
                        <Card sx={{ backgroundColor: "background.default", width: "100%", maxWidth: "150px", borderRadius: "10px", boxShadow: 3, ":hover": { boxShadow: 20, color: "primary.main", transform: "scale(1.05)" }}}>

                            <CardContent>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <img src={skill.image} alt={skill.name} style={{ width: "100px", height: "100px", filter: "brightness(0) invert(1)" }} />
                                </Box>
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

