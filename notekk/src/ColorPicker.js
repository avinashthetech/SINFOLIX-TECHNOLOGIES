// ColorPicker.js
import React from 'react';
import { Button } from '@mui/material';

const colors = ['yellow', 'pink', 'cyan', 'lightgreen'];

const ColorPicker = ({ onSelectColor }) => {
  return (
    <div>
      {colors.map((color) => (
        <Button key={color} style={{ backgroundColor: color }} onClick={() => onSelectColor(color)}>
          {color}
        </Button>
      ))}
    </div>
  );
};

export default ColorPicker;
