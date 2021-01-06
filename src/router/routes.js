
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: '/addproject', component: () => import('pages/addproject.vue') },
      { path: '/admin', component: () => import('pages/Admin.vue') },
      { path: '/projectmanager', component: () => import('pages/Projectmanager.vue') },
      { path: '/projectlead', component: () => import('pages/Projectlead.vue') },
      { path: '/techteam', component: () => import('pages/Techteam.vue') },
      { path: '/intern', component: () => import('pages/Intern.vue') }




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
