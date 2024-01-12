import {
    Flex,
    Image,
    Text,
    chakra,
  } from '@chakra-ui/react';

export const M_MessageListContainer = chakra(Flex, {
    baseStyle: {
        padding: '20px',
        flexFlow: 'column',
      },
})

export const M_MessageListBox = chakra(Flex, {
    baseStyle: {
        padding: '20px',
        background: '#fff',
        boxShadow: '0 4px 8px rgba(218, 226, 237, 0.6)',
        flexFlow: 'column',
        gap: '10px',
      },
})
export const M_MessageListWriterImg = chakra(Image, {
    baseStyle: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
    },
});

export const M_MessageListMain = chakra(Flex, {
    baseStyle: {
      flexFlow: 'row',
      gap: '10px',
    },
  });
  export const M_MessageListDetail = chakra(Flex, {
    baseStyle: {
    //   gap: '8px',
    //   alignItems: 'center',
      flexFlow: "column"
    },
});
export const M_MessageListName = chakra(Text, {
    baseStyle: {
      fontSize: '22px',
      fontFamily: 'medium',
    },
  });
  export const M_MessageListTime = chakra(Text, {
    baseStyle: {
        fontSize: "16px",
        fontFamily: 'medium',
    },
  });