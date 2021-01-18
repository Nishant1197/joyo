<template>
     <div class="q-pa-md">
    <q-markup-table class="set">
      <thead>
        <tr>
          <th class="text-left">Titles</th>
          <th class="text-left">Description</th>
          <th class="text-left">Members</th>
          <th class="text-left">Billable</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td v-for="items in array" :key="items" class="text-left">{{items}}</td>
         
        </tr>
        <tr>
          <td class="text-left">Hotel Management</td>
          <td class="text-left">project description2</td>
          <td class="text-left">rahul,adarsh</td>
          <td class="text-left">Yes</td>
        
        </tr>
        <tr>
          <td class="text-left">Carli</td>
          <td class="text-left">project description3</td>
          <td class="text-left">varun,nishant</td>
          <td class="text-left">No</td>
       
        </tr>
        <tr>
          <td class="text-left">Sap</td>
          <td class="text-left">project description4</td>
          <td class="text-left">swati,rishabh</td>
          <td class="text-left">No</td>
        
        </tr>
        <tr>
          <td class="text-left">wap</td>
          <td class="text-left">project description 4</td>
          <td class="text-left">alok,yash</td>
          <td class="text-left">Yes</td>
        
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>
<script>
export default {
    name:"Projectslist",
    data()
    {
        return{
          array:["Hotel Management","project description2","rahul,adarsh","Yes"]
            
          
        }
    }
    
}
</script>
<style scoped>

</style>