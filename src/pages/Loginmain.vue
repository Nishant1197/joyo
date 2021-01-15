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
      <q-option-group
    
      v-model="details.type"
      :options="options"
      color="primary"
      inline
    />
    
    <div class="row justify-center">
      <!-- q-space gives space horizontally -->
    <!-- <li v-for="item in emplist" :key="item.email">
      {{item.email}}{{item.password}}{{item.role}}
    </li> -->
      <q-btn color="primary"  class="q-mt-sm " type="submit" label="Login" />
      
    </div>
  </q-form>
</template>
<script>
import { mapState } from 'vuex'
export default {
  
  name: "Loginmain",
  props: ["tab"],
  data() {
    return {
     details:{
      email: "",
      password: "",
      type:""
     
      },
      formData:[],
      
     
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
 computed:{
    ...mapState('emp',['employeeList','currentUserDetails','check']),
   
  },

  methods: {
     
  
    submitForm(){
        console.log("from"+this.details.email)
      this.$store.commit('emp/updatedetails',this.details);
     
      let i=0,temp=0;
      for(i=0;i<this.employeeList.length;i++)
      {

     
      //  console.log(this.employeeList[i].email)
      //  console.log(this.currentUserDetails.password)
      //  console.log(this.employeeList[i].password)
      //  console.log(this.currentUserDetails.type)
      //  console.log(this.employeeList[i].type)
     

      if(this.currentUserDetails.email==this.employeeList[i].email )
        { console.log(this.currentUserDetails)
          window.localStorage.setItem("check",1);
          //this.$store.commit('emp/checkCondition',this.check);
          
          // console.log(this.check)
          
        //  window.location.href=`#/${this.employeeList[i].type}`
        
        this.$router.push(`${this.employeeList[i].type}`)
       
          break
        }

          
      }
       this.details={}
    
    },
    //  this.formData.push(this.details);
    // 

    
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
  }
</script>
