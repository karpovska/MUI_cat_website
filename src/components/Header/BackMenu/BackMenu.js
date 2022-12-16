import { useState } from "react";
import { Box } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Drawer, List, ListItemButton, Divider, useMediaQuery, Accordion, Typography, AccordionSummary, AccordionDetails  } from "@mui/material";
import { Colors } from "../../../styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function BackMenu() {
    const [anchorElNav, setAnchorElNav] = useState(false);
    const [open, setOpen] = useState(false);
    const showForLargeScreen  = useMediaQuery('(max-width:900px)');

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setAnchorElNav(open);
    }

    const handleClick = () => {
        setOpen(!open);
      };

    const list =  (
        <Box sx={{width:250, color:Colors.white}}>
            <List >
                <ListItemButton>Home</ListItemButton>
                <Divider sx={{bgcolor:Colors.primary, marginLeft:"6%", marginRight:"10%"}}/>
                <ListItemButton>Volonteer</ListItemButton>
                <Divider sx={{bgcolor:Colors.primary, marginLeft:"6%", marginRight:"10%"}}/>
                <Accordion style={{ boxShadow: "none" }} sx={{'&:before': {display: 'none', }}} >
                    <AccordionSummary 
                    sx={{backgroundColor: Colors.dark, color:Colors.white}}
                    expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Stories</Typography>
                    </AccordionSummary>

                    <AccordionDetails sx={{backgroundColor: Colors.dark, color:Colors.white, pl: 6}}>
                        <Typography>Blog</Typography>
                    </AccordionDetails>
                    
                    <AccordionDetails sx={{backgroundColor: Colors.dark, color:Colors.white, pl: 6}}>
                        <Typography>Podcast</Typography>
                    </AccordionDetails>
                </Accordion>
                    
                <Divider sx={{bgcolor:Colors.primary, marginLeft:"6%", marginRight:"10%"}}/>
                <ListItemButton>Home</ListItemButton>
                <Divider sx={{bgcolor:Colors.primary, marginLeft:"6%", marginRight:"10%"}}/>
            </List>
        </Box>
    )


    return (
        <>
            {showForLargeScreen 
            &&
             <Box sx={{ flexGrow: 1}}>
                <IconButton onClick={toggleDrawer(true)}>
                    <MenuIcon/>
                </IconButton>
                <Drawer 
                    anchor="left"
                    open={anchorElNav}
                    onClose={toggleDrawer(false)}
                    PaperProps={{style: {backgroundColor:Colors.dark, borderTopRightRadius:10, borderBottomRightRadius:10}}}
                    >
                    {list}
                </Drawer>
            </Box>
            }
        </>
       
    );
}

export default BackMenu;