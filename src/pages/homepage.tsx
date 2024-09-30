import {Box, Stack } from "@mui/material";
import Biography from "../custom-components/biography";
import Projects from "../custom-components/projects";
import CustomDivider from "../custom-components/customDivider";
import Timeline from "../custom-components/customTimeline";
import Hobbies from "../custom-components/hobbies";
import Skills from "../custom-components/skills";

export default function Homepage() {
    return (

        // Page container 
        <Stack spacing ={10} sx={{ margin: "2%", marginTop: "10%", paddingLeft: "10%"}}>
            <Biography/>
            <CustomDivider/>
            <Box sx = {{paddingRight : "10%"}}>
                <Timeline/>
            </Box>
            <CustomDivider/>
            <Skills/>
            <CustomDivider/>
            <Projects/>
            <CustomDivider/>
            <Hobbies/>
        </Stack>

    )
}