import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            cliente: null,
            oferta: null,
            inmueble: null,
        };
    },
    mutations: {
        setCliente(state, cliente) {
            state.cliente = cliente;
        },
        setInmueble(state, inmueble) {
            state.inmueble = inmueble;
        },
        setOferta(state, oferta=Object) {
            state.oferta = oferta;
        }
    }
});

export default store;