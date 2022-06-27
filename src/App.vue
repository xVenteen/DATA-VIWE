<template>
  <Home></Home>
</template>

<script>
import Home from "./view/Home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}
body::-webkit-scrollbar {
  display: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
body {
  background: url("./assets/bg.jpg") center top;
  background-size: cover;
}
</style>
