<template>
    <div>
        <h1>Create an Event, {{ user.name }}</h1>
        <p>This event was created by {{ user.id }}</p>
        <ul>
            <li v-for="cat in categories" :key="cat">{{ cat }}</li>
        </ul>
        <p>There are {{ catLength }} categories</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EventCreate',
  computed: {
    // This allows me to access the catLength() function from the vuex store
    catLength() {
      return this.$store.getters.catLength
    },
    // The spread operator allows me to use both vuex state and local getters together
    ...mapState(['user', 'categories'])
  }
}
</script>

<style scoped>
</style>
