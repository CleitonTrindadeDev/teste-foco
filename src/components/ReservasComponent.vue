<template>
  <div class="container table">
       <div>
       <div class="row text-center size p-2 mb-2" id="header">
            <div class="col-2">
              Acomodações
            </div>
            <div class="col-2">
              Check-in
            </div>
            <div class="col-2">
               Check-out
            </div>
            <div class="col-2">
               Adultos
            </div>
            <div class="col-2">
               Crianças
            </div>
            <div class="col-2">
               Ações
            </div>
        </div>
       <ReservaComponent
       v-for="dado in $store.state.dados"
       :key="dado.id"
       :dado="dado"
       />
       </div>
  </div>
</template>

<script>
import ReservaComponent from './ReservaComponent.vue'
export default {
  components: {
    ReservaComponent
  },
  data () {
  },
  methods: {

  }
}
</script>

<style>
.table{
  border:1px solid rgba(0, 0, 0, 0.116);
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.26);
}

#header{
  background-color: #dde4f7;
  font-size:100%;
  font-weight: bolder;
}
</style>
