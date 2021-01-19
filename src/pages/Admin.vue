<template>
 <div class="q-pa-md">
  <!-- <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Dashboard
        </q-toolbar-title>
        <q-btn v-if="this.$route.fullPath!='/'" @click="logout" class="absolute-right"  >logout</q-btn>
      </q-toolbar>
    </q-header> -->

    <q-page class="flex q-pa-md">
      <q-card class="full-width">
        <!-- We used tab panels for login and registration  -->
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="addproject" label="ADD PROJECT" />
          <q-tab name="projectlist" label="PROJECT LIST" />
          <q-tab name="createissue" label="CREATE ISSUE" />
          <q-tab name="issues" label="ISSUES" />
          <q-tab name="addcomment" label="ADD COMMENT" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="addproject">
           <add-project/>
          </q-tab-panel>

          <q-tab-panel name="projectlist">
            <project-list />
          </q-tab-panel>
            <q-tab-panel name="createissue">
             <create-issue/>

            </q-tab-panel>
            <q-tab-panel name="issues">
         <issue-list/>
            </q-tab-panel>
            <q-tab-panel name="addcomment">
            <add-comment/>
           
          </q-tab-panel>
        </q-tab-panels>
        
      </q-card>
     
    </q-page>

    <q-page-container>
      <router-view />
    </q-page-container>
 </div>
</template>
<script>

import {mapGetters, mapState} from "vuex"
export default {
    name:"Dashboard",
  components: {
   "project-list":require("pages/Projectslist.vue").default,
   "create-issue":require("pages/Createissue.vue").default,
   "add-project":require("pages/addproject.vue").default,
   "issue-list":require("pages/Issues.vue").default,
   "add-comment":require("pages/Addcomment.vue").default
  },
 data()
 {
    return{
          tab:"addproject"
     }
 },

 computed:{
   ...mapState("emp",["currentUserDetails"])
 },
  // methods:{
  //     logout()
  //     { console.log(this.currentUserDetails.type)
  //      this.currentUserDetails[0].email=""
  //       window.location.href="/"
  //     }
  // },
// beforeMount() {
//   if(this.currentUserDetails.email!="")
//   { 
//     console.log("enter")
//     if(window.location.href==this.currentUserDetails.type || window.localStorage.getItem("check") )
//    window.location.href=`/${this.currentUserDetails.type}`
  

// }
// else{
//   console.log("this")
//   console.log(this.currentUserDetails.email)
//   window.location.href="/" 
// }

 
// }
}
</script>