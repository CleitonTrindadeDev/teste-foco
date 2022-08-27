<template>
  <nav>
  <NavBar/>
  <MenuComponent/>
  </nav>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import MenuComponent from './components/MenuComponent.vue'
export default {
  components: {
    NavBar,
    MenuComponent
  }
}
</script>

<style>

</style>
