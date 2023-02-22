import React, { useEffect, useState } from 'react';
import {
  Grid,
  Button,
  Spinner,
  Center,
  Text,
  Container,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import { PokemonCard } from '../components';
import { listPokemons } from '../redux/actions/pokemonActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const [limit, setlimit] = useState(8);
  const pokemonReducer = useSelector(state => state.pokemonReducer);
  const { loading, pokemon } = pokemonReducer;

  const loadMore = () => {
    setlimit(limit + 8);
  };

  useEffect(() => {
    dispatch(listPokemons(limit));
  }, [dispatch, limit]);
  return (
    <>
      <Container maxW="1200px">
        <Text fontSize="4xl">POKEMON LIST </Text>
        {/* <Grid templateColumns="repeat(4, 1fr)" gap={6} className="px-12"> */}
        <SimpleGrid minChildWidth="260px" spacing="40px">
          {pokemon.map((item, index) => (
            <Box height="450px" key={index}>
              {' '}
              <PokemonCard index={index} item={item} />
            </Box>
          ))}
        </SimpleGrid>
        {/* </Grid> */}
        <Grid>
          <Center h="60px" color="white">
            {loading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            ) : (
              <Button onClick={loadMore} colorScheme="teal" size="sm">
                Load more
              </Button>
            )}{' '}
          </Center>
        </Grid>
      </Container>
      {/*  */}
    </>
  );
}
