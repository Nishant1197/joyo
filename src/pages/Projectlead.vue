<template>
   <div class="q-pa-md">
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
         
         <q-tab name="projectlist" label="PROJECT LIST" />
         <q-tab name="createissue" label="CREATE ISSUE" />
            <q-tab name="addcomment" label="ADD COMMENT" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
         
          <q-tab-panel name="projectlist">
            <project-list />
          </q-tab-panel>

          <q-tab-panel name="createissue">
           <create-issue/>
          </q-tab-panel>

          <q-tab-panel name="addcomment">
           <add-comment/>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      </div>


</template>
<script>
import Createissue from './Createissue.vue'
export default {
   components: {
   "project-list":require("pages/Projectslist.vue").default,
    "create-issue":require("pages/Createissue.vue").default,
    "add-comment":require("pages/Addcomment.vue").default
   },
  data () {
    return {
      tab: 'projectlist',
      projecttitle:"",
      membername:""
    }
  }}
</script>