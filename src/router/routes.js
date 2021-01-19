import store from "src/store/emp"

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
   
    children: [
      { path: '',name:'login', component: () => import('pages/Login.vue') ,
      
      beforeEnter:(to,from,next)=>{
     
          if(localStorage.getItem("check"))
            // { next(this.$route.query);
       { 
            next({path:localStorage.getItem("check")})
             // next("/admin")
         }  else
          // { window.location="/login"
          next()
          }

      

      
     
  },
    {  path:'/intern',name:'intern', component: () => import('pages/Intern.vue'),
    beforeEnter:(to,from,next)=>{
     if(localStorage.getItem("check")==="/intern")
      next()
      else
      next({path:localStorage.getItem("check") || "/"})
  // }
// },
}},
     { path: '/admin', component: () => import('pages/Admin.vue'),
     beforeEnter:(to,from,next)=>{
      if(localStorage.getItem("check")=="/admin")
       next()
       else
       {        

       next({path:localStorage.getItem("check") || "/"})
        // beforeEnter:(to,from,next)=>{
        //  if(window.localStorage.getItem("check") && store.state.currentUserDetails.type=="admin" )
        // {  next()
        //   console.log("1st")}
        //   else
        //  {next('')
        //  console.log("2nd")
        //  console.log(store.state.check)
        //  console.log($route.fullpath)
        // }
          
        // }
       }}},
      { path: '/projectmanager', component: () => import('pages/Projectmanager.vue'),
      beforeEnter:(to,from,next)=>{
        if(localStorage.getItem("check")=="/projectmanager")
         next()
         else
         next({path:localStorage.getItem("check") || "/"})
     
      // beforeEnter:(to,from,next)=>{
        
      //  if(window.localStorage.getItem("check") && store.state.currentUserDetails.type=="projectmanager" )
       
      //   next()
      //   else
      //   next('')
      
      // }
      }},
    { path: '/projectlead', component: () => import('pages/Projectlead.vue'),
    beforeEnter:(to,from,next)=>{
      if(localStorage.getItem("check")=="/projectlead")
       next()
       else
       next({path:localStorage.getItem("check") || "/"})
    //   beforeEnter:(to,from,next)=>{
    //     // console.log("projectlead details"+this.currentUserDetails.email)
    //    if(window.localStorage.getItem("check")&& store.state.currentUserDetails.type=="projectlead" )
       
    //     next()
    //     else
    //     next('')
      
    // }
  }},
    { path: '/techteam', component: () => import('pages/Techteam.vue'),
    beforeEnter:(to,from,next)=>{
      if(localStorage.getItem("check")=="/techteam")
       next()
       else
       next({path:localStorage.getItem("check") || "/"})
      
    }
  },
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
