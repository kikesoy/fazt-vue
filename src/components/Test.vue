<template>
  <div>
    <h1>Uso de métodos</h1>
    <button type="button" v-on:click="saludar(user.firstName)">Click Me</button>
    <hr>
    <input type="text" v-model="user.firstName">
    <hr>
    <input type="text" v-on:keyup="typing">
    <hr>
    <input type="text" v-on:keyup.enter="typingEnter">
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hola Vue.js",
      user: {
        firstName: "Enrique",
        lastName: "Soto",
        idNumber: 12345678,
        country: "Venezuela",
        sex: "Male",
        birthDay: {
          bYear: 1974,
          bMonth: "august",
          bDay: 2
        }
      },
      showName: true,
      tasks: [
        { title: "Comer" },
        { title: "Dormir" },
        { title: "Asear" },
        { title: "Trabajar" },
        { title: "Ejercitar" }
      ]
    };
  },
  methods: {
    saludar(name) {
      alert("Hola " + name);
    },
    typing(e) {
      console.log(e.target.value);
    },
    typingEnter(e) {
      alert("Presionó la tecla Enter");
    }
  }
};
</script>

<style>
</style>