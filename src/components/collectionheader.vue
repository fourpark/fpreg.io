<template>
  <div class="row bg-light border-bottom">
    <div class="col">
      <h1>{{ this.$store.collections[this.$store.state.collection].name }} <div class="small">Collection Info</div></h1>
      <div class="row">
        <div class="col-4">
          <p><strong>Description:</strong> {{ currentCollection().description }}</p>
        </div>
        <div class="col-8">
          <dl class="row">
            <dt class="col-3">Collection</dt>
            <dd class="col-9">{{ currentCollection().name }}</dd>
            <dt class="col-3">Contract Address</dt>
            <dd class="col-9"><a :href="'https://etherscan.io/address/' + currentCollection().contractHash">{{ currentCollection().contractHash }}</a></dd>
            <dt class="col-3">Legal Framework</dt>
            <dd class="col-9"><a :href="currentCollection().legalFramework">{{ currentCollection().legalFramework }}</a></dd>
            <dt class="col-3">Number of Assets</dt>
            <dd class="col-9">{{ currentCollection().assets.length }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'collectionheader',
    methods: {
      currentCollection () {
        return this.$store.collections[this.$store.state.collection]
      }
    },
  }
</script>