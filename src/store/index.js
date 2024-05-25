import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cliente: null,
      inmueble: null,
      oferta: null
    };
  },
  mutations: {
    setCliente(state, cliente) {
      state.cliente = cliente;
    },
    setInmueble(state, inmueble){
      state.inmueble = inmueble;
    },
    setOferta(state, oferta){
      state.oferta = oferta;
    }
  }
});

export default store;