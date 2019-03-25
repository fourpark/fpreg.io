<template>
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ this.$store.collections[this.$store.state.collection].name }}</button>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#" v-for="(collection, index) in collections" :key="collection.id" @click="changeCollection(index)">{{collection.name}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'collectionselector',
    data: function () {
      return {
        state: this.$store.state
      }
    },
    computed: {
      collections () {
        return this.$store.collections
      }
    },
    methods: {
      changeCollection (index) {
        this.$store.state.collection = index
        this.$store.state.asset = null
      }
    }
  }
</script>