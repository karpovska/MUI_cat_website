import { useState } from "react";
import { Box } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Drawer, List, ListItemButton, Divider, Collapse } from "@mui/material";
import { Colors } from "../../../styles";
import { ExpandLess, ExpandMore } from "@mui/icons-material";



function BackMenu() {
    const [anchorElNav, setAnchorElNav] = useState(false);
    const [open, setOpen] = useState(false);

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
                <ListItemButton onClick={handleClick} sx={{ justifyContent: 'space-between' }}>
                    Stories
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List >
                        <Divider sx={{bgcolor:Colors.primary, marginLeft:"20%", marginRight:"20%"}}/>
                        <ListItemButton sx={{ pl: 6 }}>Blog</ListItemButton>
                        <Divider sx={{bgcolor:Colors.primary, marginLeft:"20%", marginRight:"20%"}}/>
                        <ListItemButton sx={{ pl: 6 }}>Podcast</ListItemButton>
                    </List>
                </Collapse>
                    
                <Divider sx={{bgcolor:Colors.primary, marginLeft:"6%", marginRight:"10%"}}/>
                <ListItemButton>Home</ListItemButton>
                <Divider sx={{bgcolor:Colors.primary, marginLeft:"6%", marginRight:"10%"}}/>
            </List>
        </Box>
    )


    return (
        <Box sx={{ flexGrow: 1, display: { sm: 'block', md: 'none' }, }}>
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
    );
}

export default BackMenu;