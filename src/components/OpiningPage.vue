<template>
  <div class="grand">
    <div class="container">
      <the-header></the-header>

      <div class="parent row">
        <div class="info col-sm-12 col-md-7 col-lg-6">
          <h2>{{ $t("opinningh2") }}</h2>
          <p>{{ $t("opinningp") }}</p>
          <!-- <button>get started</button> -->
          <div class="app">
            <div class="play">
              <i class="fa-brands fa-google-play"></i><span>Google play</span>
            </div>
            <div class="store">
              <i class="fa-brands fa-app-store-ios"></i><span>App Store</span>
            </div>

            <!-- <img src="../assets/google-play.png" alt="google-play" /> -->
          </div>
        </div>

        <div class="image col-sm-12 col-md-5 col-lg-6">
          <img src="../assets/opining1.jpg" alt="opining" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style scoped>
.grand {
  background-image: url("../assets/headerbackground.jpg");
  background-size: contain;
  /* height: 100vh; */
}

.parent {
  padding: 80px 0;
  display: flex;
  align-items: center;
}

.info h2 {
  font-weight: 600;
  /* font-size: 48px; */
  font-size: 3em;
  /* width: 717px; */
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

.image img {
  width: 50em;
  width: 646px;
  height: 37em;
  /* height: 595px; */
  max-width: 100%;
  border-radius: 50%;
}
.app {
  display: flex;
  margin-top: 65px;
}
.app div {
  /* color: #126ec3; */
  margin-right: 20px;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.app div:hover {
  transform: scale(1.1);
}
.app div i {
  font-size: 35px;
  margin-right: 10px;
}
.app div span {
  font-weight: bold;
}
@media screen and (max-width: 768px) {
  .parent {
    flex-direction: column-reverse;
    text-align: center;
  }
  .info h2 {
    font-weight: 500;
    font-size: 2.5em;
    margin: 28px 0;
  }
  .info p {
    font-weight: 400;
    font-size: 22px;
    color: #6b6767;
  }

  .app {
    /* margin: 50px auto; */
    justify-content: center;
  }
}
@media screen and (max-width: 992px) {
  .info h2 {
    font-weight: 500;
    font-size: 2.5em;
    margin: 28px 0;
  }
  .info p {
    font-weight: 400;
    font-size: 22px;
    color: #6b6767;
  }
}
</style>
