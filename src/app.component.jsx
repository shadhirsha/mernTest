import React from 'react';
import './app.styles.css';
import { OrdersBoard } from './components/orders-board.component';

export const App = () => {
  return (
    <div id='page'>
      <div className='sidebar' />
      <main>
        <div className='topbar'>
          <span>Orders</span>
        </div>
        <OrdersBoard />
      </main>
    </div>
  );
};
