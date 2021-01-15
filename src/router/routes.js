import store from "src/store/emp"
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
   
    children: [
      { path: '',name:'login', component: () => import('pages/Login.vue') ,
      
      beforeEnter:(to,from,next)=>{
     
          if(localStorage.getItem("check"))
            {next('')
            console.log("1st"+window.localStorage.getItem("check"))

      }
            else{
              next()
              console.log("Else="+localStorage.getItem("check"))
            }

      
    }},
    {  path:'/intern',name:'intern', component: () => import('pages/Intern.vue'),
    beforeEnter:(to,from,next)=>{
     if(window.localStorage.getItem("check") && store.state.currentUserDetails.type=="intern" )
      next()
      else
     next('')
  }},
  //   //  { path: '/addproject', component: () => import('pages/addproject.vue') },
     { path: '/admin', component: () => import('pages/Admin.vue'),
        beforeEnter:(to,from,next)=>{
         if(window.localStorage.getItem("check") && store.state.currentUserDetails.type=="admin" )
          next()
          else
          next('')
        }
      },
      { path: '/projectmanager', component: () => import('pages/Projectmanager.vue'),
      beforeEnter:(to,from,next)=>{
        
       if(window.localStorage.getItem("check") && store.state.currentUserDetails.type=="projectmanager" )
       
        next()
        else
        next('')
      
      }
    },
    { path: '/projectlead', component: () => import('pages/Projectlead.vue'),
      beforeEnter:(to,from,next)=>{
        // console.log("projectlead details"+this.currentUserDetails.email)
       if(window.localStorage.getItem("check")&& store.state.currentUserDetails.type=="projectlead" )
       
        next()
        else
        next('')
      
    }},
    { path: '/techteam', component: () => import('pages/Techteam.vue'),
      beforeEnter:(to,from,next)=>{
       if(window.localStorage.getItem("check") && store.state.currentUserDetails.type=="techteam")
       
        next()
        else
        next('')
      
    }},
  // {  path:'/intern',name:'intern', component: () => import('pages/Intern.vue'),
  //   beforeEnter:(to,from,next)=>{
  //    if(window.localStorage.getItem("check"))
  //     next()
  // }},
    
    


     
      // { path: '/projectmanager', component: () => import('pages/Projectmanager.vue') },
      // { path: '/projectlead', component: () => import('pages/Projectlead.vue') },
      // { path: '/techteam', component: () => import('pages/Techteam.vue') },
      // { path: '/intern', component: () => import('pages/Intern.vue') }




    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
