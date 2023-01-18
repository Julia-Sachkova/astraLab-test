<template>
  <div class="auth">
    <h1 class="auth__title">{{ title }}</h1>

    <form class="auth__form">
      <slot></slot>
      <button type="submit" class="auth__btn">{{ title }}</button>
    </form>

    <p class="auth__question">{{ questionText }}</p>
    <a class="auth__link" :href="toLink">{{ link }}</a>
  </div>
</template>

<script>
export default {
  name: "auth-component",
  props: {
    title: String,
    questionText: String,
    link: String,
  },
  data() {
    return {
      toLink: "",
    };
  },
  mounted() {
    this.link === "Sign Up"
      ? (this.toLink = "#sign-up")
      : (this.toLink = "#sign-in");
  },
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title {
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 1.36;
    letter-spacing: 0.02em;
    color: #181c43;
    margin: 65px auto 20px;
  }

  &__form {
    width: 90%;
    background-color: #ffffff;
    border-radius: 40px;
    padding: 23px 22px 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }

  &__btn {
    width: 100%;
    background-color: $dark;
    height: 48px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #ffffff;
    border: none;
    margin-top: 19px;
    opacity: 0.4;
  }

  &__question,
  &__link {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: $dark;
    margin-top: 20px;
  }

  &__link {
    text-decoration: underline;
    margin-top: 0px;
  }
}
</style>
