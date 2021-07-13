import { Cart } from './Cart';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Logo />
      <Menu />
      <Cart />
    </Container>
  );
}
