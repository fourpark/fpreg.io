window.addEventListener('load', async () => {
	if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      await ethereum.enable();
      console.log('Connection Established');
    } catch (error) {
      console.log('Connection Not Established');
    }
	} else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    web3.eth.sendTransaction({/* ... */});
	} else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
	}
});

Vue.component('navigation', {
  props: ['collections'],
  template: `
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
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Support
            </a>
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
        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Collections
          </button>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" v-for="collection in collections">{{collection.name}}</a>
          </div>
        </div>
      </div>
    </nav>
  `
});

Vue.component('collection-header', {
  props: ['collection'],
  template: `
    <div class="row bg-light border-bottom">
      <div class="col">
        <h1>{{ collection.name }} <div class="small">Collection Info</div></h1>
        <div class="row">
          <div class="col-4">
            <p><strong>Description:</strong> {{collection.description}}</p>
          </div>
          <div class="col-8">
            <dl class="row">
              <dt class="col-2">Collection</dt>
              <dd class="col-10">{{collection.name}}</dd>
              <dt class="col-2">Contract Address</dt>
              <dd class="col-10"><a :href="'https://etherscan.io/address/' + collection.contractHash">{{ collection.contractHash }}</dd>
              <dt class="col-2">Legal Framework</dt>
              <dd class="col-10"><a :href="collection.legalFramework">{{ collection.legalFramework }}</a></dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  `
});

Vue.component('asset-list', {
  props: ['asset'],
  template: `
    <div class="card mb-3">
      <div class="card-header">
        <h5 class="card-title">{{asset.details.name}}</h5>
        <h6 class="card-subtitle mb-1 text-muted">{{asset.details.creator.name}}</h6>
      </div>
      <div class="card-body">
        <ul class="list-unstyled">
          <li v-if="asset.details.contentLocation"><strong>Location:</strong> {{asset.details.contentLocation.name}}</li>
          <li v-if="asset.details.height"><strong>Height:</strong> {{asset.details.height[0].name}}</li>
          <li v-if="asset.details.width"><strong>Width:</strong> {{asset.details.width[0].name}}</li>
        </dl>
      </div>
    </div>

  `
});

