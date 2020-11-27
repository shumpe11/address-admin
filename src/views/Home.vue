<template>
  <v-container text-xs-center>
    <v-row>
      <v-col cols="12" xs="12">
        <h1>マイアドレス帳</h1>
        <p>マイアドレス帳をご利用の方は、Googleアカウントでログインしてください。</p>
      </v-col>
      <v-col cols="12" xs="12" mt="5">
        <v-btn color="info" @click="login">Googleアカウントでログイン</v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  methods:{
  
  ...mapActions(['login'])
  }
}
</script>
