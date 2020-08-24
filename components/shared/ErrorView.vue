<template>
  <div class="notFoundContainer">
    <div class="m-b-xxl">
      <h1 class="title">{{title}}</h1>
      <nuxt-link :to="navigateToPage" class="navig">{{navigateToText}}</nuxt-link>
    </div>
    <h2 class="title">{{status}}<span></span></h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    status: {
      required: true,
      type: String
    },
    navigateToPage: {
      required: true,
      type: String
    },
    navigateToText: {
      required: true,
      type: String
    }
  }
}
</script>

 <style scoped lang="scss">
.notFoundContainer {
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
.navig {
  color: #12e4f3;
  font-family: 'Shadows Into Light', cursive;
  font-size: 22px;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
}
.card {
  padding: 2rem;
  border-radius: 5px;
  grid-area: 1 / 1;
  transform: translateX(10px) rotateY(25deg) rotateX(10deg);
  background: rgba(243, 156, 18, 0.88);
  padding: 30px;
  color: #000;
  backface-visibility: hidden;
  box-shadow: 0 10px 30px -3px rgba(0,0,0,.1);

  &:hover {
    .avatar img {
      filter: grayscale(0%);
      transition: 1.5s;
    }
  }
}
.avatar {
  margin-right: 20px;
  float: left;
}
.avatar img {
  height: 128px;
  width: 128px;
  border-radius: 50%;
  border: 1px solid rgb(46, 86, 131);
  filter: grayscale(100%);
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
  line-height: 1;
  color: rgba(249, 198, 26, 1);
  padding: 0 5px;
  display: inline-block;
  transform: translate(-1px, 1px) scale(0.75);
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
  transform: translateX(-60px) rotateY(-30deg) rotateX(15deg) scale(1.03);
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

</style>
