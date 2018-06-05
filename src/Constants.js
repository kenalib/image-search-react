
let constants = {};

constants.default_result = {
  "SearchItemResponse": {
    "requestId": "C84D2D93-17C5-4DBD-8C08-C2F24D6EC32C",
    "success": true,
    "message": "success",
    "code": 0,
    "auctions": [
      {
        "custContent": "k1:v1,k2:v2,k3:v3",
        "itemId": "1007",
        "sortExprValues": "5.37633353624177e+24;0",
        "catId": "3",
        "picName": "bag02.jpg"
      },
      {
        "custContent": "k1:v1,k2:v2,k3:v3",
        "itemId": "1010",
        "sortExprValues": "3.37476205825806;225",
        "catId": "3",
        "picName": "bag05.jpg"
      },
      {
        "custContent": "k1:v1,k2:v2,k3:v3",
        "itemId": "1009",
        "sortExprValues": "3.29809403419495;219",
        "catId": "3",
        "picName": "bag04.jpg"
      },
      {
        "custContent": "k1:v1,k2:v2,k3:v3",
        "itemId": "1006",
        "sortExprValues": "2.99806690216064;242",
        "catId": "3",
        "picName": "bag01.jpg"
      },
      {
        "custContent": "k1:v1,k2:v2,k3:v3",
        "itemId": "1008",
        "sortExprValues": "2.84266543388367;233",
        "catId": "3",
        "picName": "bag03.jpg"
      }
    ],
    "head": {
      "searchTime": 117,
      "docsFound": 5,
      "docsReturn": 5
    },
    "picInfo": {
      "category": "3",
      "region": "76,178,114,191",
      "allCategory": [
        {
          "name": "Tops",
          "id": "0"
        },
        {
          "name": "Dress",
          "id": "1"
        },
        {
          "name": "Bottoms",
          "id": "2"
        },
        {
          "name": "Bag",
          "id": "3"
        },
        {
          "name": "Shoes",
          "id": "4"
        },
        {
          "name": "Accessories",
          "id": "5"
        },
        {
          "name": "Snack",
          "id": "6"
        },
        {
          "name": "Makeup",
          "id": "7"
        },
        {
          "name": "Bottle",
          "id": "8"
        },
        {
          "name": "Furniture",
          "id": "9"
        },
        {
          "name": "Toy",
          "id": "20"
        },
        {
          "name": "Underwear",
          "id": "21"
        },
        {
          "name": "Digital device",
          "id": "22"
        },
        {
          "name": "Other",
          "id": "88888888"
        }
      ]
    }
  }
};

constants.shoes_search_result = {
  "SearchItemResponse": {
    "requestId": "941BDC1F-6B10-490D-81AA-9F9E20FE9682",
    "success": true,
    "message": "success",
    "code": 0,
    "auctions": [
      {
        "custContent": "k1:v1,k2:v2,k3:v3",
        "itemId": "1011",
        "sortExprValues": "5.37633353624177e+24;0",
        "catId": "4",
        "picName": "shoes01.jpg"
      },
      {
        "custContent": "k1:v1,k2:v2,k3:v3",
        "itemId": "1013",
        "sortExprValues": "2.90890407562256;234",
        "catId": "4",
        "picName": "shoes03.jpg"
      },
      {
        "custContent": "k1:v1,k2:v2,k3:v3",
        "itemId": "1015",
        "sortExprValues": "2.779137134552;243",
        "catId": "4",
        "picName": "shoes05.jpg"
      },
      {
        "custContent": "k1:v1,k2:v2,k3:v3",
        "itemId": "1014",
        "sortExprValues": "2.72145915031433;268",
        "catId": "4",
        "picName": "shoes04.jpg"
      },
      {
        "custContent": "k1:v1,k2:v2,k3:v3",
        "itemId": "1012",
        "sortExprValues": "2.70307874679565;264",
        "catId": "4",
        "picName": "shoes02.jpg"
      }
    ],
    "head": {
      "searchTime": 81,
      "docsFound": 5,
      "docsReturn": 5
    },
    "picInfo": {
      "category": "4",
      "region": "2,202,120,237",
      "allCategory": [
        {
          "name": "Tops",
          "id": "0"
        },
        {
          "name": "Dress",
          "id": "1"
        },
        {
          "name": "Bottoms",
          "id": "2"
        },
        {
          "name": "Bag",
          "id": "3"
        },
        {
          "name": "Shoes",
          "id": "4"
        },
        {
          "name": "Accessories",
          "id": "5"
        },
        {
          "name": "Snack",
          "id": "6"
        },
        {
          "name": "Makeup",
          "id": "7"
        },
        {
          "name": "Bottle",
          "id": "8"
        },
        {
          "name": "Furniture",
          "id": "9"
        },
        {
          "name": "Toy",
          "id": "20"
        },
        {
          "name": "Underwear",
          "id": "21"
        },
        {
          "name": "Digital device",
          "id": "22"
        },
        {
          "name": "Other",
          "id": "88888888"
        }
      ]
    }
  }
}

constants.allCategory = constants.default_result.SearchItemResponse.picInfo.allCategory

export default constants
