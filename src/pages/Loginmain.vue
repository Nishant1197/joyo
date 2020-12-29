<template>
<q-form >
          <q-input
          @keyup.enter="checkmail()"
          v-if="tab=='register'"
           class="q-mb-md" outlined v-model="form.name" 
          label="Name" />
          <q-inpu
        
           <q-input class="q-mb-md" outlined v-model="form.email" 
          label="Email" />
           <q-input outlined v-model="form.password" 
          label="Password" />
          <div >
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
        checkmail(){
             if(this.form.name.length<5)
        {
            return "Invalid"
        }
        
    }
    
    
}}
</script>