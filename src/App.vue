<template>
  <div id="app">
    <h1>
      Demo app with Suggest AutoComplete in <a href="https://vuejs.org/">Vue</a>
    </h1>
    <Suggest />
  </div>
</template>

<script>
import Suggest from './components/Suggest.vue';

export default {
  name: 'App',
  components: {
    Suggest,
  },
};
</script>

<style>
h1 {
  font-size: 20px;
  font-weight: lighter;
  border-bottom: 1px dotted lightskyblue;
  display: inline-block;
}

a {
  color: lightskyblue;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

#app {
  width: 720px;
  margin: 0 auto;
}

@media screen and (max-width: 740px) {
  #app {
    width: 100%;
    padding: 0 10px;
  }
}
</style>
