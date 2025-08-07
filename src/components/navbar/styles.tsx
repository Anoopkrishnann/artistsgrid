import { getTheme } from "@utils/utils";
import styled from "styled-components";

const StyledNavbar = styled.div`
  position: relative;
  height: 60px;
 background: #000000; /* black background */
 box-shadow: 0 2px 4px rgba(255, 255, 255, 0.05); // light white shadow on black


  .nav-link {
    font-size: 14px;
    /* margin-right: 32px; */
    cursor: pointer;
    &:hover {
color:;${getTheme("colors.primary.main")};


    }
  }
  .nav-link:last-child {
    margin-right: 0px;
  }

  .root-child {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 5;
  }
  .root:hover {
    .root-child {
      display: block;
    }
  }

  .child {
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 5;
  }
  .parent:hover > .child {
    display: block;
  }

  .dropdown-icon {
    color: ${getTheme("colors.text.muted")};
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export default StyledNavbar;
