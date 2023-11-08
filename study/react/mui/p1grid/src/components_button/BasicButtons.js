import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <>
        <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href='#text-buttons'>Link</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">Success</Button>
            <Button variant="outlined" color="error">Error</Button>
        </Stack>
    </>
  );
}