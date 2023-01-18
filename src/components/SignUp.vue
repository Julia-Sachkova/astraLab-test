<template>
  <section class="sign-up">
    <auth-component
      :title="'Sign Up'"
      :questionText="'Already have an account?'"
      :link="'Sign In'"
    >
      <auth-input
        :label="'Full name'"
        :inputId="'full-name'"
        type="text"
        v-model="form.fullName"
      />
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
          class="input__question"
          src="../assets/images/question.svg"
          alt="подробнее."
        />
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
      <auth-input
        :label="'Repeat password'"
        :inputId="'re-password'"
        :type="rePassType"
        v-model="form.rePass"
      >
        <img
          class="input__eye"
          v-if="rePassType === 'password'"
          src="../assets/images/eye.svg"
          alt="показать."
          @click="handleRePass"
        />
        <img
          class="input__eye"
          v-else
          src="../assets/images/eyeOpen.svg"
          alt="скрыть."
          @click="handleRePass"
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
        fullName: "",
        email: "",
        pass: "",
        rePass: "",
      },
      passType: "password",
      rePassType: "password",
    };
  },
  methods: {
    handlePass() {
      this.passType === "password"
        ? (this.passType = "text")
        : (this.passType = "password");
    },
    handleRePass() {
      this.rePassType === "password"
        ? (this.rePassType = "text")
        : (this.rePassType = "password");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

.sign-up {
  width: 100%;
}

.input__eye {
  width: 18px;
  height: 15px;
  position: absolute;
  right: 15px;
  top: 30px;
}

.input__question {
  opacity: 0.2;
  width: 12px;
  height: 12px;
  position: absolute;
  right: 18px;
  transition: $hover-animate;
}

.input__question:hover {
  opacity: 0.5;
  transition: $hover-animate;
}
</style>