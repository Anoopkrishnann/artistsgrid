import Grid from "@component/grid/Grid";
import Divider from "@component/Divider";
import Container from "@component/Container";
import { H4, Paragraph, Span } from "@component/Typography";

// STYLED COMPONENTS
import { BannerBox } from "./styles";

export default function Section7() {
  return (
    <Container my="4rem">
      <Grid container spacing={5}>
        <Grid item md={6} xs={12}>
          <BannerBox img="/assets/images/banners/s.jpg">
            <H4>Collector's Weekend – </H4>

            <H4 fontSize={27} fontWeight={700}>
             Limited Edition Prints Available
            </H4>

            <Divider width={60} my=".5rem" height={2} bg="dark.main" />

            <Paragraph fontSize={16}>
              Only From{" "}
              <Span fontWeight={700} color="primary.main" fontSize={21}>
                $270.00
              </Span>
            </Paragraph>
          </BannerBox>
        </Grid>

        <Grid item md={6} xs={12}>
          <BannerBox img="/assets/images/banners/look.jpg">
            <H4 color="white"> — Explore Now</H4>

            <H4 fontSize={27} fontWeight={700} color="white">
             New Arrivals: Light Series 2025
            </H4>

            <Divider width={60} my=".5rem" height={2} />

            <Paragraph fontSize={16} color="white">
              Starting at{" "}
              <Span fontWeight={700} color="primary.main" fontSize={21}>
                $185.00
              </Span>
            </Paragraph>
          </BannerBox>
        </Grid>
      </Grid>
    </Container>
  );
}
