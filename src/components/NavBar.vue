<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light py-2 px-4 fixed-top">
      <img src="../assets/logo.png" alt="">
      <div class="collapse navbar-collapse  d-flex justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
         <i class="fa fa-regular fa-question p-2 mt-1"></i>
          </li>
          <li class="nav-item">
            <i class="fa fa-regular fa-envelope p-2 mt-1"></i>
          </li>
          <li class="nav-item">
            <i class="fa fa-solid fa-gear p-2 mt-1"></i>
          </li>
          <span class="p-2">Admin</span>
          <li class="dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
              PF
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
</nav>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style scoped>

</style>>
