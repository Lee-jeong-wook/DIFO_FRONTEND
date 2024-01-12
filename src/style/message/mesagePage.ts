import {
    Flex,
    Image,
    Text,
    chakra,
} from '@chakra-ui/react';

export const M_MessageContainer = chakra(Flex, {
    baseStyle:{
        height: '720px',
        overflowY: 'scroll',
        flexFlow: 'column'
    }
}) 