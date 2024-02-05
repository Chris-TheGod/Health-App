import {
  TextField,
  Button,
  Stack,
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const BMI = () => {
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('');

  return (
    <>
      <h1>Age: </h1>
      <form noValidate>
        <Stack spacing={2} width={400}>
          <TextField label='age' type='number' />
          <Box>
            <Box>
              <FormControlLabel label='Male' control={<Checkbox />} />
            </Box>
            <Box>
              <FormControlLabel label='Female' control={<Checkbox />} />
            </Box>
          </Box>
          <TextField label='height (cm)' type='number' />
          <TextField label='weight (kg)' type='number' />
          <Button type='submit' variant='contained'>
            Get my BMI
          </Button>
        </Stack>
      </form>
    </>
  );
};
