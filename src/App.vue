<template>
  <div id="app">
      <Header/>
      <router-view :key="$route.path"/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
    components: {
        Header
    },
}
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap');

* {
    font-family: 'Newsreader', serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>