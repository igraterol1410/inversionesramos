import React, { useEffect, useState } from 'react'
import {
  Link,
} from "react-router-dom";
import {
    HStack,
    Grid,
    GridItem,
    Box,
    Image,
    Heading,
    Center,
    position,
    Button
  } from '@chakra-ui/react'
  // import Waves from '../../assets/waves2.svg'
  import Waves from '../../assets/waves2.svg'
  import Hero1 from '../../assets/productos/tobo_mopeador.webp'
  import Hero2 from '../../assets/hero-image.svg'
  import Hero3 from '../../assets/productos/bolsa_desechos_organicos.webp'
  import Animation from '../../assets/animation.svg'

import HeroImage from '../../assets/hero-image.svg'
import { Swiper, SwiperSlide } from "swiper/react";

import products from '../../components/products/products';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const LandingMain = () => {
  const viewport = window.visualViewport?.width
  const [pageWidth, setPageWidth] = useState(window.visualViewport?.width)
  
  const resize = () => {
    setPageWidth(window.visualViewport?.width)
  }
  
  useEffect(()=>{
    window.addEventListener('resize', resize, { passive: true })
    return () => window.removeEventListener('resize', resize)
  },[])


  return (
    <Grid 
    gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr']}
    gap={['2','2','6','6']}
    padding={4}
    marginTop='98px' 
    height='90vh' 
    w='100%'
    position='relative'
    bgGradient='linear(to-t, brand.aquamarinePrimary, white)'
    >
      <GridItem 
      h='100%' 
      w='100%'
      py={4}
      display='grid'
      alignItems='center'
      order={['10','10','-10','-10']}>
        <Box
        h='70%'
        w='100%'
        px={4}
        display='grid'
        alignContent='center'
        gridTemplateRows='1fr 50px'
        marginTop={['0','0','-4rem','-4rem']}
        >
        <Box display='grid'
        alignContent='center'>
          <Box 
          marginTop='auto'
          fontWeight='bold'
          color='brand.blue'>
            Tu mejor aliado comercial
          </Box>
          <Center textAlign='center'>
            <Swiper 
            style={pageWidth && pageWidth < 760 ? {width:'80vw'} : {width:'48vw'}}
            modules={[Autoplay, Pagination, Navigation]} 
            autoHeight
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}>
              <SwiperSlide>
                <Heading w='100%' color='brand.blue'>Somos distribuidores de productos de limpieza, bolsas pl??sticas, v??veres y m??s...</Heading>
              </SwiperSlide>
              <SwiperSlide>
                <Heading color='brand.blue'>Todo en art??culos de limpieza</Heading>
              </SwiperSlide>
              <SwiperSlide>
                <Heading color='brand.blue'>Linea institucional de papel</Heading>
              </SwiperSlide>
            </Swiper>
            </Center>
          <Box 
          marginTop={4}>
            <Center>
              <Link to='/cotizar'>
                <Button
                borderRadius={50}
                bg='brand.blue'
                color='white'
                padding={8}
                fontSize={18}
                _hover={{
                  color:'brand.aquamarinePrimary',
                  bg:'brand.blue'
                }}
                >
                  Cotizar productos
                </Button>
              </Link>
            </Center>
        </Box>
          </Box>
        </Box>
      </GridItem>
      <GridItem 
      h='100%' 
      w='100%'
      display='grid'
      alignItems='center'
      justifyContent='center'
      >
        <Box
        w={['200px','200px','500px','500px']}
        h={['200px','200px','500px','500px']}
        borderRadius='50%'
        backgroundImage={Animation}
        >
          <Box>
          <Swiper
          modules={[Autoplay, Pagination, Navigation]} 
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}>
            {
              products.AllProducts().map((product,index)=>(
                <SwiperSlide key={index}>
                  <Center textAlign='center' w='100%' marginTop='20%'>
                    <Image src={product.images[0] || Hero2} objectFit='cover' w='60%' h='60%' />
                  </Center>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </Box>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default LandingMain
