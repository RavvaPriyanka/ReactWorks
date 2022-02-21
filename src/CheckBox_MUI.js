import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <div>
      <Checkbox {...label} />
      {/* <Checkbox {...label} defaultChecked />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked /> */}
    </div>
  );
}



//npm install @mui/material @emotion/react @emotion/styled
