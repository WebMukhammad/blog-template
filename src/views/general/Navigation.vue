<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="#">Start Bootstrap</a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <!-- <a class="nav-link" href="#" @click="$emit('set-page', 'Home')">Home</a> -->
            <router-link class="nav-link" :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#" @click="$emit('set-page', 'About')">About</a> -->
            <router-link class="nav-link" :to="{ name: 'about' }" tag="button"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#" @click="$emit('set-page', 'Post')">Sample Post</a> -->
            <router-link class="nav-link" :to="{ name: 'post' }"
              >Post</router-link
            >
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#" @click="$emit('set-page', 'Contact')">Contact</a> -->
            <router-link class="nav-link" :to="{ name: 'contact' }"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>

<script>
export default {};
</script>
