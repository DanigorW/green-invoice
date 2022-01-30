<template>
  <div id="navbar">
    <div class="logo">
      <img src="@/assets/homePage/green_logo.svg" alt="" />
    </div>
    <div v-if="this.$route.path !== '/'" class="logout">
      <Button
        @click="LOGOUT"
        type="logout"
        fontSize="18px"
        height="56px"
        :width="logoutBtnWidth"
        text="התנתק"
        bg="none"
        color="#000"
        border="2px solid #000"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      logoutBtnWidth: "200px",
    };
  },
  methods: {
    ...mapMutations(["LOGOUT"]),
  },
  components: {
    Button: () =>
      import(
        /* webpackChunkName: 'Button' */ "@/components/reusableComponents/button/Button.vue"
      ),
  },

  mounted() {
    if (window.innerWidth <= 500) {
      this.logoutBtnWidth = "120px";
    }
  },
};
</script>

<style lang="scss" scoped>
#navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 0;
  padding-right: 85px;
  padding-left: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 221px;
  height: 34px;
}

@media (max-width: 1100px) {
  #navbar {
    padding-right: 30px;
    padding-left: 30px;
  }
}
@media (max-width: 400px) {
  #navbar {
    padding-right: 20px;
    padding-left: 20px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .logout {
    margin-top: 10px;
  }
}
</style>