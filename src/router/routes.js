import store from "src/store/emp"
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
     
    //  { path: '/addproject', component: () => import('pages/addproject.vue') },
     { path: '/admin', component: () => import('pages/Admin.vue'),
        beforeEnter:(to,from,next)=>{
         if(store.state.currentUserDetails[0].email=="")
         
          next('')
         else{
          {
          next()
         }
        }
      }},
      { path: '/projectmanager', component: () => import('pages/Projectmanager.vue'),
      beforeEnter:(to,from,next)=>{
       if(store.state.currentUserDetails[0].email=="")
       
        next('')
       else{
        {
        next()
       }
      }
    }},
    { path: '/projectlead', component: () => import('pages/Projectlead.vue'),
      beforeEnter:(to,from,next)=>{
       if(store.state.currentUserDetails[0].email=="")
       
        next('')
       else{
        {
        next()
       }
      }
    }},
    { path: '/techteam', component: () => import('pages/Techteam.vue'),
      beforeEnter:(to,from,next)=>{
       if(store.state.currentUserDetails[0].email=="")
       
        next('')
       else{
        {
        next()
       }
      }
    }},
  {  path:'/intern', component: () => import('pages/Intern.vue'),
    beforeEnter:(to,from,next)=>{
     if(store.state.currentUserDetails[0].email=="")
     
      next('')
     else{
      {
      next()
     }
    }
  }},
    
    


     
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
