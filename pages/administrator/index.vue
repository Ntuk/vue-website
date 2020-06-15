<template>
  <div class="administrator-page">
    <administrator-header 
      title="Choose a page to admin"
      exitLink="/"
    />
    <div class="centered">
      <div class="columns">
        <!-- Go to /administrator/projects -->
        <div class="box" @click="() => $router.push('/administrator/projects')">
          <div>
            Projects
          </div>
        </div>
        <!-- Go to /administrator/blogs -->
        <div class="box" @click="() => $router.push('/administrator/blogs')">
          <div>
            Blogs
          </div>
        </div>
        <!-- Go to /administrator/heroes -->
        <div class="box" @click="() => {}">
          <div>
            Heroes
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdministratorHeader from '~/components/shared/Header'
export default {
  layout: 'administrator',
  components: {
    AdministratorHeader
  }
}
</script>
<style scoped lang="scss">
  .administrator-page {
    .centered {
      margin-top: 100px;
      display: flex;
      flex-direction: row;     /* make main axis horizontal (default setting) */
      justify-content: center; /* center items horizontally, in this case */
      align-items: center;     /* center items vertically, in this case */
    }
  }
  .box {
    height: 300px;
    width: 300px;
    display: flex;
    margin: 5px;
    justify-content: center;
    &:hover {
      cursor: pointer;
      background-color: #58529f;
      color: white;
      transition: background-color 0.3s ease-out;
    }
    > div {
      align-self: center;
      font-size: 50px;
      font-weight: bold;
    }
  }
</style>