<template>
  <div class="container" id="about">
    <div class="about">
      <div class="row parent">
        <div class="col-sm-12 col-md-12 col-lg-6">
          <div class="image">
            <img src="../assets/about us image.jpg" />
          </div>
        </div>
        <div
          class="col-sm-12 col-md-12 col-lg-6"
          :class="['sec-info', isArabic ? 'arabicStyle' : '']"
        >
          <div class="head">
            <h3>{{ $t("aboutTitle") }}</h3>
            <h4>
              <span> {{ $t("careAndSaif") }} </span> {{ $t("aboutDes") }}
            </h4>
          </div>
          <div class="info">
            <p>{{ $t("aboutInfo") }} <br /></p>
            <button>{{ $t("aboutBtn") }}</button>
          </div>
        </div>
        <!-- <div class="col-sm-12 col-md-12 col-lg-6">
          <div class="head">
            <h3>About us</h3>
            <h4>
              <span> Care&Safe </span> was founded in2024,founded with all of
              love and ready to serve
            </h4>
          </div>
          <div class="info">
            <p>
              Care&Safe was founded in2024,founded with all of love and ready to
              serve Lorem Ipsum is simply dummy text of the printing and
              typesetting industry Lorem Ipsum is simply dummy text of the
              printing and typesetting industryLorem Ipsum is simply dummy text
              of the printing and typesetting industry <br />

              
            </p>
            <button>Explore more</button>
          </div>
        </div> -->
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
.image {
  position: relative;
  z-index: 1;
}
img {
  max-width: 100%;
  position: relative;
  z-index: 3;
  border-top-right-radius: 200px;
}
.image::after {
  content: "";
  position: absolute;
  width: 95%;
  height: 100%;
  border: 3px solid rgba(196, 188, 182, 1);

  top: -3%;
  left: 3%;
  z-index: 2;
  border-top-right-radius: 200px;
  border-bottom-left-radius: 200px;
}
.head h3 {
  color: rgba(18, 110, 195, 1);
  font-weight: 700;
  font-size: 35px;
}
.head h4 {
  font-size: 34px;
  font-weight: 700;
  margin: 35px 0 20px 0;
  padding-right: 100px;
}
.head h4 span {
  color: rgba(18, 110, 195, 1);
  font-size: 36px;
  /* font-weight: 700; */
  text-transform: capitalize;
}
.info p {
  color: rgba(2, 43, 58, 0.6);
  font-size: 24px;
}
button {
  border: 2px solid #126ec3;
  padding: 5px 20px;
  margin-top: 35px;
  height: 45px;
  border-radius: 10px;
  color: white;
  background-color: #126ec3;
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}
button:hover {
  background-color: #126dc3e5;
  color: white;
}
/* arabic style */
.sec-info.arabicStyle .head h4,
.sec-info.arabicStyle .head h3,
.sec-info.arabicStyle .info {
  text-align: right;
  margin-right: 0;
  padding-right: 0;
}
.sec-info.arabicStyle .info button {
  margin-left: auto;
  margin-right: 0;
}
@media screen and (max-width: 992px) {
  .parent {
    flex-direction: column-reverse;
    text-align: center;
  }
  .head h4 {
    padding: 0;
  }
  button {
    margin: 40px auto 70px;
  }
  .sec-info.arabicStyle .head h4,
  .sec-info.arabicStyle .head h3,
  .sec-info.arabicStyle .info {
    text-align: center;
  }
  .sec-info.arabicStyle .info button {
    margin: 40px auto 70px;
  }
}
</style>
