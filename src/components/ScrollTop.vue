<template>
  <button @click="scrollToTop" v-if="isVisible">
    <i class="fa-solid fa-arrow-up top" id="scrollButton"></i>
  </button>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 1000;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 20px;
  background-color: #126ec3;
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 50px;
  height: 50px;
  box-shadow: -2px 2px 6px -2px black;
}
button:hover .top {
  animation: scrolltop 0.3s ease-in infinite;
}
@keyframes scrolltop {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
