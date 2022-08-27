<template>
<div class="container d-flex justify-content-between mb-4 p-3" id="content">
  <form clas="border" action="">
    <div class="row px-4">
      <div class="col-6">
        <h5 class="mt-2">Todas as Acomodações</h5>
      </div>
      <div class="col-6">
        <input class="form-control " type="search" placeholder="Pesquisar" aria-label="Search">
      </div>
    </div>
  </form>
  <button type="button" class="btn btn-primary h-25 btn-lg"><router-link to="/formulario"><i class="fa fa-solid fa-plus text-white m-2"></i><span class="text-white">Fazer reserva</span></router-link></button>
</div>
<ReservasComponent/>
</template>

<script>
import ReservasComponent from '@/components/ReservasComponent.vue'
export default {
  name: 'HomeView',
  components: {
    ReservasComponent
  },
  created () {
    this.$store.dispatch('getDados')
  }
}
</script>

<style scoped>
#content{
  margin-top:150px !important;
}
form{
  border-radius: 1rem;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.26);
}
button{
  background-color: #5582eb !important;
  border:none !important;
  text-decoration: none !important;
}
</style>
