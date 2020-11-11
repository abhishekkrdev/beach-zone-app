import styled from 'styled-components/macro';
import { setFlex, setBackground } from '../../styles';

const Hero = styled.header`
  min-height: 100vh;
  ${(props) => setBackground({ img: props.img, color: 'rgba(0,0,0,0.5)' })}
  ${setFlex()}
`;

export default Hero;
