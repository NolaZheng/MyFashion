<template>
  <div class="sign-up">
    <h2 class="title">I do not have a account</h2>
    <span>Sign up with your email and password</span>

    <form class="sign-up-form" @submit.prevent="onSubmit">
      <div class="group">
        <input
          class="form-input"
          id="name"
          name="name"
          type="text"
          v-model="name"
          required
        />
        <label class="form-input-label" :class="[name ? 'shrink' : '']">
          Name
        </label>
      </div>

      <div class="group" :class="{ invalid: $v.email.$error }">
        <input
          class="form-input"
          id="email"
          name="email"
          type="text"
          v-model="email"
          @input="$v.email.$touch()"
        />
        <label class="form-input-label" :class="[email ? 'shrink' : '']">
          Email
        </label>
        <span v-if="!$v.email.email">Please enter a valid email</span>
      </div>

      <div class="group">
        <input
          class="form-input"
          id="password"
          name="password"
          type="password"
          v-model="password"
          required
        />
        <label class="form-input-label" :class="[password ? 'shrink' : '']">
          Password
        </label>
      </div>

      <div class="group">
        <input
          class="form-input"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          v-model="confirmPassword"
          required
        />
        <label
          class="form-input-label"
          :class="[confirmPassword ? 'shrink' : '']"
        >
          Confirm Password
        </label>
      </div>

      <button type="submit" class="custom-button">
        SIGH UP
      </button>
    </form>
  </div>
</template>

<script>
import { required, minLength, between, email } from 'vuelidate/lib/validators'

export default {
  name: 'SignUpForm',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    onSubmit() {
      const signUpData = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      }
      if (this.password === this.confirmPassword) {
        console.log(signUpData)
        this.$store.dispatch('signup', signUpData)
      } else {
        alert('Not correct!')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.group.invalid {
  & input {
    border: 1px solid red;
    background-color: #ffc9aa;
  }

  & label {
    color: red;
  }

  & .shrink {
    color: red !important;
  }
}

.sign-up {
  display: flex;
  flex-direction: column;
  width: 380px;

  .title {
    margin: 10px 0;
  }
}
$sub-color: grey;
$main-color: black;

@mixin shrinkLabel {
  top: -22px;
  font-size: 16px;
  color: $main-color;
}

.group {
  position: relative;
  margin: 45px 0;

  .form-input {
    background: none;
    background-color: white;
    color: $sub-color;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid $sub-color;
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      @include shrinkLabel();
    }
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: $sub-color;
    font-size: 20px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      @include shrinkLabel();
    }
  }
}
.custom-button {
  min-width: 160px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
}
</style>
