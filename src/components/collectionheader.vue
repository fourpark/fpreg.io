
<template>
  <div class="row bg-light border-bottom" v-if="collection">
    <div class="col">
      <h1>{{ collection.name }} <div class="small">Collection Info</div></h1>
      <div class="row">
        <div class="col-4">
          <p><strong>Description:</strong> {{collection.description}}</p>
        </div>
        <div class="col-8">
          <dl class="row">
            <dt class="col-3">Collection</dt>
            <dd class="col-9">{{collection.name}}</dd>
            <dt class="col-3">Contract Address</dt>
            <dd class="col-9"><a :href="'https://etherscan.io/address/' + collection.contractHash">{{ collection.contractHash }}</a></dd>
            <dt class="col-3">Legal Framework</dt>
            <dd class="col-9"><a :href="collection.legalFramework">{{ collection.legalFramework }}</a></dd>
            <dt class="col-3">Number of Assets</dt>
            <dd class="col-9">{{ collection.assets.length }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'collectionheader',
    props: {
      collection: Object
    }
  }
</script>