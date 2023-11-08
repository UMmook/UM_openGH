import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab icon={<PhoneIcon />} aria-label="phone" label= "phone" />
      <Tab icon={<FavoriteIcon />} aria-label="favorite" iconPosition='start' label= "favorite" />
      <Tab icon={<PersonPinIcon />} aria-label="person" iconPosition='end' label= "person" />
      <Tab icon={<DirectionsWalkIcon />} aria-label="walk" iconPosition='bottom' label= "walk" />
    </Tabs>
  );
}