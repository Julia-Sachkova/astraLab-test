<template>
  <section class="enter">
    <h1 class="enter__title">Ready for a great User experience?</h1>
    <p class="enter__subtitle">Bring your media to the next level !</p>
    <div class="enter__btns">
      <RouterLink class="enter__btn" to="/sign-up">Sign Up</RouterLink>
      <RouterLink class="enter__arrow-btn" to="/sign-up" />
    </div>
    <img class="enter__img" src="../assets/images/woman1.png" alt="девушка." />
  </section>
</template>

<script>
</script>

<style lang="scss">
@import "../assets/variables.scss";

.enter {
  width: 100%;
  max-width: 320px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title {
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 1.36;
    letter-spacing: 0.02em;
    color: #181c43;
    margin-top: 65px;
    max-width: 220px;
  }

  &__subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: 0.02em;
    color: #3e4462;
    margin-top: 17px;
    max-width: 220px;
  }

  &__btns {
    display: flex;
    flex-direction: row;
    margin-top: 27px;
  }

  &__btn {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #000000;
    background-color: #ffffff;
    border-radius: 50px;
    text-decoration: none;
    padding: 14px 35px;
    transition: $hover-animate;
    margin-right: 16px;
  }

  &__btn:hover {
    opacity: 0.7;
    transition: $hover-animate;
  }

  &__arrow-btn {
    transition: $hover-animate;
    width: 48px;
    height: 48px;
    background-image: url("../assets/images/arrowRight.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-color: $dark;
    border-radius: 24px;
  }

  &__arrow-btn:hover {
    opacity: 0.7;
    transition: $hover-animate;
  }

  &__img {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>