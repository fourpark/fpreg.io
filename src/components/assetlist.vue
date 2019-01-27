<template>
  <div>
    <h2>Assets ({{collection.assets.length}})</h2>  
    <div class="card mb-3" v-for="(asset, index) in collection.assets" @click="state.asset=index">
      <div class="card-header">
        <h5 class="card-title">{{asset.details.name}}</h5>
        <h6 class="card-subtitle mb-1 text-muted">{{asset.details.creator.name}}</h6>
      </div>
      <div class="card-body">
        <ul class="list-unstyled">
          <li v-if="asset.details['@type']"><strong>Type:</strong> {{asset.details['@type']}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'assetlist',
    props: {
      collection: Object,
      state: Object
    }
  }
</script>