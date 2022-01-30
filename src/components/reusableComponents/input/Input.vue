<template>
  <div class="input-control">
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :class="{ errorBorder: !isValid, inputStyle }"
      :placeholder="placeholder"
      :type="type"
      @focus="$emit('focus')"
    />
    <span class="sub-header" v-if="subHeader && !link">
      {{ subHeader }}
    </span>

    <span class="sub-header" v-if="subHeader && link">
      <router-link :to="{ name: 'somePage' }">{{ subHeader }}</router-link>
    </span>

    <transition name="fade">
      <span v-show="!isValid" class="error">{{ errorMessage }}</span>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    value: {
      type: String,
      default: "",
    },

    controlType: {
      type: String,
      default: "input",
    },

    inputStyle: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      default: "text",
    },

    isValid: {
      type: Boolean,
      default: true,
    },

    errorMessage: {
      type: String,
      default: "",
    },

    placeholder: {
      type: String,
      default: "",
    },
    subHeader: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: $error-color;
  position: absolute;
  bottom: -20px;
  left: 0;
}

.input-control {
  position: relative;
}

.sub-header {
  font-size: 14px;
}

input {
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 18px;
  transition: all 0.3s;
  position: relative;
  border-bottom: 1px solid $main-color;
  height: 40px;
  background: none;
}

input:focus {
  border-bottom: 1px solid $green-color;
}

.errorBorder {
  border-bottom: 1px solid $error-color;
}
.errorBorder::placeholder {
  color: $error-color;
}

::placeholder {
  font-size: 18px;
  color: $main-color;
}

.sub-header a,
.sub-header {
  color: $main-color;
}

@media (max-width: 501px) {
  input {
    width: 100%;
  }

  .input-control {
    margin-bottom: 20px;
  }
}

@media (max-width: 400px) {
  input {
    width: 280px;
    padding-bottom: 10px;
  }

  .error {
    right: 0px;
    left: unset;
    top: 20px;
  }
}
@media (max-width: 350px) {
  input {
    width: 250px;
  }

  .error {
    left: 30px;
    top: 20px;
  }
}
</style>