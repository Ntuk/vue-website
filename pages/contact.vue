<template>
  <div>
    <section class="section">
      <div class="contact-page">
        <p class="title">get in touch</p>
        <div class="wrapper">
          <div class="card">
            <div class="is-flexible">
              <h4 class="title enclosed">through either social media..</h4>
              <div>
                <span class="icon">
                  <a target="_" href="https://github.com/Ntuk"><i class="fab fa-github fa-lg" fa-rotate-270></i></a>
                </span>
              </div>
              <div>
                <span class="icon">
                  <a target="_" href="https://www.facebook.com/nico.tukiainen"><i class="fab fa-facebook fa-lg"></i></a>
                </span>
              </div>
              <div>
                <span class="icon">
                  <a target="_" href="https://www.instagram.com/nicotuk/"><i class="fab fa-instagram fa-lg"></i></a>
                </span>
              </div>
              <div>
                <span class="icon">
                  <a target="_" href="https://discordapp.com/users/ntuk#2369"><i class="fab fa-discord fa-lg"></i></a>
                </span>
              </div>
              <div>
                <span class="icon">
                  <a target="_" href="https://www.linkedin.com/in/nico-tukiainen-a97442131/"><i class="fab fa-linkedin fa-lg"></i></a>
                </span>
              </div>
            </div>
            <div class="is-flexible">
              <h4 class="title enclosed">e-mail..</h4>
              <div>
                <span class="icon">
                  <a target="_" href="mailto:nico.tukiainen@gmail.com"><i class="fa fa-envelope fa-lg" fa-rotate-270></i></a>
                </span>
              </div>             
            </div>
            <div class="is-flexible">
              <h4 class="title enclosed">or the form below!</h4>            
            </div>
            <form class="vue-form" @submit.prevent="submit">
            <fieldset>
              <div>
                <label class="form-title" for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="For example: Malcolm Function" required="" v-model="name">
              </div>
              <div>
                <label class="form-title" for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter Your e-mail address" required=""
                      :class="{ email , error: !email.valid }"
                      v-model="email.value">
              </div>
              <div class="error-message">
                <p v-show="!email.valid">Oh, please enter a valid email address.</p>
              </div>
              <div>
                <label class="form-title" for="textarea">Message</label>
                <textarea class="message" name="textarea" id="textarea" placeholder="Write your message here" required="" 
                          v-model="message.text" 
                          :maxlength="message.maxlength"></textarea>
                <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
              </div>
              <div>
                <input type="submit" @click="sendMessage" class="button" style="background: #000;color:rgba(249, 198, 26, 1);padding:0 1rem;display:inline-block;border:0;" value="Submit Form">
              </div>
            </fieldset>
          </form>
          </div>
        </div>
      </div>
    </section>   
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
.contact-page {
  flex: 1;
  padding-top: 14rem;
  position: relative;
  max-width: 1000px;
  margin: 0 auto 5rem auto;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;

  hr {
    background-color: transparent;
  }

  //tablets, big phones
  @media only screen and (min-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  // xs-devices, phones
  @media only screen and (max-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.title {
  color: #f39c12;
  font-family: 'Shadows Into Light', cursive;
  font-size: 30px;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
}
.form-title {
  color: rgba(249, 198, 26, 1);
  font-family: 'Shadows Into Light', cursive;
  font-size: 26px;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
}
.card {
  padding: 2rem;
  border-radius: 5px;
  grid-area: 1 / 1;
  transform: translateX(10px) rotateY(25deg) rotateX(10deg);
  // transform: translateX(-60px) rotateY(-30deg) rotateX(15deg) scale(1.03);
  background: rgba(243, 156, 18, 0.88);
  padding: 30px;
  color: #000;
  backface-visibility: hidden;
  box-shadow: 0 10px 30px -3px rgba(0,0,0,.1);

  a {
    color: #12e4f3;
    font-family: 'Shadows Into Light', cursive;
    font-size: 22px;
    letter-spacing: 2px;
    font-weight: bold;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
  }
}
.icon {
  padding: 0 1rem;
  &:hover {
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
    color: rgb(229, 244, 248);

    a {
      transform-origin: center;
      will-change: transform;
      transform: scale(1.2);
      transition: 0.3s;
      color: white;
    }
  }
}
//flip
.wrapper {
  position: relative;
  perspective: 80em;
  display: grid;
  transform-style: preserve-3d;
  border-radius: 5px;
}
.card .enclosed {
  background: #000;
  color: rgba(249, 198, 26, 1);
  padding: 0 1rem;
  display: inline-block;
  transform-origin: right center;
}
.wrapper:before {
  border-radius: 5px;
  --bw: 9px;
  grid-area: 1 / 1;
  content: '';
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
  margin-top: calc(-1 * var(--bw));
  margin-left: calc(-1 * var(--bw));
  background: transparent;
  transform: translateX(-60px) rotateY(-30deg) rotateX(0deg) scale(1.03);
  pointer-events: none;
  border: var(--bw) solid #000;
  box-sizing: content-box;
}

.wrapper:hover > div,
.wrapper:hover:before {
  transform: none;
}

.wrapper > div,
.wrapper:before {
  will-change: transform;
  transition: .3s transform cubic-bezier(.25,.46,.45,1);
}
.is-flexible {
  display: inline-flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
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
.container {
  padding: 2rem;
  border: 1px dashed #f1c40f;
  border-radius: 5px;
  background-color: rgba(189, 195, 199, 0.3);
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
  color: #7f8c8d;
  margin-bottom: 10px;
}
.vue-form .label {
  display: block;
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
  background-color: #fff4ea;
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