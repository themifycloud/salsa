!function(a){function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return a[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};return t.m=a,t.c=e,t.i=function(a){return a},t.d=function(a,t,e){Object.defineProperty(a,t,{configurable:!1,enumerable:!0,get:e})},t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,"a",e),e},t.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},t.p="",t(t.s=0)}([function(a,t){new Vue({el:"#qualifyUpperSecData",data:{qualifyUpperSecData:{},pagingData:{},pagingUrl:"",search:"",orderBy:"",page:""},created:function(){this.loadQualifyUpperSecDataList()},watch:{},methods:{deleteQualifyUpperSecData:function(a){this.$http["delete"]("/admin/national-result-data/"+a).then(function(a){},function(a){})},"goto":function(){this.page>this.pagingData.last_page?(this.page=this.pagingData.last_page,this.loadQualifyUpperSecDataList("/admin/get-qualify-upper-sec-data?page="+this.page+"&search=")):this.page<1?this.loadQualifyUpperSecDataList("/admin/get-qualify-upper-sec-data?page=1&search="):this.loadQualifyUpperSecDataList("/admin/get-qualify-upper-sec-data?page="+this.page+"&search=")},loadQualifyUpperSecDataList:function(a){var t=this;void 0===a&&(a=!1),0==a&&(a="/admin/get-qualify-upper-sec-data?search="),""!=this.search&&(a=a+""+this.search),""!=this.orderBy&&(a=a+"&orderBy="+this.orderBy),this.$http.get(a).then(function(a){t.pagingData=a.body,t.qualifyUpperSecData=a.body.data},function(a){})}}})}]);