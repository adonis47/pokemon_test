import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetails } from '../redux/actions/pokemonActions';
import {
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import DetailsCard from '../components/DetailsCard';

export default function PokemonDetails() {
  const dispatch = useDispatch();

  const pokemonReducer = useSelector(state => state.pokemonReducer);
  const { loading, pokemonDetails } = pokemonReducer;

  let { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetails(id));
  }, [dispatch, id]);
  return (
    <>
      <Container maxW="1200px">
        <Grid>
          <Center color="white">
            {loading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            ) : (
              <>
                {pokemonDetails !== null ? (
                  <Grid templateColumns="repeat(1, 1fr)" gap="5px">
                    <Grid>
                      <Center>
                        {' '}
                        <Flex gap="10px">
                          <Text fontSize="4xl">{pokemonDetails.name}</Text>
                          <Text fontSize="4xl">DETAILS </Text>
                        </Flex>
                      </Center>
                      <DetailsCard pokemonDetails={pokemonDetails} />{' '}
                    </Grid>
                    <Grid>
                      <Link to={`/pokemon`}>
                        <Button colorScheme="teal" size="sm">
                          Back
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                ) : null}
              </>
            )}{' '}
          </Center>
        </Grid>
      </Container>
    </>
  );
}
