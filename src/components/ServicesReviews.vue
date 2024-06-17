<template>
  <div class="container" id="services">
    <div class="services">
      <div class="title">
        <h2>{{ $t("servicesTitle") }}</h2>
        <p>{{ $t("servicesDes") }}</p>
      </div>
      <div class="boxes row">
        <div class="col-sm-6 col-md-3">
          <div class="box">
            <img src="../assets/Group.svg" />
            <p class="my-2">{{ $t("servicesNanny") }}</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="box">
            <img src="../assets/cleaning.svg" />
            <p class="my-2">{{ $t("servicesCleaning") }}</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="box">
            <img src="../assets/cooking.svg" />
            <p class="my-2">{{ $t("servicesCooking") }}</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="box">
            <img src="../assets/laundry.svg" />
            <p class="my-2">{{ $t("serviceslaundry") }}</p>
          </div>
        </div>
        <!-- <div class="box">
          <img src="../assets/gard.svg" />
          <p>Gradening</p>
        </div> -->
      </div>
    </div>
    <div class="reviews" :class="[isArabic ? 'arabicStyle' : '']">
      <div class="title">
        <h2>{{ $t("reviewsTitle") }}</h2>
        <p>{{ $t("reviewsDes") }}</p>
      </div>
      <div class="row row-reverse">
        <div class="col-sm-12 col-md-8">
          <div class="head">
            <div>
              <h2>{{ $t("reviewsName") }}</h2>
              <h3>{{ $t("reviewsNameJob") }}</h3>
            </div>
            <div>
              <p>
                <span> {{ $t("reviewsRate") }} </span><br /><i
                  class="fa-solid fa-star"
                ></i
                ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i>
              </p>
            </div>
          </div>
          <div class="des">
            <p>
              {{ $t("reviewsDes1") }}

              <br />
              <br />

              {{ $t("reviewsDes2") }}
            </p>
          </div>
          <div class="arrowes">
            <i class="fa-solid fa-chevron-left left"></i>
            <i class="fa-solid fa-chevron-right right"></i>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 image">
          <div class="">
            <img src="../assets/reviewimg.jpg" alt="reviewimg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    isArabic() {
      return this.$store.getters.isArabic;
    },
  },
};
</script>
<style scoped>
.services {
  margin: 105px 0 80px;
}
.title {
  text-align: center;
  margin-bottom: 80px;
}
.title h2 {
  color: rgba(18, 110, 195, 1);
  font-weight: 600;
  font-size: 32px;
}
.title p {
  font-size: 40px;
}
.box {
  text-align: center;
  background-color: rgba(249, 249, 249, 1);
  /* width: 160px;
  height: 160px; */
  transition: 0.3s;
  overflow: hidden;
  padding: 10px;
  box-shadow: 4px 4px 11px -10px;
  margin-bottom: 20px;
}
.box img {
  padding: 10px;
  transition: 0.3s;
  width: 95px;
  height: 95px;
}
.box:hover img {
  transform: scale(1.3);
  animation: rotateservice 0.3s ease-in-out;
}
@keyframes rotateservice {
  from {
    transform: scale(0.5) rotate(0);
  }
  to {
    transform: scale(1.5) rotate(360deg);
  }
}
.box:hover p {
  transform: scale(1.2);
}

.box p {
  font-size: 20px;
  transition: 0.3s;
}

/* rating */
.reviews .head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* white-space: nowrap; */
}
.reviews .head h2 {
  color: rgba(18, 110, 195, 1);
  font-size: 32px;
  font-weight: 600;
  text-transform: capitalize;
}
.reviews .head h3 {
  color: rgba(2, 43, 58, 0.6);
  font-size: 24px;
  font-weight: 400;
}
.reviews .head p {
  font-size: 32px;
  font-weight: 600;
}
.reviews .head p i {
  color: rgb(226, 226, 39);
  font-size: 20px;
}
.reviews .des p {
  font-size: 24px;
  color: rgba(2, 43, 58, 0.6);
  margin: 55px 0 40px;
}
.reviews .arrowes {
  display: flex;
  gap: 30px;
}
.reviews .arrowes i {
  border: 2px solid rgba(18, 110, 195, 1);
  padding: 25px;
  border-radius: 50%;
  color: rgba(18, 110, 195, 1);
  font-size: 33px;
  display: block;
  transition: 0.3s;
}
.reviews .arrowes i:hover {
  background-color: rgba(18, 110, 195, 1);
  color: white;
}

/* .reviews .arrowes .right {
  background-color: rgba(18, 110, 195, 1);
  color: white;
} */
.image {
  text-align: end;
  /* border: 2px solid #eee; */
  display: flex;
  align-items: center;
}

.image img {
  width: 100%;
}
/* arabic style */
.arabicStyle {
  text-align: right;
}
.arabicStyle .head {
  flex-direction: row-reverse;
}
.arabicStyle .row {
  flex-direction: row-reverse;
}
.arabicStyle .row .arrowes {
  justify-content: flex-end;
}
@media screen and (max-width: 768px) {
  /* .image {
    display: flex;
    justify-content: center;
  } */
  .image img {
    border-radius: 50%;
    width: 140px;
    height: 140px;
  }
  .row-reverse {
    flex-direction: column-reverse;
  }
  .arabicStyle .row {
    flex-direction: column-reverse;
  }
  .arabicStyle .row .image {
    justify-content: end;
  }
  .row-reverse .des p {
    margin-top: 10px;
  }
}
</style>
