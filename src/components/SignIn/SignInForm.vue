<template>
  <div class="sign-in">
    <h2 class="title">I already have an account</h2>
    <span>Sign in with your email and password</span>

    <form @submit.prevent="onSubmit">
      <div class="group">
        <input
          class="form-input"
          id="email"
          name="email"
          type="email"
          v-model="email"
          required
        />

        <label class="form-input-label" :class="[email ? 'shrink' : '']">
          Email
        </label>
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
      <div class="buttons">
        <button type="submit" class="custom-button">Sign in</button>
        <button class="custom-button google-sign-in">
          Sign in with Google
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from '../../axios-auth'
// @ is an alias to /src

export default {
  name: 'SignInForm',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      const signInData = {
        email: this.email,
        password: this.password
      }
      console.log(signInData)
      axios
        .post('/accounts:signUp?key=AIzaSyDbSlPHSzcv49d3dtzZPR1Ld90_GaqMJ1Q', {
          email: signUpData.email,
          password: signUpData.password,
          returnSecureToken: true
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
.sign-in {
  width: 400px;
  display: flex;
  flex-direction: column;
  .title {
    margin: 10px 0;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
  }
}
$sub-color: grey;
$main-color: black;

@mixin shrinkLabel {
  top: -14px;
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

  &.google-sign-in {
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #2a72e6;
      border: none;
    }
  }
}
</style>
