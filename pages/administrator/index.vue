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
            Ramblings
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
      <h1 class="title">Messages</h1>
    </div>
    <div class="centered" style="margin-top: 20px;">
      <table class="heroes-table table is-responsive">
        <thead>
          <tr class="main-table-row">
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="contact in contacts"
            :key="contact._id"
            class="table-row"
          >
            <td>{{contact.name || 'Not Set'}}</td>
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
      return this.$store.state.contact.items
    }
  },
  async fetch({store}) {
    await store.dispatch('contact/fetchContacts')
      .then(console.log('great success! ', store.state.contact))
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
  .title {
    align-self: center;
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 50px;
    color: #4a4a4a;
  }
  .table {
    margin: 20px;
    border-radius: 6px;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  }
</style>