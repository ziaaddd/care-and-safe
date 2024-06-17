<template>
  <div class="container">
    <div :class="['reasons', isArabic ? 'arabic' : '']">
      <div class="title">
        <h3>
          {{ $t("reasonTitle") }} <span> {{ $t("careAndSaif") }}</span
          >?
        </h3>
        <p>{{ $t("reasonDes") }}</p>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <div class="box">
            <div class="icon">
              <img src="../assets/reason1.svg" alt="trained" />
            </div>
            <div class="info">
              <h4>{{ $t("reasonTrainedH") }}</h4>
              <p>
                {{ $t("reasonTrainedp") }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="box">
            <div class="icon">
              <img src="../assets/reason2.svg" alt="trained" />
            </div>
            <div class="info">
              <h4>{{ $t("reasonHonestH") }}</h4>
              <p>
                {{ $t("reasonHonestp") }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="box">
            <div class="icon">
              <img src="../assets/reason3.svg" alt="trained" />
            </div>
            <div class="info">
              <h4>{{ $t("reasonRecommendedH") }}</h4>
              <p>
                {{ $t("reasonRecommendedp") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="reasons row">
      <div class="title">
        <h3>Reasons to choose <span>Care&Safe</span>?</h3>
        <p>the best and largest manpower and recruitment institute in Egypt</p>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="box">
          <div class="icon">
            <img src="../assets/reason1.svg" alt="trained" />
          </div>
          <div class="info">
            <h4>trained & educated</h4>
            <p>
              Are trained and educated personnel to be able to help all
              household needs.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="box">
          <div class="icon">
            <img src="../assets/reason2.svg" alt="trained" />
          </div>
          <div class="info">
            <h4>honest & reliable</h4>
            <p>
              we train our workforce to be honest, reliable and professional in
              their fields..
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="box">
          <div class="icon">
            <img src="../assets/reason3.svg" alt="trained" />
          </div>
          <div class="info">
            <h4>Recommended</h4>
            <p>
              it has been recommended by many of our service users as of the
              friendly service .
            </p>
          </div>
        </div>
      </div>
    </div> -->
    <!-- how to works -->
    <div class="works">
      <div class="title">
        <h3>{{ $t("worksTitle") }}</h3>
        <p>
          {{ $t("worksDes") }}
        </p>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <div class="box-works">
            <div class="icon">
              <img src="../assets/works1.svg" alt="trained" />
            </div>
            <div class="info">
              <h4>{{ $t("worksSearchH") }}</h4>
              <p>
                {{ $t("worksSearchP") }}
              </p>
            </div>
            <img src="../assets/arrow.svg" alt="arrow" class="arrow" />
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="box-works">
            <div class="icon">
              <img src="../assets/works2.svg" alt="trained" />
            </div>
            <div class="info">
              <h4>{{ $t("worksProfileH") }}</h4>
              <p>
                {{ $t("worksProfileP") }}
              </p>
            </div>
            <img src="../assets/arrow.svg" alt="arrow" class="arrow" />
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="box-works">
            <div class="icon">
              <img src="../assets/works3.svg" alt="trained" />
            </div>
            <div class="info">
              <h4>{{ $t("worksConnecteH") }}</h4>
              <p>
                {{ $t("worksConnecteP") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // isArabic: this.$store.getters.isArabic, // false,
    };
  },
  computed: {
    isArabic() {
      return this.$store.getters.isArabic;
    },
  },
};
</script>
<style scoped>
.reasons {
  margin: 111px 0 50px;
}
.title {
  text-align: center;
}
.title h3 {
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
}
.title h3 span {
  color: #126ec3;
}
.title p {
  color: rgba(38, 50, 56, 0.8);
  font-size: 25px;
  font-weight: 500;
  text-transform: capitalize;
}
.box {
  margin: 92px 0;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.box .icon img {
  width: 95px;
  height: 90px;
}

.box .info {
  padding-left: 16px;
}
.box .info h4 {
  color: rgba(38, 50, 56, 0.8);
  margin: 0;
  white-space: nowrap;
}
.box .info p {
  color: rgba(38, 50, 56, 0.6);
}
.box-works {
  margin: 92px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
}
.box-works .arrow {
  position: absolute;
  right: -30%;
  top: 25%;
  width: 50%;
}
.box-works .info {
  max-width: 250px;
  margin: 48px auto;
}
.box-works .info h4 {
  color: rgba(2, 43, 58, 1);
  font-size: 32;
  font-weight: 600;
}
.box-works .info p {
  color: rgba(38, 50, 56, 0.6);
  text-align: center;
  display: flex;
  justify-content: center;
}
/* arabic style */
.reasons.arabic .box {
  flex-direction: row-reverse;
}
.reasons.arabic .box .info {
  text-align: right;
  padding-right: 15px;
  padding-left: 0;
}

@media screen and (max-width: 992px) {
  .reasons .box,
  .reasons.arabic .box {
    flex-direction: column;
  }
  .reasons .box .info {
    text-align: center;
  }
}
@media screen and (max-width: 768px) {
  .reasons .box {
    flex-direction: row;
    margin: 30px 0;
  }
  .reasons .box .info {
    text-align: start;
  }

  .works .box-works .arrow {
    display: none;
  }
  .box-works {
    margin: 20px 0 10px 0;
  }

  .box-works .info {
    margin: 10px auto;
  }
  .reasons.arabic .box {
    flex-direction: row-reverse;
  }
}
</style>
