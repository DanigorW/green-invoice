<template>
  <div id="user-info">
    <div class="container">
      <div class="user-info-content">
        <div class="header">
          <h1>
            פרטי חשבון של
            {{ GET_USER_DATA[0].billingBusinessName.toUpperCase() }}
          </h1>
        </div>

        <div class="user-info-data">
          <div class="first-name data">
            <span>שם פרטי: {{ GET_USER_DATA[0].firstName }}</span>
          </div>
          <div class="last-name data">
            <span>שם משפחה: {{ GET_USER_DATA[0].lastName }}</span>
          </div>
          <div class="id data">
            <span>ת"ז: {{ GET_USER_DATA[0].idNumber }}</span>
          </div>
          <div class="phone data">
            <span>פלאפון: {{ GET_USER_DATA[0].phone }}</span>
          </div>
          <div class="email data">
            <span>אמייל: {{ GET_USER_DATA[0].email }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["GET_USER_DATA"]),
  },
};
</script>

<style lang="scss" scoped>
#user-info {
  background: linear-gradient(120deg, $green-color 50%, $white 50%);
  min-height: 100vh;
  height: 100%;
  padding-top: 100px;
  padding-right: 85px;
}

.header h1 {
  font-size: 55px;
}

.data span {
  font-size: 23px;
}

@media (max-width: 1400px) {
  #user-info {
    background: linear-gradient(90deg, $green-color 50%, $white 50%);
  }
}
@media (max-width: 1100px) {
  #user-info {
    background: none;
    padding-right: 0px;
  }

  .header h1 {
    line-height: 58px;
  }

  .user-info-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 435px;
    width: 100%;
    margin: 0 auto;
    padding: 0px 20px;
  }

  .user-info-data {
    margin-left: auto;
  }
}

@media (max-width: 500px) {
  #user-info {
    padding-top: 150px;
  }
}
</style>