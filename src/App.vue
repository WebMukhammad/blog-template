<template>
  <div id="app">
    <!-- <Navigation @set-page="page = $event"></Navigation>
    <Home v-if="page === 'Home'"></Home>
    <About v-if="page === 'About'"></About>
    <Post v-if="page === 'Post'"></Post>
    <Contact v-if="page === 'Contact'"></Contact> -->

    <!-- <Navigation @set-page="page = $event"></Navigation> -->
    <!-- <component :is="page"></component> -->
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./views/general/Navigation";
// import Home from "./views/Home";
// import About from "./views/About";
// import Post from "./views/Post";
// import Contact from "./views/Contact";

export default {
  data() {
    return {
      // page: 'Home',
      // routes: {
      //   '/': 'Home',
      //   '/about': 'About',
      //   '/post': 'Post',
      //   '/contact': 'Contact'
      // }
    };
  },
  created() {
    // console.log(this.$route.params.postId)
    //  const route = this.routes[window.location.pathname];
    //  route ? this.page = route : this.page = 'About'
  },
  components: {
    Navigation
    //   Home,
    //   About,
    //   Post,
    //   Contact
  }
};
</script>
