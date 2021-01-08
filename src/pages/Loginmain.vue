<template>
  <q-form @submit="submitForm">
    

    <q-input
      class="q-mb-md"
      type="email"
      :rules="[val => !!val || 'Email is missing', isValidEmail]"
      outlined
      v-model="details.email"
      label="Email"
    />
    <q-input
      :rules="[val => !!val || 'Password is missing', isValidPassword]"
      outlined
      type="password"
      v-model="details.password"
      label="Password"
    />
  
    <div class="row justify-center">
      <!-- q-space gives space horizontally -->

      <q-btn color="primary" class="q-mt-sm " type="submit" label="Login" />
    </div>
  </q-form>
</template>
<script>
export default {
  name: "Loginmain",
  props: ["tab"],
  data() {
    return {
      details:{
    
      email: "",
      password: "",
     
      },
      formData:[],
     
    }
  },

  methods: {
    submitForm(){
     this.formData.push(this.details);
     this.details={}

    }
    ,
    isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    },
    isValidPassword(val) {
      const passwordPattern = /(?=.*[a-z])(?=.*[A-z])(?=.*[0-9])(?=.*[!?@])[a-zA-Z0-9!?@]{8,}/;
      return (
        passwordPattern.test(val) ||
        "Password Should contain atleast 8 characters,1 small letter,1 capital letter,1 numeric letter and 1 special character"
      );
    }
  }
};
</script>
