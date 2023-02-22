import React from 'react';
import {
  Card,
  Stack,
  Badge,
  Text,
  CardBody,
  Image,
  CardFooter,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export default function PokemonCard({ item, index }) {
  return (
    <>
      <Card maxW="md">
        <Link to={`/pokemon/${item.id}`}>
          {' '}
          <Image objectFit="cover" src={item.image} alt="Chakra UI" />
        </Link>

        <CardBody>
          <Stack spacing={4} direction="row">
            <Text color="gray">NO.000{index} </Text>
          </Stack>
          <Stack fontSize="4xl" spacing={4} direction="row">
            <Text>{item.name} </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Stack spacing={4} direction="row">
            {item.apiTypes.map((subItem, index) => (
              <Badge key={index} colorScheme={index === 0 ? 'green' : 'red'}>
                {' '}
                {subItem.name}
              </Badge>
            ))}
          </Stack>
        </CardFooter>
      </Card>
    </>
  );
}
