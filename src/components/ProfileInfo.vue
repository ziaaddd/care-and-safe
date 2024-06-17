<template>
  <div class="profile-info">
    <h2>{{ $t("profileTitle") }}</h2>
    <div class="row nany-info" :class="[isArabic ? 'arabicStyle' : '']">
      <!-- <div class="col-sm-12 col-md-2">
        <div class="image">
          <img src="../assets/user.jpg" />
          <i class="fa-solid fa-pen-to-square vector"></i>

          <p>{{ $t("profilePic") }}</p>
        </div>
      </div> -->
      <div class="col-sm-12 form">
        <form @submit.prevent="submitForm">
          <div class="filed">
            <label for="f-name"> {{ $t("profileFName") }}</label>
            <input type="text" id="f-name" v-model="formData.firstName" />
            <img src="../assets/Vector.svg" alt="vector" />
            <!-- 1 -->
            <span class="error" v-if="errors.firstName">{{
              errors.firstName
            }}</span>
          </div>
          <div class="filed">
            <label for="l-name"> {{ $t("profileLName") }}</label>
            <input type="text" id="l-name" v-model="formData.lastName" />
            <img src="../assets/Vector.svg" alt="vector" />
            <!-- 2 -->
            <span class="error" v-if="errors.lastName">{{
              errors.lastName
            }}</span>
          </div>
          <div class="filed">
            <label for="number"> {{ $t("profilePhone") }}</label>
            <input type="number" id="number" v-model="formData.number" />
            <img src="../assets/Vector.svg" alt="vector" />

            <span class="error" v-if="errors.number">{{ errors.number }}</span>
          </div>
          <div class="filed">
            <label for="email"> {{ $t("profileEmail") }}</label>
            <input type="email" id="email" v-model="formData.email" />
            <img src="../assets/Vector.svg" alt="vector" />
            <span class="error" v-if="errors.email">{{ errors.email }}</span>
          </div>
          <div class="filed">
            <label for="date"> {{ $t("profileDate") }}</label>
            <input type="date" id="date" v-model="formData.date" />
            <!-- <img src="../assets/Vector.svg" alt="vector" /> -->
            <span class="error" v-if="errors.date">{{ errors.date }}</span>
          </div>
          <div class="filed">
            <label for="password"> {{ $t("profilePassword") }}</label>
            <input type="password" id="password" v-model="formData.password" />
            <img src="../assets/Vector.svg" alt="vector" />
            <span class="error" v-if="errors.password">{{
              errors.password
            }}</span>
          </div>
          <div class="filed">
            <label for="address"> {{ $t("profileAddress") }}</label>
            <input type="address" id="address" v-model="formData.address" />
            <img src="../assets/Vector.svg" alt="vector" />
            <span class="error" v-if="errors.address">{{
              errors.address
            }}</span>
          </div>
          <div class="filed">
            <label for="rate"> {{ $t("profileRate") }}</label>
            <input type="number" id="rate" v-model="formData.rate" />
            <img src="../assets/Vector.svg" alt="vector" />
            <span class="error" v-if="errors.rate">{{ errors.rate }}</span>
          </div>
          <div class="filed">
            <label for="bio">{{ $t("profileBio") }}</label>
            <textarea id="bio" rows="6" v-model="formData.bio"></textarea>
            <!-- <img src="../assets/Vector.svg" alt="vector" /> -->
            <span class="error" v-if="errors.bio">{{ errors.bio }}</span>
          </div>
          <div class="submit-btn">
            <button type="submit">{{ $t("profileBtn") }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        number: [],
        email: "",
        date: null,
        password: null,
        address: "",
        rate: null,
        bio: "",
      },
      errors: {},
    };
  },
  computed: {
    isArabic() {
      return this.$store.getters.isArabic;
    },
  },
  methods: {
    //   fNameError": "First Name Is Required",
    // "lNameError": "Last Name Is Required",
    // "phoneError": "  Phone number Email Is Required",
    // "emailError": "Email Is Required",
    // "dateError": "Date Is Required",
    // "passwordError": "Password Is Required",
    // "addressError": "Address Is Required",
    // "rateError": "Hourly Rate in Pound",
    // "bioError": " Bio Is Required"
    submitForm() {
      this.errors = {};
      if (!this.formData.firstName) {
        this.errors.firstName = this.$t("fNameError");
      }
      if (!this.formData.lastName) {
        this.errors.lastName = this.$t("lNameError"); // or 1) >> return direct;
      }
      if (!this.formData.number) {
        this.errors.number = this.$t("phoneError");
      }

      if (!this.formData.email || !this.formData.email.includes("@")) {
        this.errors.email = this.$t("emailError");
      }
      if (!this.formData.date) {
        this.errors.date = this.$t("dateError");
      }
      if (!this.formData.password) {
        this.errors.password = this.$t("passwordError");
      }
      if (!this.formData.rate) {
        this.errors.rate = this.$t("rateError");
      }
      if (!this.formData.bio) {
        this.errors.bio = this.$t("bioError");
      }

      if (Object.keys(this.errors).length > 0) {
        // 2) >> if there are any error
        return;
      } else {
        console.log(this.formData);
        // console.log(this.formData.number[0].length);
        this.clearForm();
      }
    },
    clearForm() {
      this.formData.firstName = "";
      this.formData.lastName = "";
      this.formData.number = null;
      this.formData.email = "";
      this.formData.date = null;
      this.formData.password = null;
      this.formData.address = "";
      this.formData.rate = null;
      this.formData.bio = "";
    },
  },
};
</script>

