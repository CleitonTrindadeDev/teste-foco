<template>
<div>
    <table class="table ">
        <tbody class="text-center border" >
            <tr class="row">
            <td class="col-2"><span>{{dado.acomodacao}}</span></td>
            <td class="col-2"><span>{{dado.checkin}}</span></td>
            <td class="col-2"><span>{{dado.checkout}}</span></td>
            <td class="col-2"><span>{{dado.hospedes}}</span></td>
            <td class="col-2"><span>{{dado.criancas}}</span></td>
            <td class="col-2">

            <button type="button" class="btn btn-dark m-1 editar"  data-target="#editar" @click="$emit('editarReserva', dado)"><i class="fa fa-solid fa-pencil"></i></button>
            <button type="button" class="btn btn-dark excluir" data-toggle="modal" data-target="#excluir"><i class="fa fa-solid fa-trash"></i></button>
            </td>
            </tr>
        </tbody>
    </table>
      <!-- Modal editar-->
      <div class="modal fade" id="editar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    <!-- Modal excluir-->
          <div class="modal fade" id="excluir" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <h2>Tem certeza que deseja excluir a reserva?</h2>
                  <span>Essa ação não poderá ser revertida</span>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                  <button type="button" class="btn btn-primary excluir" data-dismiss="modal" @click="excluirReserva">Excluir</button>
                </div>
              </div>
            </div>
          </div>
</div>
</template>
<script>
export default {
  props: {
    dado: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    excluirReserva () {
      this.$store.dispatch('deleteDado', this.dado.id)
    },

    editarReserva ($evt) {
      const newCheckin = $evt.target.value
      const newCheckout = $evt.target.value
      const newHospedes = $evt.target.value
      const newCriancas = $evt.target.value
      const payload = {
        id: this.dado.id,
        data: {
          checkin: newCheckin,
          checkout: newCheckout,
          hospedes: newHospedes,
          criancas: newCriancas

        }
      }
      this.$store.dispatch('editarDado', payload)
    }
  }
}
</script>
<style scoped>
.editar{
  border:none;
  background-color: #68cdc7;
  color:black;
}
.excluir{
  border:none;
  background-color: #ec8853;
  color:black;
}
</style>>
