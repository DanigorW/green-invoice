<template>
  <div id="hero">
    <div class="container">
      <div class="hero-content">
        <div class="right">
          <div v-if="!GET_IS_LOADING">
            <div class="header">
              <h1>היי, טוב לראות אותך</h1>
              <div v-if="IS_THERE_ERROR_FROM_SERVER" class="error-from-sever">
                <span>{{ IS_THERE_ERROR_FROM_SERVER }}</span>
              </div>
            </div>
            <div>
              <transition name="fade">
                <div class="form-container">
                  <form @submit.prevent novalidate>
                    <Input
                      v-model.trim="userData.email.val"
                      :isValid="userData.email.isValid"
                      errorMessage="הזן כתובת תקינה"
                      controlType="input"
                      placeholder="מייל"
                      subHeader="כתובת המייל איתה נרשמת לחשבונית ירוקה"
                      @focus="clearValidity('email')"
                    />
                    <Input
                      v-model.trim="userData.password.val"
                      :isValid="userData.password.isValid"
                      errorMessage="סיסמה חייבת להיות 8 תווים לפחות"
                      type="email"
                      controlType="input"
                      placeholder="סיסמה"
                      subHeader="שכחת סיסמה?"
                      link="true"
                      @focus="clearValidity('password')"
                    />
                    <div class="btn-container hide-500">
                      <Button
                        type="submit"
                        @click="submitForm"
                        text="כניסה"
                        fontSize="18px"
                        height="56px"
                        width="228px"
                      />

                      <Button
                        type="google"
                        text="כניסה מהירה"
                        fontSize="18px"
                        height="56px"
                        width="172px"
                        bg="none"
                        border="1px solid #0084F4"
                        color="#0084F4"
                      />
                    </div>
                    <div class="btn-container show-500">
                      <Button
                        type="submit"
                        @click="submitForm"
                        text="כניסה"
                        fontSize="18px"
                        height="56px"
                        width="100%"
                      />

                      <Button
                        type="google"
                        text="כניסה מהירה"
                        fontSize="18px"
                        height="56px"
                        width="100%"
                        bg="none"
                        border="1px solid #0084F4"
                        color="#0084F4"
                      />
                    </div>
                  </form>
                </div>
              </transition>
            </div>
          </div>

          <transition name="fade">
            <div v-if="GET_IS_LOADING">
              <div class="header">
                <h1>אנחנו על זה!</h1>
                <Button
                  redirectTo="Welcome"
                  type="redirect"
                  fontSize="18px"
                  height="56px"
                  width="200px"
                  text="מעבר לחשבון"
                />
              </div>
            </div>
          </transition>
        </div>

        <div class="left">
          <img src="@/assets/homePage/green_login_page.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { mapActions, mapGetters, mapMutations } from "vuex";
import decounce from "@/mixins/debounce";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  validate,
} from "../../util/validators";
export default {
  mixins: [decounce],
  data() {
    return {
      userData: {
        email: {
          val: "",
          isValid: true,
          validators: [VALIDATOR_EMAIL()],
        },
        password: {
          val: "",
          isValid: true,
          validators: [VALIDATOR_MINLENGTH(3)],
        },
      },

      formIsValid: true,
    };
  },

  computed: {
    ...mapGetters([
      "GET_USER_DATA",
      "IS_THERE_ERROR_FROM_SERVER",
      "GET_IS_LOADING",
    ]),
  },

  methods: {
    ...mapActions(["LOGIN"]),
    ...mapMutations(["SET_IS_LOADING"]),
    clearValidity(fieldName) {
      this.userData[fieldName].isValid = true;
    },

    validateForm() {
      let checkFormIsValid = true;

      for (const fieldName in this.userData) {
        let fieldIsValid = validate(
          this.userData[fieldName].val,
          this.userData[fieldName].validators
        );
        this.userData[fieldName].isValid = fieldIsValid;
        checkFormIsValid = checkFormIsValid && fieldIsValid;
      }

      this.formIsValid = checkFormIsValid;
    },

    async submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      let formData = {};

      for (const fieldName in this.userData) {
        formData = {
          ...formData,
          [fieldName]: this.userData[fieldName].val,
        };
      }

      await this.LOGIN(formData);
    },
  },

  mounted() {
    this.LOGIN = this.debounceFunc(this.LOGIN, 500);
  },

  components: {
    Input: () =>
      import(
        /* webpackChunkName: 'Input' */ "@/components/reusableComponents/input/Input.vue"
      ),

    Button: () =>
      import(
        /* webpackChunkName: 'Button' */ "@/components/reusableComponents/button/Button.vue"
      ),
  },

  beforeDestroy() {
    this.SET_IS_LOADING(false);
  },
};
</script>

<style lang="scss" scoped>
#hero {
  min-height: 100vh;
  width: 100%;
  background: rgb(255, 220, 220);
  background: linear-gradient(
    90deg,
    rgba(255, 220, 220, 1) 50%,
    rgba(255, 255, 255, 1) 50%
  );
}

.show-500 {
  display: none;
}

.error-from-sever {
  color: $error-color;
  font-size: 18px;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  padding-top: 210px;
}

.left,
.right {
  flex: 50%;
}

.right {
  padding-right: 355px;
}

.left img {
  width: 708px;
}
.btn-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header h1 {
  font-size: 56px;
  color: $main-color;
}

.form-container {
  margin-top: 70px;
  max-width: 420px;
  width: 100%;

  .input-control {
    margin-bottom: 69px;
  }

  .show-500 {
    display: none;
  }
}

@media (max-width: 1800px) {
  .right {
    padding-right: 150px;
  }
}
@media (max-width: 1366px) {
  .right {
    padding-right: 85px;
  }

  .left img {
    width: 600px;
  }
}
@media (max-width: 1100px) {
  .left img {
    width: 500px;
  }

  .hero-content {
    padding-top: 120px;
    flex-wrap: wrap;
    justify-content: center;
  }

  #hero {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 60%,
      rgba(255, 220, 220, 1) 40%
    );
  }

  .left,
  .right {
    flex: 100%;
  }

  .right {
    padding-right: 0px;
    padding-bottom: 50px;
  }

  .left {
    text-align: center;
    padding-top: 50px;

    img {
      max-width: 400px;
      width: 100%;
      padding-top: 30px;
    }
  }

  .header {
    text-align: center;
  }

  .form-container {
    margin: 0 auto;
  }
}

@media (max-width: 501px) {
  .hide-500 {
    display: none;
  }

  .btn-container {
    flex-direction: column;
  }

  .header h1 {
    font-size: 38px;
    margin-bottom: 0px;
  }

  .form-container {
    max-width: 350px;
  }

  .show-500 {
    display: block !important;
  }
}

@media (max-width: 401px) {
  .form-container {
    max-width: 300px;
  }

  .left {
    display: none;
  }

  #hero {
    background: none;
  }
}
@media (max-width: 350px) {
  .form-container {
    max-width: 280px;
  }
}
</style>