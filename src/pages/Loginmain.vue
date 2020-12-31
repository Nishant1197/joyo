<template>
<q-form >
          <q-input
         
          v-if="tab=='register'"
           class="q-mb-md" outlined v-model="form.name" 
          label="Name" />
          
        
           <q-input class="q-mb-md" type="email" 
           :rules="[val => !!val ||'Email is missing',isValidEmail] "
           
           outlined v-model="form.email" label="Email" />
           <q-input 
          :rules="[val => !!val ||'Password is missing',isValidPassword] "


           outlined type="password" v-model="form.password" 
          label="Password" />
          <div class="row justify-center">
              <!-- q-space gives space horizontally -->
              
            <q-btn 
           
            color="primary"
            class="q-mt-sm "
            type="submit"
             :label="tab" />
          </div>
</q-form>         

</template>
<script>
export default {
    name:'Loginmain',
    props:['tab'],
    data()
    {
        return{
      form:
          {
              name:"",
              email:"",
              password:""
          }
      

    }},
    methods:
    {
isValidEmail (val) {
    const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    return emailPattern.test(val) || 'Invalid email';
    
  

},isValidPassword(val)
{   console.log("hello")
    const passwordPattern=/(?=.*[a-z])(?=.*[A-z])(?=.*[0-9])(?=.*[!?@])[a-zA-Z0-9!?@]{8,}/
    return passwordPattern.test(val) || 'Password Should contain atleast 8 characters,1 small letter,1 capital letter,1 numeric letter and 1 special character'
}
}
}

</script>