import { Box, Typography, Card, CardContent, Button, Stack, Tooltip, Avatar } from "@mui/material";
import Grid from "@mui/material/Grid2";
import GitHubCalendar from 'react-github-calendar';

export default function GitHub() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{fontFamily: "monospace", paddingBottom: '50px',}}>Days I&nbsp;
                <Box sx={{ color: "primary.main", display: "inline" }}>
                    Code
                </Box>
            </Typography>
            <Grid container spacing={2} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Grid size={6}>
                    <GitHubCalendar blockSize = {12} username="sameshdesai7" />
                </Grid>
            </Grid>
        </Box>
    )
}

