<template>
  <div>
    <section class="section">
      <div class="contact-page">
          <div class="container">
            <div class="is-flexible">
              <h1 class="title">Get in touch!</h1>
            </div>
            <form class="vue-form" @submit.prevent="submit">
            <fieldset>
              <div>
                <label class="label" for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="For example: Malcolm Function" required="" v-model="name">
              </div>
              <div>
                <label class="label" for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter Your e-mail address" required=""
                      :class="{ email , error: !email.valid }"
                      v-model="email.value">
              </div>
              <div class="error-message">
                <p v-show="!email.valid">Oh, please enter a valid email address.</p>
              </div>
              <div>
                <label class="label" for="textarea">Message</label>
                <textarea class="message" name="textarea" id="textarea" placeholder="Write your message here" required="" 
                          v-model="message.text" 
                          :maxlength="message.maxlength"></textarea>
                <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
              </div>
              <div>
                <input type="submit" @click="sendMessage" class="button" value="Submit Form">
              </div>
            </fieldset>
          </form>
          </div>
      </div>
    </section>   
  <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/shared/Footer'
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export default {
  data: function() {
    return {
      name: '',
      email: {
        value: '',
        valid: true
      },
      message: {
        text: '',
        maxlength: 8000
      },
      submitted: false
    };
  },
  components: {
    Footer
  },
  methods: {
    // submit form handler
    submit: function() {
      this.submitted = true;
    },
    sendMessage() {
      let contactData = {
        name: this.name,
        email: this.email.value,
        message: this.message.text
      }
      this.$store.dispatch('contact/createContact', contactData)
        .then(this.$router.push(`/`))
        .then(this.$toasted.success('Your message was successfully sent!', {duration: 5000}))
    },
    // validate by type and value
    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    // check for valid email adress
    isEmail: function(value) {
      return emailRegExp.test(value);
    },
    // check or uncheck all
    checkAll: function(event) {
      this.selection.features = event.target.checked ? this.features : [];
    }
  },
  watch: {
    // watching nested property
    "email.value": function(value) {
      this.validate("email", value);
    }
  },
  head: {
    title: 'Contact me | Nico Tukiainen'
  }
}
</script>
<style scoped lang="scss">
  .hero-footer.footer.footer-custom{
    position: absolute !important; 
    bottom: 0!important; 
    width: 100%!important;  
  }
  .contact-page {
    padding-top: 80px;
    max-width: 800px;
    margin: 0 auto 5rem auto;
    font-size: 25px;
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }
  .is-flexible {
  display: inline-flex;
  flex-wrap: nowrap;
  width: 100%;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header {
    position: relative;
    height: 150px;
    padding-top: 60px;
  }

  header h1 {
    text-align: center;
    font-size: 16px;
  }
  .vue-form fieldset {
    margin: 24px 0 0 0;
  }
  .vue-form legend {
    padding-bottom: 10px;
    border-bottom: 1px solid #ecf0f1;
    font-size: 32px;
  }
  .vue-form div {
    position: relative;
    margin: 20px 0;
  }
  .vue-form h4,
  .vue-form .label {
    color: #94aab0;
    margin-bottom: 10px;
  }
  .vue-form .label {
    display: block;
  }
  .vue-form input,
  .vue-form textarea,
  .vue-form label {
    color: #2b3e51;
  }
  .vue-form input[type="text"],
  .vue-form input[type="email"],
  .vue-form textarea,
  .vue-form legend {
    display: block;
    width: 100%;
    appearance: none;
  }
  .vue-form input[type="text"],
  .vue-form input[type="email"],
  .vue-form textarea {
    padding: 12px;
    border: 1px solid #cfd9db;
    background-color: #ffffff;
    border-radius: 0.25em;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
  }
  .vue-form input[type="text"]:focus,
  .vue-form input[type="email"]:focus,
  .vue-form textarea:focus {
    outline: none;
    border-color: #e67e22;
    box-shadow: 0 0 5px #e67e22;
  }
  .vue-form textarea {
    min-height: 120px;
    resize: vertical;
    overflow: auto;
  }
  .vue-form input[type="submit"] {
    border: none;
    background: #ecf0f1;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    color: #e67e22;
    float: right;
    cursor: pointer;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    appearance: none;

    &:hover {
      background-color: #f4f5f5;
      border: 1px solid #e67e22;
    }
  }
  .no-touch .vue-form input[type="submit"]:hover {
    background: #42a2e1;
  }
  .vue-form input[type="submit"]:active {
    transform: scale(0.9);
    border: 1px solid #e67e22;
    outline: none;
  }
  .vue-form .error-message {
    height: 26px;
    margin: 0px;
  }
  .vue-form .error-message p {
    display: flex;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 0.75rem;
    border: solid 1px red;
    background-color: pink;
    font-size: 14px;
  }
  .vue-form .error {
    border-color: #e94b35 !important;
  }
  .vue-form .counter {
    background-color: #ecf0f1;
    position: absolute;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    right: 0px;
    top: 0px;
    font-size: 10px;
    padding: 4px;
  }

  @-webkit-keyframes cd-bounce {
    0%,
    100% {
      -webkit-transform: scale(1);
    }
    50% {
      -webkit-transform: scale(0.8);
    }
  }
  @-moz-keyframes cd-bounce {
    0%,
    100% {
      -moz-transform: scale(1);
    }
    50% {
      -moz-transform: scale(0.8);
    }
  }
  @keyframes cd-bounce {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
}
</style>