<template>
  <div>
    <h1>Usando computed properties</h1>
    <p>{{fullName}}</p>
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
  },
  computed: {
    fullName() {
      return this.user.firstName + " " + this.user.lastName;
    }
  }
};
</script>

<style>
</style>