import React from 'react';
import './index.css';
import './App.css';
import { Button, Typography } from '@mui/material';
import {styled} from '@mui/material/styles';



function App() {

  const MyCustomButton = styled(Button)(({theme}) => ({
    padding: theme.spacing(2)
  }))

  return (
    <div className="App">

        <Typography variant='myVariant'>Outra coisa?</Typography>
        <Typography sx={{color: 'myCustomColor.superLight'}}>Mai uma outra coisa?</Typography>
        <MyCustomButton variant='contained'>Olá Mundo!!!!</MyCustomButton>

    </div>
  );
}

export default App;
