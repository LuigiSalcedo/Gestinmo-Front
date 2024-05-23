import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cliente: null
    };
  },
  mutations: {
    setCliente(state, cliente) {
      state.cliente = cliente;
    }
  }
});

export default store;