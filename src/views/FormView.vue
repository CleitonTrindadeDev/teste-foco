<template>

<div class="container border p-4 my-5 bg-white">

<form  action="" @submit.stop.prevent="addDado">
    <div class="row was-validated">

        <h2 class="mb-4">Dados da reserva</h2>

        <div class="col-4">
          <label for="">Acomodação</label>
          <select class="form-control" v-model="acomodacao" required>
            <option selected disabled value="">Selecione a acomodação</option>
            <option>Quarto simples</option>
            <option>Quarto Duplo</option>
          </select>
        </div>
        <div class="col-2">
          <label for="">Check-in</label>
          <input class="form-control" type="date" placeholder="Default input" v-model="checkin" required>
        </div>
        <div class="col-2">
          <label for="">Check-out</label>
          <input class="form-control" type="date" placeholder="Default input" v-model="checkout" required>
        </div>
        <div class="col-2">
          <label for="">Hospedes(Adultos)</label>
          <input class="form-control" type="number" placeholder="Nº Adultos" min="1" max="2" v-model="hospedes" required>
        </div>
        <div class="col-2">
          <label for="">Crianças</label>
          <input class="form-control" type="number" min="0" max="2" placeholder="Nº Crianças" v-model="criancas" required>
        </div>

    </div>

    <div class="row">

        <h2 class="mb-4">Dados do responsável</h2>

        <div class="col-4">
         <label for="">Nome</label>
         <input class="form-control" type="text" placeholder="Digite seu nome">
        </div>
        <div class="col-4">
          <label for="">Sobrenome</label>
          <input class="form-control" type="text" placeholder="Digite seu sobrenome">
        </div>
        <div class="col-4">
         <label for="">CPF</label>
         <input class="form-control" type="text" placeholder="Digite seu CPF" id="cpf"  maxlength="14">
        </div>

        <div class="col-3">
         <label for="">Data de Nascimento</label>
         <input class="form-control" type="text" placeholder="09/10/1999">
        </div>
        <div class="col-3">
          <label for="">Telefone</label>
          <input class="form-control" type="text" placeholder="Digite seu telefone" id="tel" maxlength="13">
        </div>
        <div class="col-3">
         <label for="">Celular</label>
         <input class="form-control" type="text" placeholder="Digite seu celular" id="cel" maxlength="14">
        </div>
        <div class="col-3">
         <label for="">E-mail</label>
         <input class="form-control" type="text" placeholder="Digite seu e-mail">
        </div>

    </div>

     <div class="row">

        <h2 class="mb-4">Endereço</h2>

        <div class="col-4">
         <label for="">CEP</label>
         <input class="form-control" type="text" placeholder="00000-000">
        </div>
        <div class="col-4">
          <label for="">Cidade</label>
          <input class="form-control" type="text" placeholder="Qual cidade você reside?">
        </div>
        <div class="col-4">
         <label for="">Estado</label>
         <input class="form-control" type="text" placeholder="Qual cidade você reside?">
        </div>

        <div class="col-3">
         <label for="">Rua</label>
         <input class="form-control" type="text" placeholder="">
        </div>
        <div class="col-3">
          <label for="">Número</label>
          <input class="form-control" type="text" placeholder="">
        </div>
        <div class="col-3">
         <label for="">Bairro</label>
         <input class="form-control" type="text" placeholder="">
        </div>
        <div class="col-3">
         <label for="">Complemento</label>
         <input class="form-control" type="text" placeholder="">
        </div>

        <div class="col d-flex justify-content-end">
         <button type="submit" class="btn btn-primary">Fazer reserva</button>
        </div>

       </div>
      <div>
    </div>
</form>

</div>

</template>

<script>

export default {
  data () {
    return {
      acomodacao: '',
      checkin: '',
      checkout: '',
      hospedes: '',
      criancas: ''
    }
  },
  components: {

  },
  mounted () {
    // Mascara Celular
    const input = document.getElementById('cel')

    input.addEventListener('keypress', () => {
      const inputLength = input.value.length

      if (inputLength === 0) {
        input.value += '('
      } else if (inputLength === 3) {
        input.value += ')'
      } else if (inputLength === 9) {
        input.value += '-'
      }
    })
    // Mascara telefone
    const tel = document.getElementById('tel')

    tel.addEventListener('keypress', () => {
      const inputLength = tel.value.length

      if (inputLength === 0) {
        tel.value += '('
      } else if (inputLength === 3) {
        tel.value += ')'
      } else if (inputLength === 8) {
        tel.value += '-'
      }
    })
    // mascara cpf
    const cpf = document.getElementById('cpf')
    cpf.addEventListener('keypress', () => {
      const inputLength = cpf.value.length

      if (inputLength === 3 || inputLength === 7) {
        cpf.value += '.'
      } else if (inputLength === 11) {
        cpf.value += '-'
      }
    })
  },
  methods: {
    addDado () {
      this.$store.dispatch('addDado', {
        acomodacao: this.acomodacao,
        checkin: this.checkin,
        checkout: this.checkout,
        hospedes: this.hospedes,
        criancas: this.criancas
      }).finally(() => {
        this.acomodacao = ''
        this.checkin = ''
        this.checkout = ''
        this.hospedes = ''
        this.criancas = ''
      })
    }
  }
}
</script>

<style scoped>
.container{
  margin-top: 120px !important;
  border-radius: 1rem;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.26);
}

input{
  margin-bottom: 1.5rem;
}

button{
  background-color: #5582eb !important;
}
</style>
