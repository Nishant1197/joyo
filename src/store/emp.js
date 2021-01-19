const state={
    employeeList:[
        { name:"abc",
          email:"admin@gmail.com",
          password:"Admin@12",
          type:"admin",
          path:"/admin"
        },
         {
           name:"cde",
          email:"projectmanager@gmail.com",
          password:"Projectmanager@12",
          type:"projectmanager",
          path:"/projectmanager"
        },
         {
           name:"efg",
          email:"projectlead@gmail.com",
          password:"Projectlead@12",
          type:"projectlead",
          path:"/projectlead"
        },
        { name:"hij",
          email:"techteam@gmail.com",
          password:"Techteam@12",
          type:"techteam",
          path:"/techteam"
        },
        {
          name:"klm",
          email:"intern@gmail.com",
          password:"Intern@12",
          type:"intern",
          path:"/intern"
        },
      ],
      currentUserDetails:{
        email: '',
        password: '',
        type: '',
        path:''
        },
        check:0
}
const mutations={

    updatedetails(state,payload){
      state.currentUserDetails=(payload),
      console.log("say"+state.currentUserDetails)
    },

    addemp(state,payload){
      state.employeeList.push(payload)
      console.log(state.employeeList)},
    checkCondition(state,payload){
      state.check=1;

    }
    }
      
        

const actions={
  handleAuthStateChanged(){
    console.log("hiiii")
  }

        }
       
    

const getters={
    
    }

export default{
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}
