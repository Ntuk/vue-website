<template>
  <section class="section">
    <div class="about-page">
      <p class="title">little bit about me</p>
      <div class="wrapper" :class="{'wrapper-transformation' : pageLoaded }">
        <div class="card" :class="{'transformation' : pageLoaded }">
          <figure class="avatar">
            <img src="https://nicotukiainen.com/legacy/images/portrait2.jpg">
          </figure>
          <p>Hello! My name is Nico Tukiainen. I am a Finnish Software Developer and I work for a Swedish company called Pagero. At Pagero we help companies streamline and digitalise their business processes and we aim to become the largest network between businesses worldwide. Learn more at <a target="_blank" href="https://www.pagero.com/">pagero.com</a>.
          <hr/>
          <p>I have only been working in the IT since October 2018 and before that I worked in the restaurant industry for 13 years. I am still quite novice but I'm lucky enough to be working with a team of very skilled and helpful Developers / Engineers. 
          Throughout my life, I have acquired advanced technical knowledge and that has helped me adapt to these new challenges.
          That being said, I am also an avid PC gamer. My favorite games of all time include such as Quake 2 (especially ActionQuake 2 -mod), Diablo series, World of Warcraft, Overwatch.</p>
          <hr/>
          <p>I also get excited about things easily, especially about technology. My long-term interests include programming, web design, 3d modeling, user experience, good food, martial arts, travelling, music and aforementioned PC gaming. I also enjoy an occasional craft beer or two every now and then.</p>
          <hr/>
          <p>I am currently writing my Thesis on Business IT in Haaga-Helia University of Applied Sciences about development and deployment of a Web component library for a case company.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Ow from '~/components/Ow'
export default {
  data() {
    return {
      pageLoaded: false,
    }
  },
  methods: {
    loadPage() {      
      this.pageLoaded = true
    }
  },
  mounted() {
    this.loadPage()
  },
  head: {
    title: 'Learn more about Nico Tukiainen | Nico Tukiainen'
  },
  components: {
    Ow
  }
}
</script>

 <style scoped lang="scss">
.about-page {
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
.card {
  padding: 2rem;
  border-radius: 5px;
  grid-area: 1 / 1;
  background: rgba(243, 156, 18, 0.88);
  padding: 30px;
  color: #000;
  backface-visibility: hidden;
  box-shadow: 0 10px 30px -3px rgba(0,0,0,.1);
  transform: translateX(16px) rotateY(32deg) rotateX(18deg);

  a {
    color: #12e4f3;
    font-family: 'Shadows Into Light', cursive;
    font-size: 22px;
    letter-spacing: 2px;
    font-weight: bold;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
  }
}
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
  transition: 1.6s transform cubic-bezier(.25,.46,.45,1);
}

.transformation {
  transform: none !important;
    .avatar img {
      filter: grayscale(0%);
      transition: 5s;
    }
}
.wrapper-transformation {
  &::before {
    transform: none !important;
  }
}

</style>