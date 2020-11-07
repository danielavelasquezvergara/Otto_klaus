<template>
  <div class="home">
    <div class="w-50 m-auto">
      <b-form-group id="input-group-2" label="Codigo:" label-for="input-2">
        <b-form-input v-model="codigo"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input v-model="nombre"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Precio:" label-for="input-2">
        <b-form-input v-model="precio"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Stock:" label-for="input-2">
        <b-form-input v-model="stock"></b-form-input>
      </b-form-group>
    </div>
    <b-button type="submit" variant="info" @click="agregar">Agregar</b-button>


    <table class="table">
      <thead>
        <th>Código</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        <tr v-for="(juguete,i) in juguetes" :key="i">
          <td>{{juguete.data.codigo}}</td>
          <td>{{juguete.data.nombre}}</td>
          <td>{{juguete.data.stock}}</td>
          <td>{{juguete.data.precio}}</td>
          <td>
            <button 
              v-b-modal.modal-1 
              @click="editar(juguete.id)" 
              class="btn btn-warning"
              >Editar</button>
            <button @click="eliminar(juguete.id)" class="btn btn-danger">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <b-modal id="modal-1" title="BootstrapVue">
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

    <b-button type="submit" variant="warning" @click="update">Actualizar</b-button>
    
  </b-modal>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";
export default {
  name: 'Home',
  data(){
    return {
      idUpdating: "",
      codigo: "",
      nombre: "",
      precio: 0,
      stock: 0,
      juguete: {
        data: {
          codigo: "",
          nombre: "",
          stock: 0,
          precio: 0
        }
      }
    }
  },
  computed: {
    ...mapState(['juguetes']),
    ...mapGetters(['getJugueteUpdating'])
  },
  methods: {
    ...mapActions(['agregarJuguete', 'updateJuguete', 'deleteJuguete']),
    agregar() {
      const juguete = {
        codigo: this.codigo,
        nombre: this.nombre,
        precio: this.precio,
        stock: this.stock
      };
      this.agregarJuguete(juguete);
    },

    editar(id) { 
    const jugueteUpdating = JSON.parse(JSON.stringify(this.getJugueteUpdating(id)));
    this.juguete = jugueteUpdating;
  },

    update() {
      
      this.updateJuguete(this.juguete)
      this.$bvModal.hide("modal-1")
    },

    eliminar(id) {
      this.deleteJuguete(id);
    }
  }
};
</script>
