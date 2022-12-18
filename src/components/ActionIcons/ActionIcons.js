import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Colors } from "../../styles/index";
import { Divider, Paper, useMediaQuery} from '@mui/material';


export default function ActionIcons() {
  const showForLargeScreen  = useMediaQuery('(max-width:900px)');
  return (
    <>{showForLargeScreen &&
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex:1300}}>
        <BottomNavigation sx={{"&.MuiBottomNavigation-root": {bgcolor: Colors.shaft}, height:40}}>
          <BottomNavigationAction label="Favourite" icon={<FavoriteIcon sx={{color: Colors.primary}}/>} sx={{borderRight:"1px solid #00c7c0"}} />
          <BottomNavigationAction label="Notifications" icon={<NotificationsIcon sx={{color: Colors.primary}} />} />
          <BottomNavigationAction label="Account" icon={<PersonIcon sx={{color: Colors.primary}}/>} sx={{borderLeft:"1px solid #00c7c0"}} />
        </BottomNavigation>
      </Paper>
    }
      

    </>
    
  );
}

