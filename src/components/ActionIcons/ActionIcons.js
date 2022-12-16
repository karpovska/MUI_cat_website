import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Colors } from "../../styles/index";
import { Divider, useMediaQuery} from '@mui/material';


export default function ActionIcons() {
  const showForLargeScreen  = useMediaQuery('(max-width:900px)');
  return (
    <>
      {showForLargeScreen 
      && 
      <Box sx={{ width:"100%", position:"fixed", bottom:0}} >
        <BottomNavigation sx={{"&.MuiBottomNavigation-root": {bgcolor: Colors.shaft}, height:40}}>
          <BottomNavigationAction icon={<FavoriteIcon />}  sx={{color: Colors.primary}}/>
          <Divider  orientation="vertical" flexItem sx={{bgcolor:Colors.primary}}/>
          <BottomNavigationAction  icon={<NotificationsIcon />} sx={{color: Colors.primary}}/>
          <Divider  orientation="vertical" flexItem sx={{bgcolor:Colors.primary}}/>
          <BottomNavigationAction  icon={<PersonIcon />} sx={{color: Colors.primary}} />
      </BottomNavigation>     
    </Box>
      }
    </>
    
  );
}
