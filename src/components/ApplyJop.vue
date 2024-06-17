<template>
  <div class="container">
    <div class="apply" :class="[isArabic ? 'arabicStyle' : '']">
      <h2>{{ $t("applyTitle") }}</h2>
      <div class="nanyInfo">
        <div class="id filed">
          <div>
            <h3>{{ $t("applyId") }}</h3>
            <p>
              {{ $t("applyIdDes") }}
            </p>
          </div>
          <div class="btn">
            <label class="upload-btn" for="idInput">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
              <input id="idInput" type="file" @change="handleId" />
            </label>
          </div>
        </div>

        <div class="addresss filed">
          <div>
            <h3>{{ $t("applyaddress") }}</h3>
            <p>
              {{ $t("applyaddressDes") }}
            </p>
          </div>
          <div class="btn">
            <label class="upload-btn" for="address">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
              <input id="address" type="file" @change="handleAddress" />
            </label>
          </div>
        </div>
        <div class="selfi filed">
          <div>
            <h3>{{ $t("applySelfie") }}</h3>
            <p>
              {{ $t("applySelfieDes") }}
            </p>
          </div>
          <div class="btn">
            <label class="upload-btn" for="selfie">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
              <input id="selfie" type="file" @change="handleSelfie" />
            </label>
          </div>
        </div>
      </div>
      <div class="next-btn">
        <button @click="backRoute">{{ $t("applyBtnBack") }}</button>
        <!-- <router-link to="/apply/fillInfo"> -->
        <button @click="nextRoute">{{ $t("applyBtnNext") }}</button>
        <!-- </router-link> -->
      </div>
    </div>
    <!-- profile-info -->
    <router-view></router-view>
  </div>
</template>
<script>
import ProfileInfo from "./ProfileInfo.vue";
export default {
  components: { ProfileInfo },
  computed: {
    isArabic() {
      return this.$store.getters.isArabic;
    },
  },
  methods: {
    handleId(event) {
      const file = event.target.files[0];
      // Handle the uploaded file (send it to the server)
      console.log("Uploaded ID:", file); // important
    },
    handleAddress(event) {
      const file = event.target.files[0];
      // Handle the uploaded file (send it to the server)
      console.log("Uploaded Address Proof:", file);
    },
    handleSelfie(event) {
      const file = event.target.files[0];
      // Handle the uploaded file (send it to the server)
      console.log("Uploaded Selfie:", file);
    },
    backRoute() {
      this.$router.push("/findJop");
    },
    nextRoute() {
      this.$router.push("/apply/fillInfo");

      const currentPosition = window.scrollY;
      const newPosition = currentPosition + 1000;
      window.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
.apply {
  margin: 110px auto;
}
.apply h2 {
  text-align: center;
  font-size: 48px;
}
.nanyInfo {
  padding: 0 10%;
  margin: 50px 0;
}
.nanyInfo .filed {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 21px 50px;
}
.upload-btn {
  display: inline-block;
  cursor: pointer;
  padding: 8px 12px;
  transition: 0.3s;
}

.upload-btn:hover {
  transform: scale(1.1);
}

.upload-btn input[type="file"] {
  display: none;
}
.nanyInfo i {
  color: rgba(18, 110, 195, 1);
  font-size: 34px;
  padding: 5px;
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
.apply .next-btn {
  display: flex;
  justify-content: space-between;
}
/* arabic style  */
.apply.arabicStyle .filed {
  text-align: right;
}
.apply.arabicStyle .filed {
  flex-direction: row-reverse;
}
/* profile info */
@media screen and (max-width: 768px) {
  button {
    margin: 0;
  }
  .apply {
    margin: 80px auto;
  }
}
</style>
