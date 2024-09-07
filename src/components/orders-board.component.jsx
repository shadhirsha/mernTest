import React from 'react';
import Card from './Card';
import Data from '../data/orders.json'

export const OrdersBoard = () => {
  //I have worked for API call method so, when status change it will reload the data on orderboard page.
  //if i didnt use filter we can achive status change process by add onClick function to button. update status in object using usesstate data
  const newOrders = Data?.filter(i => i?.status === 'New')
  const activeOrders = Data?.filter(i => i?.status === 'Active')
  const readyOrder = Data?.filter(i => i?.status === 'Ready')
  return (
    <span className='row' style={{ margin: 24 }}>
      <div className='col-4'>
        {newOrders && <Card
          type = 'New'
          data = {newOrders}
          buttonText = "Approve"
        />}
      </div>

      <div className='col-4'>
        {activeOrders && <Card
          type = 'Active'
          data = {activeOrders}
          buttonText = "Complete"
        />}
      </div>

      <div className='col-4'>
        {readyOrder && <Card
          type = 'Ready'
          data = {readyOrder}
          buttonText = "Ready"
        />}
      </div>
    </span>
  );
};
