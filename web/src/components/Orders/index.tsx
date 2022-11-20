import { useEffect, useState } from 'react';
import socketIo from 'socket.io-client';

import { OrdersBoard } from '../OrdersBoard';

import { api } from '../../utils/api';
import { Order } from '../../types/Order';

import { Container } from './styles';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo('http://192.168.0.112:3001', {
      transports: ['websocket'],
    });

    const getNewOrder = (order: Order) => {
      setOrders((prevState) => prevState.concat(order));
    };

    socket.on('orders@new', getNewOrder);

    return () => {
      socket.off('orders@new', getNewOrder);
    };
  }, []);

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => setOrders(data));
  }, []);

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const done = orders.filter((order) => order.status === 'DONE');

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map((order) =>
      order._id === orderId
        ? { ...order, status }
        : order
    ));
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em produção"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Container>
  );
}
