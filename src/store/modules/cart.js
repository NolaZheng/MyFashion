import globalAxios from 'axios'

const state = {
  orderList:[],
}

// getters
const getters = {
  itemCount(state) {
      return state.orderList.length
  },
  cartItems(state) {
      return state.orderList
  },
  allPrice(state) {
    const priceList = (state.orderList.map(item => Object.values(item)[4])).reduce(
        ( acc, cur ) => acc + cur,0)
    return priceList
  }
}

// mutations
const mutations = {
  addItem(state,{name,img,price,totalPrice,quantity}) {
    const record = state.orderList.find(order => order.name === name)
    if (record) {
        record.quantity+=quantity
        record.totalPrice+=price
        // record.price+=price
    } else {
        state.orderList.push({name,img,price,totalPrice,quantity})
    }
    console.log(state.orderList)
  },
  reduceItem(state,{name,price}) {
    const record = state.orderList.find(order => order.name === name)
    record.quantity-=1
    record.totalPrice-=price
  },
  deleteItem(state,name){
    const record = state.orderList.find(order => order.name === name);
    state.orderList.splice(state.orderList.indexOf(record), 1);
    console.log(state.orderList)
  },
  storeCart (state, orders) {
    state.orderList = orders
  },
}

// actions
const actions = {
    buyItem: ({commit,state}, order)=> {
        commit('addItem', order)
        globalAxios.put('/cart.json',state.orderList)
        .then(res => console.log(res))
        .catch((err) => console.log(err))
    },
    minusItem: ({commit}, {name,price})=> {
        commit('reduceItem', {name,price})
        globalAxios.put('/cart.json',state.orderList)
        .then(res => console.log(res))
        .catch((err) => console.log(err))
    },
    removeItem: ({commit,state}, order)=> {
        // const record = state.orderList.find(el => el.name === order)
        // const key = state.orderList.indexOf(record)
        // const cors = require('cors')({origin: true})
        // const item = state.orderList[key]
        // console.log(item)
        commit('deleteItem', order)
        globalAxios.put('/cart.json',state.orderList)
        .then(res => console.log(res))
        .catch((err) => console.log(err))
    },
    fetchItem: ({commit,state})=> {
        globalAxios.get('/cart.json')
        .then(res => {
        // console.log(res)
        const data = res.data
        const orders = []
        for (let key in data) {
          const order = data[key]
          orders.push(order)
        }
        // console.log(orders)
        commit('storeCart', orders) 
        console.log(state.orderList)
      })
      .catch(error => console.log(error))
    }

}

export default {
  state,
  getters,
  actions,
  mutations
}