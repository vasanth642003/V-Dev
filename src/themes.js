import { createGlobalStyle } from 'styled-components';
import lightbg from './dist/images/bg_white.png';
import darkbg from './dist/images/bg_dark.png';

export const light = {
  background: 'url(' + lightbg + ')',
  color: '#161838',
  titlecolor: '#60118C',
  backgroundColor: '#fefefe',
  backgroundSize: '50%',
};

export const dark = {
  background: 'url(' + darkbg + ')',
  color: '#ffffff',
  titlecolor: '#ffffff',
  backgroundColor: '#6f6f6f',
  backgroundSize: '50%',
};

export const GlobalStyles = createGlobalStyle`

.nav{
    background-color: ${(props) => props.theme.backgroundColor};
}

.nav__link{
    color: ${(props) => props.theme.color};
}

.home {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    background-size: ${(props) => props.theme.backgroundSize};
}
.home__title, .portfolio__title, .about__title, .contact__title{
        color: ${(props) => props.theme.titlecolor};
}
.portfolio {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
}

.about{
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    background-size: ${(props) => props.theme.backgroundSize};
}

.contact{
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
}

`;
