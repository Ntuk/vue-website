import Vue from 'vue'

export const state = () => ({
  items: [],
})

export const actions = {
  fetchContacts({commit, state}, filter) {
    const url = this.$applyParamsToUrl('/api/v1/contacts', filter)
    return this.$axios.$get(url)
      .then(data => {
        const { contacts } = data
        commit('setContacts', {resource: 'all', contacts})
        return state.items
      })
      .catch(error => Promise.reject(error))
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
