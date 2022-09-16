import { Box, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './navbar/nav';
import SearchBar from './searchBar/searchBar';
import Tweet from './Tweets/tweet';


// const na = navigator.onLine
// if (na) {
//   alert('online');
//   console.log('network', na)
// } else {
//   alert('offline')
//   console.log('network', na)

// }

function App() {

  return (
    <Flex justifyContent='space-between' w='100vw'>
    <Router>
    <Box>
    <Navbar/>
      <Box>
        <Routes>
          <Route exact path='/' >
            {/* <Home /> */}
          </Route>

        </Routes>
      </Box>
    </Box>
  </Router>
  <Tweet/>
  <SearchBar/>
  </Flex>
  );
}

export default App;
