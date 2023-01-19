<template>
  <section class="sign-in">
    <auth-component
      :title="'Sign In'"
      :questionText="'Don’t have an account yet?'"
      :link="'Sign Up'"
      :isBtnActive="isBtnActive"
      @auth="handleSubmit"
    >
      <auth-input
        :label="'Email'"
        :inputId="'email'"
        type="email"
        v-model="form.email"
        :error="errors.emailError"
        @input="checkEmail"
      />
      <auth-input
        :label="'Password'"
        :inputId="'password'"
        :type="passType"
        v-model="form.pass"
        :error="errors.passError"
        @input="checkPass"
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

    <Transition name="modal">
      <div v-if="showModal" class="modal">
        <p class="modal__text">Wrong email or password</p>
        <button
          type="button"
          class="modal__close-btn"
          @click="handleClickModal"
        />
      </div>
    </Transition>
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
      errors: {
        emailError: "",
        passError: "",
      },
      passType: "password",
      showModal: false,
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  methods: {
    handlePass() {
      this.passType === "password"
        ? (this.passType = "text")
        : (this.passType = "password");
    },
    handleClickModal() {
      this.showModal = false;
    },
    checkEmail(evt) {
      if (this.user.email !== evt.target.value) {
        this.showModal = true;
        this.errors.emailError = " ";
      } else {
        this.errors.emailError = "";
        this.handleClickModal();
      }
    },
    checkPass(evt) {
      if (this.user.pass !== evt.target.value) {
        this.showModal = true;
        this.errors.passError = " ";
      } else {
        this.errors.passError = "";
        this.handleClickModal();
      }
    },
    handleSubmit() {
      this.$router.push("/main");

      this.form = {
        email: "",
        pass: "",
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
  
<style lang="scss" scoped>
@import "../assets/variables.scss";

.sign-in {
  width: 100%;
}

.modal {
  background-color: $error;
  width: 90%;
  height: 48px;
  border-radius: 24px;
  position: absolute;
  bottom: 17px;
  left: 13px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #ffffff;
  }

  &__close-btn {
    background-image: url("../assets/images/closeBtn.svg");
    width: 11px;
    height: 11px;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 18px;
    right: 18px;
    transition: $hover-animate;
  }

  &__close-btn:hover {
    opacity: 0.7;
    transition: $hover-animate;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: transform 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  transform: translateY(100px);
  transition: transform 0.5s ease;
}
</style>