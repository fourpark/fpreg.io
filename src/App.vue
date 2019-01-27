<template>
  <div id="app">
    <collectionselector></collectionselector>
  </div>
</template>

<script>
  import collectionselector from './components/collectionselector.vue';
  import collectionheader from './components/collectionheader.vue';
  import assetlist from './components/assetlist.vue';
  import assetdetails from './components/assetdetails.vue';

  export default {
    name: 'app',
    components: {
      collectionselector
    }
  }
</script>