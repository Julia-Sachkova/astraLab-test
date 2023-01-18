<template>
  <section class="main">
    <h1 class="main__title">Hello, {{ name }}!</h1>
    <img class="main__img" src="../assets/images/woman2.png" alt="девушка." />
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  mounted() {
    if (this.user) {
      this.name = this.user.fullName;
    } else {
      this.$router.push("/sign-in");
    }
  },
};
</script>

<style lang="scss">
.main {
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
    text-align: center;
    margin-top: 160px;
  }

  &__img {
    position: absolute;
    bottom: 0;
  }
}
</style>