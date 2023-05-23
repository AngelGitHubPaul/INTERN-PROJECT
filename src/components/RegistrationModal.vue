<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Register Account</h2>
        <br>
        <form @submit.prevent="submitForm">
          <label for="username">Email:</label>
          <input type="text" id="username" v-model="username">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password">
          <label for="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" v-model="confirmPassword">
          <button type="submit">Register</button>
        </form>
        <button class="close-button" @click="$emit('close')"> Close </button>
      </div>
    </div>
</template>
  
  <script>
    export default {
        data() {
        return {
            username: '',
            password: ''
        };
        },
        methods: {
        submitForm() {
            // Add your registration logic here
            // This method will be called when the form is submitted
            // You can access the entered username and password via this.username and this.password
            // Implement the registration functionality based on your application's requirements
        }
        }
    };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
  
  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 20px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  input, button {
    display: block;
    margin-bottom: 1rem;
  }

.modal-content input[type="text"],
.modal-content input[type="password"] {
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
}





  </style>
  