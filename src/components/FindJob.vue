<template>
  <div class="findjob" id="findJob">
    <div class="container">
      <div class="parent row" :class="[isArabic ? 'arabicStyle' : '']">
        <div class="info col-sm-12 col-md-6">
          <h2>{{ $t("findJopTitle1") }} <br />{{ $t("findJopTitle2") }}</h2>
          <p>
            {{ $t("findJopDes") }}
          </p>

          <router-link to="/apply"
            ><button @click="goDown">
              {{ $t("findJopBtn") }}
            </button></router-link
          >
        </div>
        <div class="image col-sm-12 col-md-6">
          <img src="../assets/photo1712624180.jpeg" alt="opining" />
        </div>
      </div>
      <router-view></router-view>
      <!-- <apply-jop></apply-jop> -->
    </div>
  </div>
</template>
<script>
// import ApplyJop from "./ApplyJop.vue";
export default {
  computed: {
    isArabic() {
      return this.$store.getters.isArabic;
    },
  },
  methods: {
    goDown() {
      const currentPosition = window.scrollY;
      const newPosition = currentPosition + 900;
      window.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
.findjob {
  background-image: url("../assets/headerbackground.jpg");
  background-size: contain;
  margin: 70px 0 0 0;
  padding-bottom: 20px;
}
.parent {
  padding: 80px 0;
  display: flex;
  align-items: center;
}

.info h2 {
  font-weight: 600;
  font-size: 3em;
}
.info p {
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-top: 23px;
  color: #6b6767;
}
button {
  border: 2px solid #126ec3;
  width: 145px;
  height: 45px;
  text-align: center;
  border-radius: 10px;
  color: #126ec3;
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;
  margin: 65px 0;
  background-color: #126ec3;
  color: white;
  transition: 0.3s;
}
button:hover {
  background-color: #126dc3e5;
}
.image {
  text-align: end;
}
img {
  width: 646px;
  height: 595px;
  max-width: 100%;
  border-radius: 20px;
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}
/* arabic style  */
.parent.arabicStyle .info {
  text-align: right;
}
@media screen and (max-width: 768px) {
  .parent {
    text-align: center;
    padding-bottom: 0;
    flex-direction: column-reverse;
  }
  .info {
    margin-top: 50px;
  }
  .info h2 {
    font-weight: 500;
    font-size: 2.5em;
  }
  .info p {
    font-weight: 400;
    font-size: 22px;
  }
  .parent.arabicStyle .info {
    text-align: center;
  }
}

@media screen and (max-width: 992px) {
  .info h2 {
    font-weight: 500;
    font-size: 2.5em;
  }
  .info p {
    font-weight: 400;
    font-size: 22px;
  }
}
@media screen and (max-width: 768px) {
  button {
    margin-bottom: 0;
  }
}
</style>
