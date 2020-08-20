<template>
    <div class="wrapper">
      <div class="card">
        <a target="_blank" :href="navigateTo">
          <div class="card-image">
            <figure class="image is-4by2">
              <img :src="image" alt="Placeholder image">
            </figure>
          </div>
          <div v-if="navigateTo != ''" class="card-content">
            <a target="_blank" :href="navigateTo"><i class="fab fa-github" fa-rotate-270 style="line-height:inherit;padding-right:1rem;"></i> Project in Github</a>
          </div>
        </a>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    requirements: {
      type: Array,
      default: null
    },
    navigateTo: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      required: false
    }
  }
}
</script>
<style scoped lang="scss">
  .card-content {
    padding: 0;
    display: flex;
    justify-content: center;
    margin: 1rem 0;

    a {
      color: #f39c12;

      &:hover {
        color: #e67e22;
      }
    }
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

  a {
    color: #12e4f3;
    font-family: 'Shadows Into Light', cursive;
    font-size: 22px;
    letter-spacing: 2px;
    font-weight: bold;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
  }
}
.card {
  z-index: 9999;
  min-width: 430px;
  height: 100%;
  padding: 5px;
  border-radius: 5px;
  .title {
    color: gray;
  }
  .subtitle {
    color: gray;
  }
  .project-features {
    font-size: 17px;
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
  // transform: translateX(-60px) rotateY(-10deg) rotateX(5deg) scale(1.03);
  transform: translateX(10px) rotateY(25deg) rotateX(10deg);
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
  // transition: .3s transform cubic-bezier(.25,.46,.45,1);
}
</style>