import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }
  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        console.log(res);
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }

        this.setState({ loading: false, orders: fetchedOrders });
      });
  }
  render() {
    const orders = this.state.orders.map(order => (
      <Order
        key={order.id}
        order={order}
      />
    ));
    return (
      <div>
        {orders}
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios);