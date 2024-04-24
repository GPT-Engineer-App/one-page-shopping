import { Box, Button, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Classic Watch",
      price: 250,
      image: "https://images.unsplash.com/photo-1493799582117-9a58bc07a8de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwd2F0Y2h8ZW58MHx8fHwxNzEzOTQ4OTY3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 999,
      image: "https://images.unsplash.com/photo-1592890288564-76628a30a657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lfGVufDB8fHx8MTcxMzk0ODk2N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Headphones",
      price: 150,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzfGVufDB8fHx8MTcxMzk0ODk2N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box p={5}>
      <Heading mb={4}>Simple Shopping Cart</Heading>
      <Stack spacing={6}>
        {products.map((product) => (
          <Flex key={product.id} p={5} boxShadow="md" borderRadius="md" alignItems="center" justifyContent="space-between">
            <Image boxSize="100px" objectFit="cover" src={product.image} alt={product.name} />
            <VStack align="start" flex="1" ml={4}>
              <Text fontWeight="bold">{product.name}</Text>
              <Text>${product.price}</Text>
            </VStack>
            <Flex alignItems="center">
              <Button size="sm" colorScheme="pink" leftIcon={<FaMinus />}>
                Remove
              </Button>
              <Text mx={2}>1</Text>
              <Button size="sm" colorScheme="teal" rightIcon={<FaPlus />}>
                Add
              </Button>
            </Flex>
          </Flex>
        ))}
      </Stack>
      <Flex mt={10} justifyContent="flex-end">
        <Button rightIcon={<FaShoppingCart />} colorScheme="blue" size="lg">
          Checkout
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
