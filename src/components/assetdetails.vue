<template>
  <div v-if="asset">
    <h2>{{asset.details.name}}</h2>
    <ul class="list-unstyled">
      <li v-if="asset.details.contentLocation"><strong>Location:</strong> {{asset.details.contentLocation.name}}</li>
      <li v-if="asset.details.height"><strong>Height:</strong> {{asset.details.height[0].name}}</li>
      <li v-if="asset.details.width"><strong>Width:</strong> {{asset.details.width[0].name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'assetdetails',
    props: {
      asset: Object
    }
  }
</script>