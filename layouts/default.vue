<template>
  <div>
    <navbar />
    <nuxt class="contents" />
    <particles-bg 
      type="cobweb"
      color="#dce0e0"
      num="30"
      :bg="true" 
    />
  </div>
</template>
<script>
import AppFooter from '~/components/shared/Footer'
import Navbar from '~/components/shared/Navbar'
export default {
  components: {
    Navbar, AppFooter
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100% !important;
  background:
    linear-gradient(to bottom right, rgba(70,104,138,1) 15%, transparent),
    radial-gradient(circle at 100% 0%, rgba(70,104,138,1) 0%, transparent 20%) center center / 15px 15px,
    linear-gradient(to bottom right, rgba(52,73,94,1), rgba(52,73,94,1));
  background-attachment: fixed;
}

body {
  display: flex;
  flex-direction: column;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
