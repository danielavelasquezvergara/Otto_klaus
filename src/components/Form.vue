<template>
  <div>
    <b-form-group id="input-group-2" label="Codigo:" label-for="input-2">
      <b-form-input v-model="juguete.data.codigo"></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
      <b-form-input v-model="juguete.data.nombre"></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Precio:" label-for="input-2">
      <b-form-input v-model="juguete.data.precio"></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Stock:" label-for="input-2">
      <b-form-input v-model="juguete.data.stock"></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="warning" @click="update">Editar</b-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["juguete"],
  
  methods: {
    ...mapActions(["updateJuguete"]),
    editar() {
      this.updateJuguete(juguete);
    },
  },
};
</script>
