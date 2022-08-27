<template>
   <aside class="sidebar d-flex justify-content-center align-items-center" :class="{'show':expanded}">
            <nav>
                <ul class="menu">
                <i class="fa fa-solid fa-bars text-white fa-lg px-4 " v-show="!expanded"></i>
                    <li class="menu-item px-5 py-3  pt-5 d-flex">
                        <i class="fa fa-solid fa-home p-1 text-white fa-lg " v-show="expanded"></i>
                        <router-link to="/">
                        <a href="" class="menu-link " v-show="expanded">Dashboard</a>
                        </router-link>
                    </li>
                    <li class="menu-item px-5 py-3 d-flex">
                     <i class="fa fa-solid fa-plus p-1 text-white fa-lg" v-show="expanded"></i>
                     <router-link to="/formulario">
                     <a href="" class="menu-link" v-show="expanded">Nova Reserva</a>
                     </router-link>
                    </li>
                    <li class="menu-item px-5 py-3 d-flex">
                        <i class="fa fa-solid fa-gear p-1 text-white fa-lg" v-show="expanded"></i>
                        <a href="" class="menu-link" v-show="expanded">Configurações</a>
                    </li>
                </ul>
          </nav>
   </aside>
</template>

<script>
export default {
  data () {
    return {
      expanded: false
    }
  },
  mounted () {
    const context = this

    document.querySelector('.sidebar').addEventListener('mouseover', function () { context.openMenu() })
    document.querySelector('.sidebar').addEventListener('mouseout', function () { context.closeMenu() })
  },
  methods: {
    openMenu () {
      this.expanded = true
    },
    closeMenu () {
      this.expanded = false
    }
  }
}
</script>

<style scoped>
.sidebar{
    width: 40px;
    height: 100vh;
    background-color: #565656!important;
    position: fixed;
    top: 0;
    transition: all 0.3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.336);
    z-index: 1;
}
.sidebar.show {
    width: 230px;
}
li{
    list-style-type: none;
    font-size: 1.3rem;
}
a{
    text-decoration: none;
    color: white;
}
.show-menu .sidebar{
    left: 0;
}

.menu{
    margin-top:100px;
}
nav{
    height: 100%;
}
</style>
