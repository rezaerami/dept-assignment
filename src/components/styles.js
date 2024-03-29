import { css, createGlobalStyle } from 'styled-components';
import { color } from 'helpers';
// eslint-disable-next-line import/no-unresolved
import sanitize from '!!raw-loader!sanitize.css';

import 'resources/styles/teko.css';

const additional = css`
  html {
    text-align: left;
    direction: ltr;
    font-size: 62.5%;
    font-family: ${(props) => props.theme.defaultFont}, Arial;
    scroll-behavior: smooth;
    * {
      font-family: inherit;
      outline: none;
      text-decoration: none;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

/* eslint-disable prettier/prettier */
const colorful = css`
  ${props => Object.keys(props.theme.colors).map(item => Object.keys(props.theme.colors[item]).map(
      shade => `
          .text-${item}-${shade}{
            color: ${color(item, shade)(props)};
          }
          .bg-${item}-${shade}{
            background-color: ${color(item, shade)(props)};
          }
          .fill-${item}-${shade}{
            fill: ${color(item, shade)(props)} !important;
          }
        `,
      ),
  )}
  .bg-none {
    background: none !important;
  }
`;
/* eslint-enable prettier/prettier */

const GlobalStyles = createGlobalStyle`
  ${sanitize}
  ${additional}
  ${colorful}
`;

export default GlobalStyles;
