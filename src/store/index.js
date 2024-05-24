import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cliente: null,
      inmueble: null
    };
  },
  mutations: {
    setCliente(state, cliente) {
      state.cliente = cliente;
    },
    setInmueble(state, inmueble){
      state.inmueble = inmueble;
    }
  }
});

export default store;