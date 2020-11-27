<template>
    <h1>loading</h1>
</template>

<script>
import firebase from 'firebase/app'

export default {
  created () {
  },
  computed: {
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        console.log("Login!!")
        this.$router.push({ name: 'addresses' })

      } else {
        this.deleteLoginUser()
        this.$router.push({ name: 'home' })
      }
    })
  },
  methods: {
  }
}
</script>