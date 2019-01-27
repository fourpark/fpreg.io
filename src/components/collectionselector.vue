<template>
  <div class="dropdown">
    {{ currentCollection().name }}
    <br>
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{currentCollection().name}}</button>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#" v-for="(collection, index) in collections" :key="collection.id" @click="changeCollection(index)">{{collection.name}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'collectionselector',
    methods: {
      changeCollection (index) {
        console.log(this.currentCollection().name)
        this.$store.state.collection = index
        console.log(this.currentCollection().name)
      },
      currentCollection () {
        return this.$store.collections[this.$store.state.collection]
      }
    },
    computed: {
      collections () {
        return this.$store.collections
      }
    }
  }
</script>