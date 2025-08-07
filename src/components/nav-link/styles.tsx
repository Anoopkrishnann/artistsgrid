import styled from "styled-components";
import systemCss from "@styled-system/css";
import { color, ColorProps, compose, space, SpaceProps } from "styled-system";
import { isValidProp } from "@utils/utils";

// ==============================================================
interface StyledNavLinkProps {
  className?: string;
  isCurrentRoute?: boolean;
  [key: string]: unknown;
}
// ==============================================================

const StyledNavLink = styled.span.withConfig({
  shouldForwardProp: (prop: string) => isValidProp(prop)
})<StyledNavLinkProps & SpaceProps & ColorProps>(
  ({ isCurrentRoute, theme }) =>
    systemCss({
      position: "relative",
      transition: "all 150ms ease-in-out",
      color: "#d4af37",   
      "&:hover": {
       "&:hover": {
  color: "#d4af37 !important"
},

      },
      "& svg path": {
        fill: isCurrentRoute ? theme.colors.primary.main : "auto"
      },
      "& svg polyline, svg polygon": {
        color: isCurrentRoute ? theme.colors.primary.main : "auto"
      }
    }),
  compose(space, color)
);

export default StyledNavLink;
