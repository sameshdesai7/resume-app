import {Box, Stack } from "@mui/material";
import Biography from "../custom-components/biography";
import Projects from "../custom-components/projects";
import CustomDivider from "../custom-components/customDivider";
import Timeline from "../custom-components/customTimeline";
import Hobbies from "../custom-components/Hobbies/hobbies";
import TechSkills from "../custom-components/technical-skills";
import Tools from "../custom-components/tools";
import SoftSkills from "../custom-components/soft-skills";

export default function Homepage() {
    return (

        // Page container 
        <Stack spacing ={10} sx={{ margin: "2%", marginTop: "10%", paddingLeft: "5%", paddingRight: "5%"}}>
            <Biography/>
            <CustomDivider/>
            <TechSkills/>
            <Tools/>
            <CustomDivider/>
            {/* <Timeline/>
            <CustomDivider/> */}
            <Projects/>
            <CustomDivider/>
            {/* <Hobbies/> */}
        </Stack>

    )
}