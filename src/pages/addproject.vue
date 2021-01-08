<template>
<div>
       <q-input class="q-pl-md" bottom-slots v-model="projecttitle" placeholder="Project Title" >
        <template v-slot:before>
          <q-icon name="event" />
        </template>

      
        <template v-slot:append>
          <q-btn @click="passvalue" round dense flat icon="add" />
        </template>
      </q-input>
      <div  class="q-pt-md q-pl-md" style="max-width: 700px">
    <q-input
    placeholder="Project Description"
      v-model="projectdescription"
      filled
      type="textarea"
    />
  </div>
       
       <q-input class="q-pl-md" bottom-slots v-model="membername" placeholder="Member Name">
        <template v-slot:before>
          <q-icon name="person" />
        </template>

      
        <template v-slot:append>
          <q-btn  round dense flat icon="add" />
        </template>
      </q-input>
     <div class="q-pt-md q-pl-md">
       <label class="q-pa-sm" for="billable">Billable</label>
      <q-radio name="billable" v-model="billable" val="Yes" label="Yes" />
      <q-radio name="billable" v-model="billable" val="No" label="No" />
     
   
     </div>
</div>
  
</template>
<script>
export default {
  data() {
    return {
      shape: 'line',
      projecttitle:"",
      membername:"",
      billable:"",
      projectdescription:"",
      projectlist:{
        projectname:[],
        projectdes:[]
      },
       
          }
  },
  methods:
  {
    passvalue()
    {
      this.projectlist.projectname.push(this.projecttitle)
      this.projectlist.projectdes.push(this.projectdescription)                                     

      
    }
    }
  }
</script>