<style scoped>
.profile-info h2 {
  text-align: center;
  font-size: 48px;
}
.profile-info .nany-info {
  margin-top: 50px;
  padding: 43px 0;
}
/* .profile-info .nany-info .image {
  position: relative;
  margin-top: 40px;
}
.profile-info .nany-info .image i {
  position: absolute;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  background-color: #126ec3;
  bottom: 22%;
  right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}
.profile-info .nany-info img {
  width: 157px;
  max-width: 100%;
  height: 157px;
  border-radius: 50px;
}
.profile-info .nany-info .image p {
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
} */
.profile-info .nany-info form {
  background-color: white;
  border-radius: 5px;
}
.profile-info .nany-info form .filed {
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
}
.profile-info .nany-info form .filed img {
  position: absolute;
  content: " ";
  top: 60%;
  right: 4%;
  width: 15px;
  height: 15px;
}

.profile-info .nany-info form .filed input,
textarea {
  padding: 20px 16px;
  outline: none;
  border: none;
  background-color: rgba(245, 245, 245, 1);
  color: rgba(2, 43, 58, 0.6);
  border-radius: 5px;
}
/* input[type="date"]::-webkit-datetime-edit {
    color: rgba(2, 43, 58, 0.6);
  } */
/* input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
  } */
.profile-info .nany-info form .filed label {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
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
  margin: 35px 0;
  background-color: #126ec3;
  color: white;
  transition: 0.3s;
}
button:hover {
  background-color: #126dc3e5;
}
.profile-info .nany-info form .submit-btn {
  text-align: center;
}
.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
  text-transform: capitalize;
}
/* arabic-style */
.nany-info.arabicStyle .filed {
  text-align: right;
}
.nany-info.arabicStyle .filed input {
  text-align: right;
}
.nany-info.arabicStyle form .filed img {
  left: 4%;
}

@media screen and (max-width: 992px) {
  .profile-info .nany-info .image i {
    bottom: 30%;
    right: 5%;
  }
  .profile-info .nany-info p {
    font-size: 5px;
  }
}
@media screen and (max-width: 768px) {
  .profile-info .nany-info {
    margin-top: 0;
    padding-top: 20px;
  }
  .profile-info .nany-info .image {
    text-align: center;
  }
  .profile-info .nany-info .image i {
    bottom: 22%;
    right: 35%;
  }
}
</style>
