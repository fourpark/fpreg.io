<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top">
      <a class="navbar-brand mb-0 h1" href="#">FourPark Minted</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Support</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Documentation</a>
              <a class="dropdown-item" href="#">Support Ticket</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <collectionselector></collectionselector>
      </div>
    </nav>
    <div class="container-fluid">
      <collectionheader></collectionheader>
      <div class="row">
        <div class="col-4 mt-3">
          <assetlist></assetlist>
        </div>
        <div class="col-8 border-left">
          <div class="mt-3">
            <assetdetails></assetdetails>
          </div>
        </div>
      </div>
    </div>
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
      collectionselector,
      collectionheader,
      assetlist,
      assetdetails
    }
  }
</script>