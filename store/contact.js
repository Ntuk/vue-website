import Vue from 'vue'

export const state = () => ({
  items: [],
  item: {}
})

export const actions = {
  fetchContacts({commit}) {
    return this.$axios.$get('/api/v1/contacts')
      .then(contacts => {
        commit('setItems', {resource: 'contact', items: contacts}, {root: true})
        return state.items
    })
  },

  createContact(_, contactData) {
    return this.$axios.$post('/api/v1/contacts', contactData)
      .then(_ => this.$router.push('/'))
      .then(contact => contact)
      .catch(error => Promise.reject(error))
  }
}

export const mutations = {
  setContacts(state, {resource, contacts}) {
    state.items[resource] = contacts
  },
  setContact(state, contact) {
    state.item = contact
  }  
}
