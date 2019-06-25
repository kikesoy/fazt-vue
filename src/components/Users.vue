<<template>
  <div class="users">
    <h1>User component</h1>
    <ul>
      <li v-for="user in users">
        {{user.name}} <a href="mailto:#">{{user.email}}</a>
      </li>
    </ul>
    <form v-on:submit.prevent="addUser">
      <label>
        Nombre:
        <input type="text" v-model="newUser.name">
      </label>
      <label>
        Email:
        <input type="email" v-model="newUser.email">
      </label>
      <button type="submit">
              Add User
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [
        {
          name: "Enrique",
          email: "enrique@correo.com",
          contacted: false
        },
        {
          name: "Ixsha",
          email: "ixsha@correo.com",
          contacted: false
        },
        {
          name: "Bianca",
          email: "bianca@correo.com",
          contacted: true
        }
      ],
      newUser: {}
    };
  },
  methods: {
    addUser() {
      console.log("agregando usuario");
    }
  }
};
</script>
<style>
.users {
  background: #333;
  color: #ccc;
  padding: 1rem;
}
li {
  padding: 0.5rem;
}
a {
  transition: 0.3s ease all;
  color: #333;
  background: #ccc;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 0.25rem;
}
a:hover {
  color: #ccc;
  background: transparent;
}
</style>