<template>
  <header class="-">
    <div class="logo"><img src="../assets/logo.svg" /></div>
    <div
      :class="[
        'links-btn',
        isMenuOpen ? 'open' : '',
        isArabic ? 'arabicStyle' : '',
      ]"
    >
      <nav>
        <ul :class="['links', isArabic ? 'arabicStyle' : '']">
          <li>
            <a href="#">{{ $t("homeLink") }} </a>
          </li>
          <li>
            <a href="#about">{{ $t("aboutLink") }}</a>
          </li>
          <li>
            <a href="#services">{{ $t("servicesLink") }} </a>
          </li>
          <li>
            <a href="#findJob"> {{ $t("findLink") }}</a>
          </li>

          <li>
            <a href="#footer">{{ $t("contactLink") }}</a>
          </li>
          <!-- <li>
            
          </li> -->
        </ul>
      </nav>
      <div class="language-dropdown">
        <select v-model="selectedLanguage" @change="changeLanguage">
          <option value="en">English</option>
          <option value="ar">العربيه</option>
        </select>
      </div>
      <!-- <div class="auth">
        <button class="active">login</button>
        <button>log in</button>
      </div> -->
    </div>

    <!-- <i class="fa-solid fa-moon dark-mode"></i> -->
    <i class="fa-solid fa-bars menu-toggle" @click="toggleMenu"></i>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      selectedLanguage: "en",
    };
  },
  computed: {
    isArabic() {
      return this.$store.getters.isArabic;
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage;
      this.$store.dispatch("updateLocal", this.selectedLanguage);
    },
  },
};
</script>
<style scoped>
header {
  padding: 50px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 77px;
  position: relative;
}

.logo img {
  width: 10em;
}
.links-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.links {
  display: flex;
}
.links.arabicStyle {
  flex-direction: row-reverse;
}
.links li {
  margin-right: 17px;
  color: black;
  white-space: nowrap;
}
.links li:first-child {
  margin-left: 20px;
}
.links li:last-child {
  margin-right: 0;
}
.links.arabicStyle li:first-child {
  /* here first still is  home link  */
  margin-right: 0px;
  margin-left: 0px;
}
.links.arabicStyle li:last-child {
  /* here last  still is  contact  link  */
  margin-left: 20px;
  margin-right: 17px;
}

.links li a {
  color: black;
  transition: 0.3s;
  font-size: 20px;
  text-transform: capitalize;
  /* line-height: 24px; */
}

.links .active {
  color: #126ec3;
}
.links a:hover {
  color: #126ec3;
}
.language-dropdown select {
  padding: 0.2rem 0.3rem;
  font-size: 1rem;
  text-align: center;
  border-radius: 20px;
  font-weight: 500;
  border-color: #126ec3;
  border-width: 3px;
  color: #126ec3;
  margin-left: 15px;
  outline: none;
}
.language-dropdown option {
  font-weight: 500;
  color: #126ec3;
}

.menu-toggle {
  font-size: 3em;
  color: #126ec3;
  display: none;
}

/* Styles for small screens */
@media screen and (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  .links-btn {
    display: none;
  }
  .links-btn.open {
    display: block;
    padding: 20px;
    background-color: #eee;
    width: 100%;
    position: absolute;
    left: 0;
    top: 100px;
  }
  .links-btn.arabicStyle li {
    text-align: right;
  }
  .links-btn .language-dropdown select {
    margin: 0;
  }
  .links-btn.arabicStyle .language-dropdown {
    text-align: right;
  }

  .links-btn::after {
    position: absolute;
    content: "";
    top: -30px;
    right: 10px;
    /* width: 5px;
    height: 5px; */
    border-width: 15px;
    border-style: solid;
    border-color: transparent transparent #eee transparent;
    z-index: 3;
  }

  .links {
    display: block;
    margin-bottom: 30px;
  }
  .links li {
    padding: 5px 0 7px 0;
    transition: 0.3s;
    border-bottom: 2px solid #ddd;
    margin-right: 0;
  }
  /* .links.arabicStyle {
    margin-right: 0;
  } */
  .links li:hover {
    transform: translateX(5px);
  }
  .links.arabicStyle li:hover {
    transform: translateX(-5px);
  }
  .links li:first-child {
    margin-left: 0px;
  }
  .links.arabicStyle li:first-child {
    margin-right: 20px;
  }
  .links.arabicStyle li:last-child {
    margin-left: 0px;
  }
  .links.arabicStyle li {
    margin-right: 20px;
  }
  .links li .auth button {
    margin: 0 16px 0 0;
  }
}
</style>
