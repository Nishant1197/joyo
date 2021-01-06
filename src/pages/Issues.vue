<template>
   <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="project" label="Projects" />
            
         
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="project">
            <div class="text-h5">Hotel Management</div>
          <text-h5>ISSUE:</text-h5>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

        
        
        </q-tab-panels>
      </q-card>
    
</template>
<script>
export default {
  data () {
    return {
      tab: 'project'
    }
  }
}
</script>