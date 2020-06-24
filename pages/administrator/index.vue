<template>
  <div class="administrator-page">
    <administrator-header 
      title="Choose a page to admin"
      exitLink="/"
    />
    <div class="centered">
      <div class="columns">
        <!-- Go to /administrator/projects -->
        <div class="box" @click="$router.push('/administrator/projects')">
          <div>
            Projects
          </div>
        </div>
        <!-- Go to /administrator/blogs -->
        <div class="box" @click="$router.push('/administrator/blogs')">
          <div>
            Blogs
          </div>
        </div>
        <!-- Go to /administrator/heroes -->
        <div class="box" @click="$router.push('/administrator/heroes')">
          <div>
            Heroes
          </div>
        </div>
      </div>
    </div>
    <div class="centered">
      <h1 class="title">Contacts</h1>
      <portal-target
        v-for="contact in contacts"
        :key="contact._id"/>
      <table class="heroes-table table is-responsive">
        <thead>
          <tr class="main-table-row">
            <th>Image</th>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="contact in contacts"
            :key="contact._id"
            class="table-row"
          >
            <td>{{contact.name|| 'Not Set'}}</td>
            <td>{{contact.email || 'Not Set'}}</td>
            <td>{{contact.message || 'Not Set'}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import AdministratorHeader from '~/components/shared/Header'
export default {
  layout: 'administrator',
  components: {
    AdministratorHeader
  },
  computed: {
    contacts() {
      return this.$store.state.contact.item
    }
  },
  async fetch({store}) {
    // await store.dispatch('contact/fetchContacts')
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