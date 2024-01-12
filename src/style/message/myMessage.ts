import {
    Flex,
    Image,
    Text,
    chakra,
} from '@chakra-ui/react';

export const M_MyMessageContainer = chakra(Flex, {
    baseStyle: {
        padding: '10px 20px',
    }
})

export const M_MyMessageMain = chakra(Flex, {
    baseStyle: {
        backgroundColor: "#7364ff",
        borderRadius: '20px',
        padding: '5px 15px',
        marginLeft: 'auto'
    }
})

export const M_MyMessageText = chakra(Text, {
    baseStyle: {
        color: "#fff",
    }
})