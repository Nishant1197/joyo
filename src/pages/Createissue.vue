<template>
<div>
  <q-input class="q-pl-none" bottom-slots v-model="projectname" filled placeholder="Project Title" >
     
 
      </q-input>
    
  <div class="q-pt-md"   style="max-width: 700px">
    <q-input
      v-model="projectissue"
      filled
      type="textarea"
      placeholder="Project Issue"
    />
  </div>
   

  <div class="q-pt-md" style="max-width: 700px">
    <q-input label="Start-end" filled v-model="date" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
  <div class="q-pa-none" style="max-width: 700px">
    <q-input label="End-date" filled v-model="date" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
     
    </q-input>
  </div>
    <q-btn @click="createissue" color="primary" label="Create Issue" />
</div>
</template>

<script>
export default {
  name:"CreateIssue",
  
  
  data()
  {
    return{
      projectname: "",
      projectissue:"",
      date:"",
      issue:[]


    }
    
  },

    methods:
    {
      createissue()
      {
        this.issue.push(this.projectname,this.projectissue)
        console.log(this.issue)

      }
    }
}
</script>