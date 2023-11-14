import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MemoryList from './MemoryList';
import MemoryListCard from './MemoryListCard';
import { useState, useEffect } from 'react';
import { imgData } from '../imgData';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(
    () => {
        setLoading(true);
        const timer = setTimeout( ()=>{
            setVideos(imgData);
            setLoading(false);
        }, 2000 );
        return () => clearTimeout(timer);
    }
, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="중고 물품" {...a11yProps(0)} />
          <Tab label="커뮤니티" {...a11yProps(1)} />
          <Tab label="고객센터" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div>
          {loading && <MemoryListCard listLength={imgData[0].items.length} />}
          {
              !loading && videos.map((list, index) => (
                  <section key={index}>
                      <h2 className='section-title'>물품</h2>
                      <MemoryList list={list} />
                  </section>
              ))
          }
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        물품 준비중이예요!!!
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        물품 준비중입니다!
      </CustomTabPanel>
    </Box>
  );
}