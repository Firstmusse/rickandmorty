import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WebIcon from '@mui/icons-material/Web';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function Components() {
    const [value, setValue] = React.useState(0);
    return (
        <Box className={'nav-bar'} sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Main" icon={<WebIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Profile" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </Box>
    );
}