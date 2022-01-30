<template>
  <div id="button">
    <button
      v-if="ctaType === 'submit'"
      @click="$emit('click', 'submitForm')"
      :style="{ fontSize: fontSize, width: width, height: height }"
    >
      {{ text }}
    </button>

    <button
      v-if="ctaType === 'logout'"
      @click="$emit('click', 'logout')"
      :style="{
        fontSize: fontSize,
        width: width,
        height: height,
        background: bg,
        border: border,
        color: color,
      }"
    >
      {{ text }}
    </button>

    <button
      class="google"
      v-if="ctaType === 'google'"
      @click="$emit('click', 'submitForm')"
      :style="{
        fontSize: fontSize,
        width: width,
        height: height,
        background: bg,
        border: border,
        color: color,
      }"
    >
      <span>{{ text }}</span>
      <span
        ><img class="google-icon" src="@/assets/homePage/Google_G.svg" alt=""
      /></span>
    </button>

    <router-link v-if="ctaType === 'redirect'" :to="{ name: redirectTo }">
      <button
        :style="{
          fontSize: fontSize,
          width: width,
          height: height,
        }"
      >
        {{ text }}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    text: {
      require: true,
    },

    fontSize: {
      require: true,
    },

    width: {
      require: true,
    },
    height: {
      require: true,
    },
    ctaType: {},
    redirectTo: {},
    bg: {},
    border: {},
    color: {},
  },
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  border: none;
  outline: none;
  color: $white;
  border-radius: 50px;
  background: $green-color;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}
.google {
  display: flex;
  justify-content: center;
  align-items: center;

  .google-icon {
    width: 24px;
    margin-top: 5px;
    margin-right: 10px;
  }
}

@media (max-width: 500px) {
  .google {
    margin-top: 20px;
  }
}
</style>