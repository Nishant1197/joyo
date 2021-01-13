<template>
    
 <q-form   @submit.prevent="submitForm">
    <q-input
     
      class="q-mb-md"
      outlined
      v-model="details.name"
      label="Name"
    />

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
    <q-option-group
    
      v-model="details.type"
      :options="options"
      color="primary"
      inline
    />
    
    <div class="row justify-center">
      <!-- q-space gives space horizontally -->

      <q-btn 
      color="primary" class="q-mt-sm " type="submit" label="Register" />
    </div>
  </q-form>
</template>
<script>
export default {
  name: "Register",
 components:
 {
  //  "admin":require("pages/Dashboard")
 },
  data() {
    return {
      details:{
      name: "",
      email: "",
      password: "",
      type: "",
      },
    
      options: [
        {
          label: "Admin",
          value: "admin"
        },
        {
          label: "Project Manager",
          value: "projectmanager"
        },
        {
          label: "Project Lead",
          value: "projectlead"
        },

        {
          label: "Tech team",
          value: "techteam"
        },
        {
          label: "Intern",
          value: "intern"
        }
      ],
      

    }
  },
  

  methods: {
    submitForm(){
      
      this.$store.commit('emp/addemp',this.details);
        console.log("Detail submitted")
        alert("You are resgistered")
       
    //   if(this.details.type=="admin")
    //  window.location.href="#/admin"
    //  else if(this.details.type=="projectmanager")
    //  window.location.href="#/projectmanager"
    //   else if(this.details.type=="projectlead")
    //   window.location.href="#/projectlead"
    //   else if(this.details.type=="techteam")
    //   window.location.href=("#/techteam")
    //   else
    //   window.location.href=("#/intern")
      // this.details.email=""
      //   this.details.name=""
      //   this.details.password=""
      //   this.details.type=""
     
    
   
      
         this.details={}
    },
    
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