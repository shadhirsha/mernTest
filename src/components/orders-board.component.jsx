import React, {useState, useEffect} from 'react';
import Card from './Card';
import Data from '../data/orders.json'

export const OrdersBoard = () => {

  const [orders, setOrders] = useState()
  const [newOrders, setNewOrders] = useState()
  const [activeOrders, setActiveOrders] = useState()
  const [readyOrders, setReadyOrders] = useState()

  useEffect(() => {
    setOrders(Data)
  },[])

  useEffect(() => {
    setNewOrders(orders?.filter(i => i?.status === 'New'))
    setActiveOrders(orders?.filter(i => i?.status === 'Active'))
    setReadyOrders(orders?.filter(i => i?.status === 'Ready'))
  },[orders])


  const updateStatus = (status) => {
    switch (status) {
      case "New":
          return ({status: 'Active'});
      case "Active":
          return ({status: 'Ready'});
      case "Ready":
          return ({status: 'Complete'});
      default:
          return({status})
    }
  }
  const orderChange = (data) => {
    const update = updateStatus(data?.status)
    setOrders(orders?.map((o) => o?.id === data?.id ? {...o, ...update} : o))
  }

  return (
    <span className='row' style={{ margin: 24 }}>
      <div className='col-4'>
        {newOrders && <Card
          type = 'New'
          data = {newOrders}
          buttonText = "Approve"
          result = {orderChange}
        />}
      </div>

      <div className='col-4'>
        {activeOrders && <Card
          type = 'Active'
          data = {activeOrders}
          buttonText = "Complete"
          result = {orderChange}
        />}
      </div>

      <div className='col-4'>
        {readyOrders && <Card
          type = 'Ready'
          data = {readyOrders}
          buttonText = "Ready"
          result = {orderChange}
        />}
      </div>
    </span>
  );
};
