import { Box, Card, Typography } from "@mui/material";
import BiographyCard from '../custom-components/biography-card';

export default function Homepage() {
    return (
        <Box sx = {{margin : "2%"}}>
            <Box>
                <BiographyCard></BiographyCard>
            </Box>
        </Box>
    )
}