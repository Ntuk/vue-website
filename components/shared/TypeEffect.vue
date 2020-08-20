<template>
  <div class="container">
    <h1>I am
      <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
    </h1>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
  export default {
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['Developer', 'Team player', 'Tech lover', 'Gamer', 'Food fanatic', 'Coder', 'Optimist'],
        typingSpeed: 100,
        erasingSpeed: 150,
        newTextDelay: 1500,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  h1 {
    font-family: 'Shadows Into Light', cursive;
    letter-spacing: 3px;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
    font-size: 3rem;
    font-weight: normal;

    span.typed-text {      
      font-weight: bold;
      color: #f9c61a;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    span.cursor {
      display: inline-block;
      margin-left: 3px;
      width: 4px;
      background-color: #ecf0f1;
      animation: cursorBlink 1s infinite;
    }

    span.cursor.typing {
      animation: none;
    }
  }

  @keyframes cursorBlink {
    49% { background-color: #ecf0f1; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
  }
</style>