<template>
  <section class="sign-in">
    <auth-component
      :title="'Sign In'"
      :questionText="'Don’t have an account yet?'"
      :link="'Sign Up'"
    >
      <auth-input
        :label="'Email'"
        :inputId="'email'"
        type="email"
        v-model="form.email"
      />
      <auth-input
        :label="'Password'"
        :inputId="'password'"
        :type="passType"
        v-model="form.pass"
      >
        <img
          class="input__eye"
          v-if="passType === 'password'"
          src="../assets/images/eye.svg"
          alt="показать."
          @click="handlePass"
        />
        <img
          class="input__eye"
          v-else
          src="../assets/images/eyeOpen.svg"
          alt="скрыть."
          @click="handlePass"
        />
      </auth-input>
    </auth-component>
  </section>
</template>
  
  <script>
import AuthComponent from "./AuthComponent.vue";
import AuthInput from "./AuthInput.vue";

export default {
  components: { AuthComponent, AuthInput },
  data() {
    return {
      form: {
        email: "",
        pass: "",
      },
      passType: "password",
    };
  },
  methods: {
    handlePass() {
      this.passType === "password"
        ? (this.passType = "text")
        : (this.passType = "password");
    },
  },
};
</script>
  
<style lang="scss">
.sign-in {
  width: 100%;
}
</style>