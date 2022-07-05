import { Text } from '@chakra-ui/react';

export default function ItemList (props)  {
    return <Text
                _hover={{ bg: "#D8C892", color: "black"}}
                fontSize="25px"
                p="2% 5%"
                marginLeft="5v"
                border="3px solid black"
                borderBottom={props.borderDown ? "3px solid black" : "none"}
                textAlign={{base: "initial", lg:"center"}}
                w={{base: "90vw", lg:"60vw"}}
            >
                {props.children}
            </Text>
}