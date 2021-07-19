/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { connect } from 'react-redux';

import {
  adjustItemQty,
  removeFromCart,
} from '../../redux/actions/productActions';
import {
  TrBody,
  TdImage,
  ImageContainer,
  Td,
  TdTotal,
  Description,
  AmountContainer,
  Button,
  TotalContainer,
  Span,
  Input,
} from './styles';

function ProductRow({ item, adjustQty, removeFromCart }) {
  const [input, setInput] = useState(item.qty);
  const [total, setTotal] = useState(0);

  function increment() {
    setInput(prev => prev + 1);
    adjustQty(item.id, input);
  }

  function decrement() {
    setInput(prev => prev - 1);
    adjustQty(item.id, input);
  }

  const onChangeHandler = e => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  useEffect(() => {
    let items = 0;

    items += item.qty;
    setTotal(items);
  }, [total, setTotal, input, setInput]);

  return (
    <TrBody key={item.id}>
      <TdImage>
        <ImageContainer
          style={{
            backgroundImage: `url(/${item.img})`,
          }}
        />

        <Description>{item.title}</Description>
      </TdImage>
      <Td>${item.price}</Td>
      <Td>
        <AmountContainer>
          <Button type="button" onClick={decrement}>
            -
          </Button>
          <Input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
          <Button type="button" onClick={increment}>
            +
          </Button>
        </AmountContainer>
      </Td>
      <TdTotal>
        <TotalContainer>
          <Span>${(total * item.price).toFixed(2)}</Span>
          <Button type="button" onClick={() => removeFromCart(item.id)}>
            <FiTrash size={20} color="#b5b5b5" />
          </Button>
        </TotalContainer>
      </TdTotal>
    </TrBody>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: id => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProductRow);
