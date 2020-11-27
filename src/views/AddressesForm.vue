<template>
  <v-container text-xs-center>
    <v-row wrap justify-center>
      <v-col xs12>
        <h1>連絡先編集</h1>
      </v-col>

      <v-col xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
               <v-text-field v-model="address.name" label="名前"></v-text-field>
               <v-text-field v-model="address.tel" label="電話番号"></v-text-field>
               <v-text-field v-model="address.email" label="メールアドレス"></v-text-field>
               <v-text-field v-model="address.address" label="住所"></v-text-field>
               <v-btn @click="$router.push({ name: 'addresses' })">キャンセル</v-btn>
               <v-btn color="info" @click="submit">保存</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      address: {}
    }
  },
  created() {
    console.log("s")
    if (!this.$route.params.address_id) return

    const address = this.$store.getters.getAddressById(this.$route.params.address_id)
    console.log(address)
    if(address) {
        console.log("aa")
        this.address = address
    }else{
        this.$router.push({ name: "addresses"})
    }
  },
  methods: {
      submit(){
          this.addAddress(this.address)
          this.$router.push({ name: 'addresses' })
          this.address = {}
      },
      ...mapActions(['addAddress'])
  }
}
</script>