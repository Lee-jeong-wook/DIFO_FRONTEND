import {
    Flex,
    Image,
    Text,
    chakra,
} from '@chakra-ui/react';

export const M_OtherInfoContainer = chakra(Flex, {
    baseStyle:{
        height: '80px',
        borderBottom: '1px solid #000'
    }
})

export const M_OtherInfoBox = chakra(Flex, {
    baseStyle:{
        padding: '20px',
        gap: '20px'
    }
})

export const M_OtherInfoProfile = chakra(Image, {
    baseStyle: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
    }
})

export const M_OtherInfoName = chakra(Text, {
    baseStyle: {
        fontSize: '22px',
        fontFamily: 'medium',
    },
})