<template>
  <section class="sign-up" @click="showPopup = false">
    <auth-component
      :title="'Sign Up'"
      :questionText="'Already have an account?'"
      :link="'Sign In'"
      :isBtnActive="isBtnActive"
      :form="form"
      @auth="handleSubmit"
    >
      <auth-input
        :label="'Full name'"
        :inputId="'full-name'"
        type="text"
        v-model="form.fullName"
        :error="''"
      />
      <auth-input
        :label="'Email'"
        :inputId="'email'"
        type="email"
        v-model="form.email"
        :error="errors.emailError"
        @input="validateEmail"
      />
      <auth-input
        :label="'Password'"
        :inputId="'password'"
        :type="passType"
        v-model="form.pass"
        :error="errors.passError"
        @input="validatePass"
      >
        <Transition name="popup">
          <div v-if="showPopup" class="popup">
            <p class="popup__text">
              Password must contain 8+ symbols, 1 special and 2 capital letters
            </p>
            <div class="popup__arrow" />
          </div>
        </Transition>

        <img
          class="input__question"
          src="../assets/images/question.svg"
          alt="подробнее."
          @click.stop="handleClickPopup"
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
        :error="errors.rePassError"
        @input="validateRePass"
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
      errors: {
        emailError: "",
        passError: "",
        rePassError: "",
      },
      passType: "password",
      rePassType: "password",
      showPopup: false,
    };
  },
  methods: {
    handleClickPopup() {
      this.showPopup = !this.showPopup;
    },
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
    validateEmail(evt) {
      //eslint-disable-next-line
      const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!reg.test(evt.target.value)) {
        this.errors.emailError = "Enter valid email";
      } else {
        this.errors.emailError = "";
      }
    },
    validatePass(evt) {
      const reg = /(?=.*[!@#$%^&*])(?=(?:.*[A-Z]){2,})[0-9a-zA-Z!@#$%^&*]{8,}/g;
      if (!reg.test(evt.target.value)) {
        this.errors.passError = "Enter valid password";
      } else {
        this.errors.passError = "";
      }
    },
    validateRePass(evt) {
      if (evt.target.value !== this.form.pass) {
        this.errors.rePassError = "Passwords don't match";
      } else {
        this.errors.rePassError = "";
      }
    },
    handleSubmit() {
      this.$router.push("/main");

      localStorage.setItem("user", JSON.parse(this.form));

      this.form = {
        fullName: "",
        email: "",
        pass: "",
        rePass: "",
      };
    },
  },
  computed: {
    isBtnActive() {
      return Object.values(this.errors).some((e) => e !== "") ||
        Object.values(this.form).includes("")
        ? false
        : true;
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

.popup {
  background-color: $dark;
  box-shadow: 0px 10px 36px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: absolute;
  top: -50px;
  right: 7px;
  max-width: 184px;

  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.4;
    text-align: center;
    letter-spacing: -0.4px;
    color: #f3f3f3;
    margin: 7px 11px;
  }

  &__arrow {
    background-color: $dark;
    width: 9px;
    height: 9px;
    transform: rotate(45deg);
    position: absolute;
    bottom: -3px;
    right: 12px;
    border-radius: 2px;
  }
}

.input__question:hover {
  opacity: 0.5;
  transition: $hover-animate;
}

.popup-enter-active,
.popup-leave-active {
  transition: transform 0.5s ease;
}

.popup-enter-from,
.popup-leave-to {
  transform: translateY(-30px);
  transition: transform 0.5s ease;
}
</style>