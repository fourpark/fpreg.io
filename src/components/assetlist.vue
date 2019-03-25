<template>
  <div v-if="assets">
    <h2>Assets ({{assets.length}})</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="(asset, index) in assets" @click="changeAsset(index)">{{asset.details.name}} <span class="text-black-50">{{asset.details.creator.name}}</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'assetlist',
    data: function () {
      return {
        state: this.$store.state
      }
    },
    computed: {
      collections () {
        return this.$store.collections
      },
      collection () {
        return this.collections[this.state.collection]
      },
      assets () {
        return _.get(this.collection, 'assets', [])
      }
    },
    methods: {
      changeAsset (index) {
        this.$store.state.asset = index
      }
    }
  }
</script>