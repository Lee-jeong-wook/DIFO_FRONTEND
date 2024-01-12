import {
    Flex,
    Image,
    Text,
    chakra,
} from '@chakra-ui/react';

export const M_OtherMessageContainer = chakra(Flex, {
    baseStyle:{
        padding: '10px 20px',
    }
})

export const M_OtherMessageProfile = chakra(Image, {
    baseStyle: {
        width: '35px',
        height: '35px',
        borderRadius: '50%',
    },
})

export const M_OtherMessageMain = chakra(Flex, {
    baseStyle: {
        backgroundColor: "#dddd00",
        borderRadius: '20px',
        padding: '5px 15px'
    }
})

export const M_OtherMessageText = chakra(Text, {
    baseStyle: {
        color: "#fff",
    }
})

