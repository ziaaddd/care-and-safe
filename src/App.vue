<template>
  <div>
    <!-- <the-header></the-header> -->
    <opining-page></opining-page>
    <project-body></project-body>
    <about-us></about-us>
    <services-reviews></services-reviews>
    <find-job></find-job>
    <!-- <router-view></router-view> -->
    <the-footer></the-footer>
    <scroll-top></scroll-top>
    <!--  -->
  </div>
</template>
<script>
// import TheHeader from "./components/TheHeader.vue";
import OpiningPage from "./components/OpiningPage.vue";
import ProjectBody from "./components/ProjectBody.vue";
import AboutUs from "./components/AboutUs.vue";
import ServicesReviews from "./components/ServicesReviews.vue";
import TheFooter from "./components/TheFooter.vue";
import ScrollTop from "./components/ScrollTop.vue";
import FindJob from "./components/FindJob.vue";
export default {
  components: {
    // TheHeader,
    OpiningPage,
    ProjectBody,
    AboutUs,
    ServicesReviews,
    TheFooter,
    FindJob,
    ScrollTop,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Montserrat:wght@400;500;700&display=swap");

body {
  font-family: "Roboto", sans-serif;
}
/* h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li a {
  text-decoration: none;
}
</style>
