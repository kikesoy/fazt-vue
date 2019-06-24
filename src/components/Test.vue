<template>
  <div>
    <h2>Componente test {{title}}</h2>
    <p>{{ user.birthDay.bDay }}</p>
    <hr>
    <div v-if="showName">{{user.firstName}}</div>
    <div v-else>El usuario no tiene nombre</div>
    <hr>
    <div>Tarea del momento: {{tasks[0].title}}</div>
    <hr>
    <ul>
      <li v-for="task in tasks">{{task.title}}</li>
    </ul>
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
  }
};
</script>

<style>
</style>