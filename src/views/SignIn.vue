<template>
  <div class="signinpage">
    <SignInForm />
    <SignUpForm />
  </div>
</template>

<script>
import SignInForm from '@/components/SignIn/SignInForm.vue'
import SignUpForm from '@/components/SignIn/SignUpForm.vue'
// @ is an alias to /src

export default {
  name: 'SignIn',
  components: {
    SignInForm,
    SignUpForm
  }
}
</script>

<style lang="scss" scoped>
.signinpage {
  font-size: 24px;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
}
</style>
