const state={
    employeeList:[
        { name:"abc",
          email:"admin@gmail.com",
          password:"Admin@12",
          type:"admin"
        },
         {
           name:"cde",
          email:"projectmanager@gmail.com",
          password:"Projectmanager@12",
          type:"projectmanager"
        },
         {
           name:"efg",
          email:"projectlead@gmail.com",
          password:"Projectlead@12",
          type:"projectlead"
        },
        { name:"hij",
          email:"techteam@gmail.com",
          password:"Techteam@12",
          type:"techteam"
        },
        {
          name:"klm",
          email:"intern@gmail.com",
          password:"Intern@12",
          type:"intern"
        },
      ],
      currentUserDetails:{
        email: '',
        password: '',
        type: '',
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
