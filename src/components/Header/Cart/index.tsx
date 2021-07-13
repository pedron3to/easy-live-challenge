import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export function Cart() {
  return (
    <Link to="/checkout">
      <GiShoppingCart size={24} color="#838383" />
    </Link>
  );
}