var app = new Vue({
  el: '#app',
  data: {
    collections: [
      {
        id:0,
        name: 'Art Vault 1',
        description: 'Pellentesque lorem urna, fermentum vitae porttitor ut, volutpat a augue. In elit nibh, gravida eget nulla vel, dictum porta ante. Fusce ut massa non velit vehicula congue at sed eros. Maecenas commodo erat non dui tempus volutpat. Curabitur porta porttitor justo, eu sagittis mauris maximus vitae.',
        contractHash: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
        legalFramework: 'https://box.net/path/to/pdf',
        assets: [
          {
            hash: '0xd1Df4eFc6b7d47D00E21566B668a9cbbBf5D26D0',
            owner: {
              address: '0xb1690c08e213a35ed9bab7b318de14420fb57d8c',
              type: 'account',
              since: '1539288088'
            },
            totalOwners: 13,
            listing: {
              isListed: false
            },
            details: {
              "@context": "http://schema.org",
              "@type": "Painting",  
              "name": "Orange Way",
              "dateCreated": "+1994",
              "material": "Acrylic and Lacquer",
              "creator": {
                "@type": "Person",
                "name": "Sky Jones"
              },
              "contentLocation": {
                "@type": "AdministrativeArea",
                "name": "North Texas"
              },
              "width": [
                {
                  "@type": "Distance",
                  "name": "20 inches" 
                }
              ],
              "height": [
                {
                  "@type": "Distance",
                  "name": "30 inches"
                }
              ],
              "edition": 1,
              "sizeOfEditon": 1, 
              "signedByArtist": true,
              "citation": [
                {
                  "@type": "DigitalDocument",
                  "name": "Back Side Image",
                  "contentLocation": "https://fourparkmanagement.app.box.com/file/315053533649",
                  "sha3-224-hash": "8bf9f9be497350fcd89dcf1bbaf6fb55a1bef4dd33ed6a5949f2e298"
                },
                {
                  "@type": "DigitalDocument",
                  "name": "Front Side Image",
                  "contentLocation": "https://fourparkmanagement.app.box.com/file/315057634432",
                  "sha3-224-hash": "2ac276e30ea39e917084ec00a04649eac11eb2ee367d6ecac0199f74"
                },
                {
                  "@type": "DigitalDocument",
                  "name": "Book of Provenance",
                  "contentLocation": "https://fourparkmanagement.app.box.com/file/315051163828",
                  "sha3-224-hash": "d4309156098d9227f2d6f953e4b1007d25bbe4e2b1b0e00ca46bf9a6"
                }
              ]
            }
          },
          {
            hash: '0xd1Df4eFc6b7d47D00E21566B668a9cbbBf5D2XXX',
            owner: {
              address: '0xed9bab7b1690c08e213a35b318de14420fb57d8c',
              type: 'account',
              since: '1539288088'
            },
            totalOwners: 13,
            listing: {
              isListed: false
            },
            details: {
              "@context": "http://schema.org",
              "@type": "Painting",  
              "name": "Space Beings",
              "dateCreated": "+1994",
              "material": "Acrylic and Lacquer",
              "creator": {
                "@type": "Person",
                "name": "Sky Jones"
              },
              "contentLocation": {
                "@type": "AdministrativeArea",
                "name": "North Texas"
              },
              "width": [
                {
                  "@type": "Distance",
                  "name": "20 inches" 
                }
              ],
              "height": [
                {
                  "@type": "Distance",
                  "name": "30 inches"
                }
              ],
              "edition": 1,
              "sizeOfEditon": 1, 
              "signedByArtist": true,
              "citation": [
                {
                  "@type": "DigitalDocument",
                  "name": "Back Side Image",
                  "contentLocation": "https://fourparkmanagement.app.box.com/file/315057636926",
                  "sha3-224-hash": "a9e12dbfe565be4b8a4adc8bc81cbb328928dadf504ec8f2813d11be"
                },
                {
                  "@type": "DigitalDocument",
                  "name": "Front Side Image",
                  "contentLocation": "https://fourparkmanagement.app.box.com/file/315052584472",
                  "sha3-224-hash": "c3de0991be048436c1ac565857ce85ac53b615272d0cddbfd3385438"
                },
                {
                  "@type": "DigitalDocument",
                  "name": "Book of Provenance",
                  "contentLocation": "https://fourparkmanagement.app.box.com/file/315057121516",
                  "sha3-224-hash": "c292d60aa3530d0acbbe8761322ddc7e2f003bbc5d0ab44ea0382de5"
                }
              ]
            }
          },
        ]
      },
      {
        id:1,
        name: 'Art Vault 2',
        contractAddress: 'https://etherscan.io/token/0x06012c8cf97bead5deae237070f9587f8e7a266d',
        legalFramework: 'https://box.net/path/to/pdf',
      },
      {
        id:2,
        name: 'Real Estate 1',
        contractAddress: 'https://etherscan.io/token/0x06012c8cf97bead5deae237070f9587f8e7a266d',
        legalFramework: 'https://box.net/path/to/pdf',
      },
      {
        id:3,
        name: 'Real Estate 2',
        contractAddress: 'https://etherscan.io/token/0x06012c8cf97bead5deae237070f9587f8e7a266d',
        legalFramework: 'https://box.net/path/to/pdf',
      },
      {
        id:4,
        name: 'Precious Metals 1',
        contractAddress: 'https://etherscan.io/token/0x06012c8cf97bead5deae237070f9587f8e7a266d',
        legalFramework: 'https://box.net/path/to/pdf',
      }
    ]
  }
});