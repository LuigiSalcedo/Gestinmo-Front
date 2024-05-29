<template>
    <div class="flex-column-bgblue-pd30">
        <div class="flex-p10-g20">
            <ventana-oferta :oferta="offer" v-if="offer != null"/>
        </div>
        <button :onClick="abrirHistorial">Ver historial de ofertas</button>
        <br />
        <div v-if="showHistory" class="flex-row-30gap">
            <div v-for="offerH in offersHistory" :key="offerH">
                <ventana-oferta :oferta="offerH" />
            </div>
        </div>
    </div>
</template>
<script>
import VentanaOferta from '@/components/VentanaOferta.vue';
import api from '@/services/api';
import { getToken } from '@/util/auth';
import "vue-toastification/dist/index.css";

export default {
    name: "InmuebleView",
    mounted() {
        this.asignarToken()
        this.getOffers()
    },
    components: {
        VentanaOferta
    },
    props: {
        propertyId: String
    },
    methods: {
        limpiar() {
            const cliente = null;
            this.$store.commit('setCliente', cliente);
        },
        asignarToken() {
            this.token = getToken();
        },
        async getOffers() {
            const response = await api.get("/api/private/offers/search/property/" + this.propertyId, this.token)
            if (response.success) {
                this.offer = response.data
            }
        },
        async abrirHistorial() {
            this.showHistory = !this.showHistory;
            if (this.showHistory) {
                await this.getOffersHistory();
            }
        },
        async getOffersHistory() {
            const response = await api.get("/api/private/offers/search/property/" + this.propertyId + "/history", this.token);
            if (response.success) {
                this.offersHistory = response.data
            }
        }
    },
    data() {
        return {
            offer: null,
            offersHistory: [],
            showHistory: false,
        }
    }
}
</script>
