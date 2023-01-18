<template>
  <div class="input">
    <label class="input__label" :for="inputId">{{ label }}</label>
    <input
      class="input__item"
      :class="{ input__item_error: error !== '' }"
      required="true"
      :type="type"
      :id="inputId"
      :value="modelValue"
      @input="updateInput"
    />
    <p class="input__error">{{ error }}</p>
    <slot></slot>
  </div>
</template>
  
<script>
export default {
  name: "auth-input",
  props: {
    label: String,
    inputId: String,
    type: String,
    modelValue: [String, Number],
    error: String,
    signIn: Boolean,
  },
  methods: {
    updateInput(evt) {
      this.$emit("update:modelValue", evt.target.value);
    },
  },
};
</script>
  
<style lang="scss">
@import "../assets/variables.scss";

.input {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4px;
  position: relative;

  &:last-of-type {
    margin: 0;
  }

  &__label {
    margin-left: 18px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.67;
    color: rgba(0, 0, 0, 0.8);
  }

  &__item {
    background-color: #f3f3fa;
    border-radius: 20px;
    width: 100%;
    border: none;
    height: 36px;
    padding: 0 18px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 20px;

    &_error {
      background-color: rgba(255, 102, 131, 0.2);
    }
  }

  &__item:focus-visible {
    outline: none;
  }

  &__error {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 2;
    color: $error;
    position: absolute;
    left: 18px;
    top: 58px;
  }
}
</style>