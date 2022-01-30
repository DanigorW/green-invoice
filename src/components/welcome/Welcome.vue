<template>
  <div id="welcome">
    <div class="container">
      <div class="welcome-content">
        <div class="left">
          <div class="header">
            <h1>ברוך הבא {{ GET_USER_DATA[0].firstName }}</h1>
          </div>

          <div class="user-cta">
            <Button
              redirectTo="UserInfo"
              ctaType="redirect"
              fontSize="18px"
              height="56px"
              width="200px"
              text="פרטי משתמש"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["GET_USER_DATA"]),
  },

  components: {
    Button: () =>
      import(
        /* webpackChunkName: 'Button' */ "@/components/reusableComponents/button/Button.vue"
      ),
  },
};
</script>

<style lang="scss" scoped>
#welcome {
  background: linear-gradient(120deg, $green-color 50%, $white 50%);
  min-height: 100vh;
  height: 100%;
}
.welcome-content {
  padding-top: 210px;
  display: flex;
  justify-content: space-between;
}

.left,
.right {
  flex: 50%;
}
.left {
  padding-right: 85px;
}

.header h1 {
  font-size: 56px;
  color: #23445a;
}

.user-cta {
  margin-top: 50px;
}

@media (max-width: 1430px) {
  #welcome {
    background: linear-gradient(90deg, $green-color, $white 50%);
  }
}

@media (max-width: 850px) {
  #welcome {
    background: unset;
  }

  .welcome-content {
    padding-top: 210px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
  }

  .left {
    padding-right: 0px;
  }

  .user-cta {
    margin-top: 20px;
  }

  .welcome-content {
    padding-top: 100px;
  }
}

@media (max-width: 500px) {
  .welcome-content {
    padding-top: 150px;
  }
}
</style>