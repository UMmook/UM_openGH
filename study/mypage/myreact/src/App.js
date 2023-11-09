import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Forum from './page/Forum';
import PostDetails from './page/PostDetails';
import Prime from './components/Prime';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Forum />} />
          <Route path="/post/:postId" element={<PostDetails />} />
        </Routes>
      </Router>
    </ChakraProvider>
    // <div className='App'>
    //   <Prime />
    // </div>
  );
}

export default App;