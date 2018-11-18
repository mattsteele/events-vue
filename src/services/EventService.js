// Components that talk to axios use this as an entry point. This way only one axios call is made.

import axios from 'axios'

// I create a single axios instance with .create()
const apiClient = axios.create({
  // A base URL that all calls use
  baseURL: `http://localhost:3000`,
  // Any authentication & configuration my calls need to tcommunicate with the server.
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// Export a getEvents() function that we can use elsewhere in the application
export default {
  getEvents(perPage, page) {
    // calls http://localhost:3000/events
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  // Export a getEvent() function that takes in the specific event id
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
