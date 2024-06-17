<template>
  <div class="footer" id="footer">
    <div class="container">
      <div class="row" :class="[isArabic ? 'arabicStyle' : '']">
        <div class="col-sm-12 col-md-5 col-lg-4 footer-col">
          <div class="logo">
            <img src="../assets/logo.svg" alt="logo" />
            <p>
              {{ $t("footerDes") }}
            </p>
          </div>
        </div>
        <!-- <div
          class="col-sm-12 col-md-6 col-lg-2 footer-col "
        >
          <div class="quick-links">
            <h2>Quick links</h2>
            <ul>
              <li><a href="#">Lorem Ipsum is simply </a></li>
              <li><a href="#">Lorem Ipsum </a></li>
              <li><a href="#">Lorem Ipsum is </a></li>
              <li><a href="#">Lorem Ipsum is simply </a></li>
            </ul>
          </div>
        </div> -->
        <div class="col-sm-12 col-md-4 col-lg-4 footer-col">
          <div class="services">
            <h2>{{ $t("footerServices") }}</h2>
            <ul>
              <li>
                <a href="#">{{ $t("footerService1") }} </a>
              </li>
              <li>
                <a href="#">{{ $t("footerService2") }} </a>
              </li>
              <li>
                <a href="#">{{ $t("footerService3") }} </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-4 footer-col">
          <div class="contact">
            <h2>{{ $t("footerContact") }}</h2>
            <ul>
              <li>
                <a href="#">{{ $t("footerContactDes") }} </a>
              </li>
            </ul>
            <div class="social">
              <a
                href="https://www.facebook.com/profile.php?id=100021080263869"
                target="blank"
                ><i class="fa-brands fa-facebook-f"></i
              ></a>
              <a href="https://x.com/ZiadMoh99937837" target="blank"
                ><i class="fa-brands fa-twitter"></i
              ></a>
              <a href="https://www.linkedin.com/in/ziad-shaban/" target="blank"
                ><i class="fa-brands fa-linkedin-in"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="copyright">
    &copy; 2024 Copyright: <span>Care&Safe</span> Team
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
.footer {
  margin-top: 150px;
  background-color: rgba(245, 245, 245, 0.6);
  padding: 60px 0;
}
.footer-col {
  display: flex;
  justify-content: end;
}
.logo p {
  color: rgba(2, 43, 58, 0.7);
  font-size: 24px;
  margin-top: 32px;
}
.footer ul {
  padding: 0;
}
.footer h2 {
  font-size: 32px;
  font-weight: 500;
  color: rgba(18, 110, 195, 1);
  margin-bottom: 24px;
}

.footer ul a {
  color: rgba(2, 43, 58, 0.7);
  margin-bottom: 15px;
  display: inline-block;
  font-size: 18px;
  transition: 0.3s;
}
.footer ul a:hover {
  transform: translateX(5px);
}
.social i {
  margin-right: 20px;
  font-size: 30px;
  color: rgba(18, 110, 195, 1);
  transition: 0.3s;
}
.social i:hover {
  color: rgba(18, 109, 195, 0.721);
  transform: scale(1.2);
}
.copyright {
  background-color: rgba(18, 110, 195, 1);
  padding: 15px;
  color: white;
  text-align: center;
}
.copyright span {
  font-weight: 700;
}
/* arabic style */
.row.arabicStyle {
  text-align: right;
  flex-direction: row-reverse;
}
@media screen and (max-width: 768px) {
  .row {
    text-align: center;
  }
  .col-sm-12 {
    margin-bottom: 10px;
  }
  .footer-col {
    display: flex;
    justify-content: center;
  }
  .row.arabicStyle {
    text-align: center;
  }
}
</style>
