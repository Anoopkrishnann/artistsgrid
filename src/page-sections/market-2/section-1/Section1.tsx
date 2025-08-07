import Grid from "@component/grid/Grid";
import NavLink from "@component/nav-link";
import Container from "@component/Container";
import { Carousel } from "@component/carousel";
import { BannerCard3 } from "@component/banners";
import { H4, Paragraph } from "@component/Typography";
import { CarouselCard3 } from "@component/carousel-cards";
// STYLED COMPONENTS
import { CardWrapper, CarouselBox } from "./styles";
// API FUNCTIONS
import api from "@utils/__api__/market-2";

export default async function Section1() {
  const carouselData = await api.getMainCarouselData();

  return (
    <Container pt="1.5rem">
      <Grid container spacing={5}>
        <Grid item lg={9} xs={12}>
          <CarouselBox>
            <Carousel
              dots
              autoplay
              arrows={false}
              spaceBetween={0}
              slidesToShow={1}
              dotStyles={{ bottom: 20 }}>
              {carouselData.map((item, index) => (
                <CarouselCard3
                  key={index}
                  img={item.imgUrl}
                  title={item.title}
                  category={item.category}
                  discount={item.discount}
                  buttonText={item.buttonText}
                  description={item.description}
                />
              ))}
            </Carousel>
          </CarouselBox>
        </Grid>

        <Grid item lg={3} xs={12}>
          <CardWrapper>
            <BannerCard3 flex={1} img="/assets/images/banners/blue.jpg">
              <Paragraph fontSize={13} letterSpacing={1.2}>
                Discover Fine Art
              </Paragraph>

              <H4 fontSize={20} lineHeight={1.2} mb={2}>
               Timeless beauty.
                <br />
                SALE
              </H4>

              <NavLink href="#" color="dark.main">
                Shop Now
              </NavLink>
            </BannerCard3>

            <BannerCard3 flex={1} img="/assets/images/banners/geo.jpg">
              <Paragraph fontSize={13} letterSpacing={1.2}>
             
              </Paragraph>

              <H4 fontSize={20} lineHeight={1.2} mb={2}>
                DESKTOPS &
                <br />
                LAPTOPS
              </H4>

              <NavLink href="#" color="dark.main">
                Shop Now
              </NavLink>
            </BannerCard3>
          </CardWrapper>
        </Grid>
      </Grid>
    </Container>
  );
}
