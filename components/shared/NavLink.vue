<template>
  <nuxt-link :to="to" :class="{'is-active': isActive}">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.to === this.$route.path
    }
  }
}
</script>

<style scoped lang="scss">
  .is-active {
    // border-bottom: 4px solid #e67e22;
    // border-left: 2px solid #e67e22;
    // border-right: 2px solid #e67e22;
    font-weight: bold;

    $red: #f39c12;
    $brown: #584E4A;
    $whitey: #f0f0f0;

    $duration: .2s;
    $distance: 8px;
    $easeOutBack: cubic-bezier(0.175, 0.885, 0.320, 1.275);

    a {
      position: relative;
      text-decoration: none;
      padding-bottom: 8px;

      &::before, &::after {
        content: '';
        height: 14px;
        width: 100%;
        position: absolute;
        transition: all .35s ease;
        opacity: 0;
      }

      &::before {
        content: '';
        right: 0;
        top: 0;
        border-top: 3px solid #f1c40f;
        border-right: 3px solid #f39c12;
        transform: translate(-100%, 50%);
      }

      &:after {
        content: '';
        left: 0;
        bottom: 0;
        border-bottom: 3px solid #f39c12;
        border-left: 3px solid #f1c40f;
        transform: translate(100%, -50%)
      }

      &:hover:before, &:hover:after {
        transform: translate(0,0);
        opacity: 1;
      }

      &:hover {
        color: #e67e22;
      }
    }
  }
</style>