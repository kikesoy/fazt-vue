<<template>
  <div class="users">
    
    <h1>User component</h1>
    <hr>
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
    <hr>
    <div v-if="!users.length">
      <h3>No hay usuarios registrados</h3>
    </div>
    <ul v-else>
      <li v-for="user in users">
      {{user.name}} <a href="mailto:#">{{user.email}}</a> <button v-on:click="deleteUser(user)">X</button>
      </li>     
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
      newUser: {}
    };
  },
  methods: {
    addUser() {
      this.users.push(this.newUser);
      this.newUser = {};
    },
    deleteUser(user) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => (this.users = res.body));
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
form {
  padding: 1rem;
}
</style>