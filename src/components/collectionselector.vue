<template>
  <div class="dropdown">
    {{ this.$store.collections[$store.state.collection].name }}
    <br>
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ this.$store.collections[this.$store.state.collection].name }}</button>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#" v-for="(collection, index) in $store.collections" :key="collection.id" @click="changeCollection(index)">{{collection.name}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'collectionselector',
    methods: {
      changeCollection (index) {
        this.$store.state.collection = index
      }
    }
  }
</script>