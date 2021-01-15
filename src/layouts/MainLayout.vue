<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
       

        <q-toolbar-title v-if="this.$route.fullPath=='/'"  class="absolute-center">
          JOYO
        </q-toolbar-title>
    

        <q-toolbar-title v-if="this.$route.fullPath!='/'"  class="absolute-center">
          JOYO-Dashboard
        </q-toolbar-title>
        
     <q-btn v-if="this.$route.fullPath!='/'" class="absolute-right" @click="logout"   >logout</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {mapGetters, mapState} from "vuex"

export default {
   computed:{
   ...mapState("emp",["currentUserDetails","check"])
 },
  methods:{
      logout()
      {
       this.currentUserDetails.email=""
       this.check=-1
       localStorage.removeItem("check");
        window.location.href="/"
      }
  }
  }
</script>
