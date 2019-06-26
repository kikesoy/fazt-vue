<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/test">Test</router-link>
        </li>
        <li>
          <router-link to="/">User</router-link>
        </li>
      </ul>
    </nav>
    <h1>Hola mundo</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import Test from "./components/Test";
import Users from "./components/Users";

export default {
  name: "App",
  components: {
    Test,
    Users
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  background: #000;
  padding: 1rem;
}
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}
nav ul li {
  padding: 1rem;
}
</style>
