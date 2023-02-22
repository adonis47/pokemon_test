import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { Home, PokemonDetails } from './pages';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes></Routes>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <Routes>
              <Route path="/" element={<Navigate replace to="/pokemon" />} />
              <Route path="/pokemon" element={<Home />} />
              <Route path="/pokemon/:id" element={<PokemonDetails />} />
            </Routes>
          </Grid>
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
