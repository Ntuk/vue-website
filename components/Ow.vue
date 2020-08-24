<template>
  <div>
    <div>
      {{ info }}
      <br/>
      <button v-on:click="fetchInfo()">asjfajsf</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      info: null,
    }
  },
  mounted () {
    axios
      .get('https://ow-api.com/v1/stats/pc/eu/Nightfrost-2688/profile')
      .then(response => (this.info = response.data))
  },
  methods: {
    fetchInfo() {
      console.log(this.info);
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
