import {
    Flex,
    Text,
    chakra,
    Input,
    Button
} from '@chakra-ui/react';

export const M_MessageInputContainer = chakra(Flex, {
    baseStyle:{
        position:'fixed',
        bottom: 5,
        width: '100%',
        justifyContent:'center'
    }
})
export const M_MessageInput = chakra(Input, {
    baseStyle:{

    }
})

export const M_MessageBtn = chakra(Button, {
    baseStyle:{
        width: '130px',
        backgroundColor: 'skyblue'
    }
})