import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from "@mui/system";
import { Divider, useMediaQuery } from '@mui/material';
import { Colors } from "../../../styles";



function ActionIcons() {
    const showForLargeScreen  = useMediaQuery('(min-width:900px)');
    const changeIconDistance  = useMediaQuery('(min-width:1200px)');
    const distance = changeIconDistance ? 4 : 1;

    return(
        <>
            {showForLargeScreen 
            && 
            <Box
            sx={{
                display:"flex",
                textAlign: 'center',
                color:Colors.dove_gray,
                width: 'fit-content',
                '& svg': {
                    m: 0.5,
                    },
                '& hr': {
                    mx: distance,
                    },
            }}
        >
                <FavoriteIcon/>
                <Divider orientation="vertical" flexItem sx={{bgcolor:Colors.primary}} />
                <PersonIcon/>
                <Divider orientation="vertical" flexItem sx={{bgcolor:Colors.primary}} />
                <NotificationsIcon/>
             </Box>  
            }
        </>
    );
}

export default ActionIcons;