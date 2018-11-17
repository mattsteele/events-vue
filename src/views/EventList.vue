<template>
    <div>
        <h1>Events Listing</h1>
        <EventCard v-for="event in events" :key="event.id" :event="event"/>
        <BaseIcon />
    </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

// Instead of importing axios, I import its service.
import EventService from '@/services/EventService.js'
// import axios from 'axios'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    // call the getEvents() function that's inside EventService.js
    EventService.getEvents()
      .then(response => {
        // console.log(response.data)
        // bind this.events to the response data from the mockdb
        this.events = response.data
      })
      .catch(error => {
        console.log('There was an error:' + error.response)
      })
  }
}
</script>

<style scoped>
</style>
