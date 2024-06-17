import { createRouter, createWebHistory } from "vue-router";
import FindJob from "../components/FindJob.vue";
// import AboutUs from "../components/AboutUs.vue";
import ApplyJop from "../components/ApplyJop.vue";
import ProfileInfo from "../components/ProfileInfo.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: "/findJop", component: FindJob },
    // {
    //   path: "/about",
    //   component: AboutUs,
    // },
    // {
    //   path: "/findJop",
    //   component: FindJob,
    //   // children: [{ path: "apply", component: ApplyJop }],
    // },
    {
      path: "/apply",
      component: ApplyJop,
      children: [{ path: "fillInfo", component: ProfileInfo }],
    },
    // {path: '/:invalidUrl(.*)', component: InvalidUrl},
  ],
});

export default router;
// {path: '/coaches/:idd', component: CoachesDetails,
//         props: true, // that make this idd as a props in CoachesDetails
//         children:[
//             {path: 'contact', component: ContactCoaches}, //coaches/id(param)/contact
//         ]
//     },
