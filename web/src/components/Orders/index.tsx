import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';

import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6373eb53515b5ad89b4c3f97',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668540405276-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6373eb53515b5ad89b4c3f98'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668540870965-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6373eb53515b5ad89b4c3f99'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕑" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👩‍🍳" title="Em produção" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
