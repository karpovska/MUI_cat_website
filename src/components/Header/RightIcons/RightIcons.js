import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from "@mui/system";
import { Divider } from '@mui/material';
import { Colors } from "../../../styles";



function ActionIcons() {
   

    return(
           <Box
            sx={{
                display: { xs: 'none', md: 'flex' },
                textAlign: 'center',
                color:Colors.dove_gray,
                width: 'fit-content',
                '& svg': {
                    m: 0.5,
                    },
                '& hr': {
                    mx: 3,
                    },
            }}
        >
         
                <FavoriteIcon/>
                <Divider orientation="vertical" flexItem sx={{bgcolor:Colors.primary}} />
                <PersonIcon/>
                <Divider orientation="vertical" flexItem sx={{bgcolor:Colors.primary}} />
                <NotificationsIcon/>
         
             </Box>  
    );
}

export default ActionIcons;