import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

function Slider_MUI() {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
      setValue(newValue); };

    return (
        <div>
    <Box sx={{ width: 200 }}>
    
    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
    <h1>Slider:
    <VolumeDown />    
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
        </h1>
      </Stack>
      {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
    </Box>

        </div>
    )
}

export default Slider_MUI
