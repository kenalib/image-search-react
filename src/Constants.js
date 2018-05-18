
let constants = {};

let api_url;
const hostname = window.location.hostname;

if (hostname === "localhost" || hostname === "127.0.0.1") {
  api_url = "http://localhost:8080/image-search-webapp/search_picture";
} else {
  api_url = "http://47.74.255.52/image-search-webapp/search_picture";
}

constants.api_url = api_url;
constants.oss_url = "http://image-search-demo3.oss-ap-northeast-1.aliyuncs.com/image_search_pictures/";

constants.default_result = [{ "custContent": "k1:v1,k2:v2,k3:v3", "itemId": "1015", "sortExprValues": "5.37633353624177e+24;0", "catId": "8", "picName": "bottle15.jpeg" }, { "custContent": "k1:v1,k2:v2,k3:v3", "itemId": "1012", "sortExprValues": "5.6539421081543;173", "catId": "8", "picName": "bottle12.jpeg" }, { "custContent": "k1:v1,k2:v2,k3:v3", "itemId": "1009", "sortExprValues": "4.96995687484741;180", "catId": "8", "picName": "bottle09.jpeg" }, { "custContent": "k1:v1,k2:v2,k3:v3", "itemId": "1002", "sortExprValues": "4.71621990203857;207", "catId": "8", "picName": "bottle02.jpeg" }, { "custContent": "k1:v1,k2:v2,k3:v3", "itemId": "1006", "sortExprValues": "4.15674448013306;215", "catId": "8", "picName": "bottle06.jpeg" }, { "custContent": "k1:v1,k2:v2,k3:v3", "itemId": "1013", "sortExprValues": "3.81625032424927;213", "catId": "8", "picName": "bottle13.jpeg" }, { "custContent": "k1:v1,k2:v2,k3:v3", "itemId": "1011", "sortExprValues": "3.59012603759766;237", "catId": "8", "picName": "bottle11.jpeg" }, { "custContent": "k1:v1,k2:v2,k3:v3", "itemId": "1014", "sortExprValues": "3.46576976776123;221", "catId": "8", "picName": "bottle14.jpeg" }, { "custContent": "k1:v1,k2:v2,k3:v3", "itemId": "1008", "sortExprValues": "3.43250560760498;249", "catId": "8", "picName": "bottle08.jpeg" }, { "custContent": "k1:v1,k2:v2,k3:v3", "itemId": "1010", "sortExprValues": "3.41058564186096;236", "catId": "8", "picName": "bottle10.jpeg" }, { "custContent": "k1:v1,k2:v2,k3:v3", "itemId": "1001", "sortExprValues": "3.37886261940002;234", "catId": "8", "picName": "bottle01.jpeg" }, { "custContent": "k1:v1,k2:v2,k3:v3", "itemId": "1005", "sortExprValues": "3.27998518943787;216", "catId": "8", "picName": "bottle05.jpeg" }];

export default constants
