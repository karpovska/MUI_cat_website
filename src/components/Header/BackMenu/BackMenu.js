import { Fragment, useState } from "react";
import { Box } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Drawer, List, ListItemButton, Divider, useMediaQuery, Accordion, Typography, AccordionSummary, AccordionDetails, Button, ListItemText  } from "@mui/material";
import { Colors } from "../../../styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MenuBook } from "@mui/icons-material";



function BackMenu() {
    const [state, setState] = useState({left: false});
    const showForLargeScreen  = useMediaQuery("(max-width:900px)");

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setState({...state,[anchor]:open});
    }

    const list = (anchor) => (
        <Box 
            onKeyDown={toggleDrawer(anchor,false)}
            sx={{backgroundColor:Colors.dark,height:"100%"}}
        
        >
            <List sx={{margin:3, color:Colors.white, pr:1, pb: 1, width:"250px"}} onClick={toggleDrawer(anchor,true)}>
                <ListItemButton sx={{borderBottom:"1px solid #00c7c0"}}><ListItemText primary="Home"/></ListItemButton>
                <ListItemButton sx={{borderBottom:"1px solid #00c7c0"}}><ListItemText primary="Volonteer"/></ListItemButton>
                <ListItemButton sx={{borderBottom:"1px solid #00c7c0"}}>
                <Accordion style={{ boxShadow: "none" }}>
                    <AccordionSummary sx={{backgroundColor:Colors.dark, width:"250px", color: "white", pl: 0, display:"flex", justifyContent:"space-between"}}
                    expandIcon={<ExpandMoreIcon sx={{color:Colors.white}}/>}>
                        <Typography>Stories</Typography>    
                    </AccordionSummary>
                    <AccordionDetails sx={{ backgroundColor:Colors.dark, color:Colors.white, pr: 5}}>
                        <Typography sx={{borderTop:"1px solid #00c7c0", padding:1}}>Blog</Typography>
                        <Typography sx={{borderTop:"1px solid #00c7c0", padding:1}}>Podcast</Typography>
                    </AccordionDetails>
                </Accordion>
                </ListItemButton>
                <ListItemButton sx={{borderBottom:"1px solid #00c7c0"}}><ListItemText primary="Login"/></ListItemButton>
                <ListItemButton sx={{borderBottom:"1px solid #00c7c0"}}><ListItemText primary="Contact us"/></ListItemButton>
            </List>
        </Box>
    )

    const back = ["left"].map((anchor) => (
        <Fragment key={anchor}>
            <Button onClick={toggleDrawer("left",true)} ><MenuIcon style={{color:Colors.black}}/></Button>
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor,false)}
                
            >
                {list(anchor)}
            </Drawer>
        </Fragment>))


    return (
        <div>
         {showForLargeScreen && back}
             
            
        </div>
       
    );
}

export default BackMenu;