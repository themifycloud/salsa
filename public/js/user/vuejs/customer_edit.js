!function(e){function t(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,t,i){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){new Vue({el:"#customer_edit",data:{clients:{},selected:"Select",children:[],errors:[],success:[],email:"",name:"",phone:"",subscription_date:"",password:"",post_number:"",user_id:""},created:function(){this.children_by_default()},watch:{},methods:{children_by_default:function(){var e=this;this.user_id=window.location.href.split("/")[5],this.$http.get("/admin/get-one-client/"+this.user_id).then(function(t){var i={};if(e.errors=[],"success"==t.body.status){var s=t.body.data[0],n=t.body.data[1];n&&(n.name&&(e.name=n.name),n.email&&(e.email=n.email),n.phone&&(e.phone=n.phone),n.subscription_ends_at&&(e.subscription_ends_at=n.subscription_date)),e.selected=0,s&&(s.child_1_age&&(e.selected++,i.id=0,i.value=s.child_1_age,e.children[0]=i,i={}),s.child_2_age&&(e.selected++,i.id="1",i.value=s.child_2_age,e.children[1]=i,i={}),s.child_3_age&&(e.selected++,i.id=2,i.value=s.child_3_age,e.children[2]=i,i={}),s.child_4_age&&(e.selected++,i.id=3,i.value=s.child_4_age,e.children[3]=i,i={}),s.child_5_age&&(e.selected++,i.id=4,i.value=s.child_5_age,e.children[4]=i,i={})),0!=e.selected&&null!=e.selected||(e.selected="Select")}else for(var r=1;r<3;r++)i.id=r-1,i.value="",e.children[r-1]=i,i={}},function(e){})},select_children:function(){var e=this,t={},i=parseInt(this.selected),s=1;if(this.children.length&&(s=this.children.length+1,s>5&&(s=5)),this.children.length>i)for(var n=this.children.length-1;n>i-1;n--)e.children.splice(n,1);else for(s;s<i+1;s++)t.id=s-1,t.value="",e.children[s-1]=t,t={}},remove:function(e){this.children.splice(e,1),this.selected=this.selected-1,0==this.selected&&(this.selected="Select")},add_children_data:function(){var e=this;this.errors=[];for(var t=[],i=0;i<this.children.length;i++)t[i]=e.children[i];this.children.post_number=this.post_number;var s=[];this.name?s[0]=this.name:this.errors.push("please enter name."),this.email?s[1]=this.email:this.errors.push("please enter email."),this.phone&&(s[2]=this.phone),s[3]=this.subscription_date,s[4]=t,s[5]=this.user_id,this.name&&this.email&&this.$http.post("/admin/save-cuctomer-info",s).then(function(t){e.errors=[],e.success=[],"success"==t.body.status?(e.success.push("Information updated successfully"),window.location.href="/admin/client"):e.errors.push(t.body.message)},function(e){})}}})}]);