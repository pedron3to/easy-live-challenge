import { FiTrash } from 'react-icons/fi';

import {
  Table,
  Thead,
  TrHead,
  ThProduct,
  ThTotal,
  Tbody,
  TrBody,
  TdImage,
  Th,
  ImageContainer,
  Td,
  TdTotal,
  Description,
  AmountContainer,
  Button,
  TotalContainer,
  Span,
} from './styles';

function Checkout() {
  return (
    <Table>
      <Thead>
        <TrHead>
          <ThProduct>Product</ThProduct>
          <Th>Price</Th>
          <Th>Amount</Th>
          <ThTotal>Total</ThTotal>
        </TrHead>
      </Thead>
      <Tbody>
        <TrBody>
          <TdImage>
            <ImageContainer>Imagem</ImageContainer>
            <Description>Description</Description>
          </TdImage>
          <Td>$ Price</Td>
          <Td>
            <AmountContainer>
              <Button type="button">+</Button>
              <div>0</div>
              <Button type="button">-</Button>
            </AmountContainer>
          </Td>
          <TdTotal>
            <TotalContainer>
              <Span>$ Total</Span>
              <Button type="button">
                <FiTrash size={20} color="#b5b5b5" />
              </Button>
            </TotalContainer>
          </TdTotal>
        </TrBody>
      </Tbody>
    </Table>
  );
}

export default Checkout;
