import { Box, color } from "@mui/system";
import { useState } from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { Colors } from "../../../styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function NavMenu() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const stories = ["Blog","Podcast"];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', textAlign:'center'} }}>
                        <Button sx={{color:Colors.black}}>Home</Button>
                        <Button sx={{color:Colors.black}}>Volonteer</Button>
                        <Button sx={{color:Colors.black}} onClick={handleOpenNavMenu} endIcon={<KeyboardArrowDownIcon /> }>Stories</Button>
                        <Menu 
                        anchorEl={anchorElNav}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        > 
                            {stories.map((story)=> (
                                <MenuItem key={story} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{story}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        <Button sx={{color:Colors.black}}>Login</Button>
        </Box>
    );
}

export default NavMenu;