<template>
    <div>
        <h1>Showing Event #{{ id }}</h1>
    </div>
</template>

<script>
export default {
  name: 'EventShow',
  // Accept the prop coming from the router
  props: ['id']
}
</script>

<style scoped>
</style>
