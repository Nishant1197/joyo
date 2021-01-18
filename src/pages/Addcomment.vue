<template>
<div>
     <q-input class="q-pl-none" bottom-slots v-model="projectname" filled placeholder="Project Title" >
      </q-input>
        <div class="q-pt-md"   style="max-width: 700px">
    <q-input
      v-model="projectissue"
      filled
      type="textarea"
      placeholder="Add Comment"
    />
  </div>
</div>
</template>
<script>
export default {
    
}
</script>