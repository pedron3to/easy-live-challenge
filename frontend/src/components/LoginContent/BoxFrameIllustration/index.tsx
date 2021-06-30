import DecorativeImage from '../../../assets/DecorativeImage.svg';
import LoginImage from '../../../assets/login.svg';
import { ImageWrapper, Container, Header } from './styles';

export function BoxFrameIllustration() {
  return (
    <Container>
      <Header>
        <h1>Faça Login</h1>
      </Header>

      <ImageWrapper>
        <img src={DecorativeImage} alt="imagem decorativa" />
        <img src={LoginImage} alt="Imagem do Login" />
      </ImageWrapper>
    </Container>
  );
}
