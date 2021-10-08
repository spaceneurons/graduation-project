(this.webpackJsonpcats=this.webpackJsonpcats||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=(a(23),a(10),a(24),a(1)),c=a.n(r),s=a(19),i=a.n(s),o=a(2),l=a.n(o),d=a(4),j=a(5),u=a(6),h=a(8),b=a(7),p=(a(30),a(31),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchTerm:""},e.onInputChange=function(t){e.setState({searchTerm:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.searchTerm),e.setState({searchTerm:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:"Search for cats"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{className:"form-control",type:"text",value:this.state.searchTerm,onChange:this.onInputChange}),Object(n.jsx)("button",{className:"btn btn-outline-secondary float-right btn-space",onClick:this.onFormSubmit,children:"Search"})]})]})}}]),a}(c.a.Component)),x=a(20),m=a.n(x).a.create({baseURL:"https://api.thecatapi.com/v1"});m.defaults.headers.common["x-api-key"]="84c10d38-4946-4775-8a79-88547af18e23";var O=m,g=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={breeds:[],selectedBreed:"Abyssinian",selectedBreedId:"abys",breedsArray:[]},e.getBreeds=Object(d.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("/breeds",{params:{}});case 2:a=t.sent,e.setState({breeds:a});case 4:case"end":return t.stop()}}),t)}))),e.getBreedsArray=function(){return e.state.breeds.data},e.onSelectChange=function(t){e.setState({selectedBreed:t.target.value});var a=t.target.value;console.log("NAME",a);var n=e.getBreedsArray().find((function(e){return e.name===a})).id;console.log("currentElementId",n),e.setState({selectedBreedId:n})},e.onSelectSubmit=function(t){t.preventDefault(),e.props.onSelectSubmit(e.state.selectedBreed)},e.onSelectSubmitId=function(t){t.preventDefault(),e.props.onSelectSubmitId(e.state.selectedBreedId)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getBreeds()}},{key:"render",value:function(){var e=this;this.getBreedsArray(),console.log("selected breed id",this.state.selectedBreedId);var t=[],a=this.state.breeds.data;for(var r in a)t.push(a[r].name);return Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:" Breed information "}),Object(n.jsxs)("form",{children:[Object(n.jsxs)("select",{className:"custom-select",onChange:this.onSelectChange,value:this.state.selectedBreed,children:[Object(n.jsx)("option",{value:"Abyssinian",children:" Abyssinian"},"0")," ",Object(n.jsx)("option",{value:"Aegean",children:" Aegean "},"1"),Object(n.jsx)("option",{value:"American Bobtail",children:" American Bobtail "},"2"),Object(n.jsx)("option",{value:"American Curl",children:" American Curl "},"3"),Object(n.jsx)("option",{value:"American Shorthair",children:" American Shorthair "},"4"),Object(n.jsx)("option",{value:"American Wirehair",children:" American Wirehair "},"5"),Object(n.jsx)("option",{value:"Arabian Mau",children:" Arabian Mau "},"6"),Object(n.jsx)("option",{value:"Australian Mist",children:" Australian Mist "},"7"),Object(n.jsx)("option",{value:"Balinese",children:" Balinese "},"8"),Object(n.jsx)("option",{value:"Bambino",children:" Bambino "},"9"),Object(n.jsx)("option",{value:"Bengal",children:" Bengal "},"10"),Object(n.jsx)("option",{value:"Birman",children:" Birman "},"11"),Object(n.jsx)("option",{value:"Bombay",children:" Bombay "},"12"),Object(n.jsx)("option",{value:"British Longhair",children:" British Longhair "},"13"),Object(n.jsx)("option",{value:"British Shorthair",children:" British Shorthair "},"14"),Object(n.jsx)("option",{value:"Burmese",children:" Burmese "},"15"),Object(n.jsx)("option",{value:"Burmilla",children:" Burmilla "},"16"),Object(n.jsx)("option",{value:"California Spangled",children:" California Spangled "},"17"),Object(n.jsx)("option",{value:"Chantilly-Tiffany",children:" Chantilly - Tiffany "},"18"),Object(n.jsx)("option",{value:"Chartreux",children:" Chartreux "},"19"),Object(n.jsx)("option",{value:"Chausie",children:" Chausie "},"20"),Object(n.jsx)("option",{value:"Cheetoh",children:" Cheetoh "},"21"),Object(n.jsx)("option",{value:"Colorpoint Shorthair",children:" Colorpoint Shorthair "},"22"),Object(n.jsx)("option",{value:"Cornish Rex",children:" Cornish Rex "},"23"),Object(n.jsx)("option",{value:"Cymric",children:" Cymric "},"24"),Object(n.jsx)("option",{value:"Cyprus",children:" Cyprus "},"25"),Object(n.jsx)("option",{value:"Devon Rex",children:" Devon Rex "},"26"),Object(n.jsx)("option",{value:"Donskoy",children:" Donskoy "},"27"),Object(n.jsx)("option",{value:"Dragon Li",children:" Dragon Li "},"28"),Object(n.jsx)("option",{value:"Egyptian Mau",children:" Egyptian Mau "},"29"),Object(n.jsx)("option",{value:"European Burmese",children:" European Burmese "},"30"),Object(n.jsx)("option",{value:"Exotic Shorthair",children:" Exotic Shorthair "},"31"),Object(n.jsx)("option",{value:"Havana Brown",children:" Havana Brown "},"32"),Object(n.jsx)("option",{value:"Himalayan",children:" Himalayan "},"33"),Object(n.jsx)("option",{value:"Japanese Bobtail",children:" Japanese Bobtail "},"34"),Object(n.jsx)("option",{value:"Javanese",children:" Javanese "},"35"),Object(n.jsx)("option",{value:"Khao Manee",children:" Khao Manee "},"36"),Object(n.jsx)("option",{value:"Korat",children:" Korat "},"37"),Object(n.jsx)("option",{value:"Kurilian",children:" Kurilian "},"38"),Object(n.jsx)("option",{value:"LaPerm",children:" LaPerm "},"39"),Object(n.jsx)("option",{value:"Maine Coon",children:" Maine Coon "},"40"),Object(n.jsx)("option",{value:"Malayan",children:" Malayan "},"41"),Object(n.jsx)("option",{value:"Manx",children:" Manx "},"42"),Object(n.jsx)("option",{value:"Munchkin",children:" Munchkin "},"43"),Object(n.jsx)("option",{value:"Nebelung",children:" Nebelung "},"44"),Object(n.jsx)("option",{value:"Norwegian Forest Cat",children:" Norwegian Forest Cat "},"45"),Object(n.jsx)("option",{value:"Ocicat",children:" Ocicat "},"46"),Object(n.jsx)("option",{value:"Oriental",children:" Oriental "},"47"),Object(n.jsx)("option",{value:"Persian",children:" Persian "},"48"),Object(n.jsx)("option",{value:"Pixie-bob",children:" Pixie - bob "},"49"),Object(n.jsx)("option",{value:"Ragamuffin",children:" Ragamuffin "},"50"),Object(n.jsx)("option",{value:"Ragdoll",children:" Ragdoll "},"51"),Object(n.jsx)("option",{value:"Russian Blue",children:" Russian Blue "},"52"),Object(n.jsx)("option",{value:"Savannah",children:" Savannah "},"53"),Object(n.jsx)("option",{value:"Scottish Fold",children:" Scottish Fold "},"54"),Object(n.jsx)("option",{value:"Selkirk Rex",children:" Selkirk Rex "},"55"),Object(n.jsx)("option",{value:"Siamese",children:" Siamese "},"56"),Object(n.jsx)("option",{value:"Siberian",children:" Siberian "},"57"),Object(n.jsx)("option",{value:"Singapura",children:" Singapura "},"58"),Object(n.jsx)("option",{value:"Snowshoe",children:" Snowshoe "},"59"),Object(n.jsx)("option",{value:"Somali",children:" Somali "},"60"),Object(n.jsx)("option",{value:"Sphynx",children:" Sphynx "},"61"),Object(n.jsx)("option",{value:"Tonkinese",children:" Tonkinese "},"62"),Object(n.jsx)("option",{value:"Toyger",children:" Toyger "},"63"),Object(n.jsx)("option",{value:"Turkish Angora",children:" Turkish Angora "},"64"),Object(n.jsx)("option",{value:"Turkish Van",children:" Turkish Van "},"65"),Object(n.jsx)("option",{value:"York Chocolate",children:" York Chocolate "},"66")]}),Object(n.jsx)("button",{className:"btn btn-outline-secondary float-right btn-space",onClick:function(t){e.onSelectSubmit(t,e.state.selectedBreed),e.onSelectSubmitId(t,e.state.selectedBreedId)},children:"Search "})]})," "]})}}]),a}(c.a.Component),v=function(e){var t=e.cat;return Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("img",{src:t.url,alt:"cat",className:"card-img-top thumbnail"})})},f=function(e){var t=e.data.map((function(e){return Object(n.jsx)(v,{cat:e},e.id)}));return Object(n.jsx)("div",{className:"card-columns",children:t})},S=function(e){var t=e.data,a=e.dataImages;console.log("from BreedDetail: ",a.data);var r=[];return void 0!==a.data&&(r=a.data.map((function(e){return Object(n.jsx)(v,{cat:e},e.id)})),console.log(r)),void 0===t||void 0===a.data?Object(n.jsx)("h5",{children:" No breed was selected.Please select one. "}):Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-4",children:[Object(n.jsxs)("h5",{children:[" ",t.name," "]})," ",Object(n.jsx)("a",{href:t.wikipedia_url,target:"_blank",className:"badge badge-secondary",children:" Wikipedia "})," ",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Description: "})," ",Object(n.jsx)("br",{})," ",t.description," "]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Temperament: "})," ",Object(n.jsx)("br",{})," ",t.temperament," "]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Origin: "})," ",t.origin]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Intelligence: "})," ",t.intelligence]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Adaptability: "})," ",t.adaptability]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Affection level: "})," ",t.affection_level]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Child friendly: "})," ",t.child_friendly]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Dog friendly: "})," ",t.dog_friendly]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Energy level: "})," ",t.energy_level]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Health issues: "})," ",t.health_issues]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Indoor: "})," ",t.indoor]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Rare: "})," ",t.rare]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Social needs: "})," ",t.social_needs]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Stranger friendly: "})," ",t.stranger_friendly]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Vocalisation: "})," ",t.vocalisation]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Shedding: "})," ",t.shedding_level]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Alternative names: "})," ",""===t.alt_names?"none":t.alt_names," "]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Weight: "})," ",t.weight.metric," kg"]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("strong",{children:" Life expectancy: "})," ",t.life_span]})]}),Object(n.jsxs)("div",{className:"col-8",children:[Object(n.jsxs)("div",{className:"card-columns",children:[" ",r]})," "]})]})})},y=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={categories:[],selectedCategory:""},e.getCategories=Object(d.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("/categories",{params:{}});case 2:a=t.sent,e.setState({categories:a});case 4:case"end":return t.stop()}}),t)}))),e.onSelectChange=function(t){e.setState({selectedCategory:t.target.value})},e.onSelectSubmitCateg=function(t){t.preventDefault(),e.props.onSelectSubmitCateg(e.state.selectedCategory,e.state.selectedCategoryName),e.setState({selectedCategory:""})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getCategories()}},{key:"render",value:function(){var e=[],t=[],a=this.state.categories.data;for(var r in a)e.push(a[r].name);for(var c in a)t.push(a[c].id);return Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:"Search for cats by category"}),Object(n.jsxs)("form",{children:[Object(n.jsxs)("select",{className:"custom-select",onChange:this.onSelectChange,value:this.state.selectedCategory,children:[Object(n.jsx)("option",{value:"",children:"Select option"}),Object(n.jsx)("option",{value:"5",children:"boxes"},"5"),Object(n.jsx)("option",{value:"15",children:"clothes"},"15"),Object(n.jsx)("option",{value:"1",children:"hats"},"1"),Object(n.jsx)("option",{value:"14",children:"sinks"},"14"),Object(n.jsx)("option",{value:"2",children:"space"},"2"),Object(n.jsx)("option",{value:"4",children:"sunglasses"},"4"),Object(n.jsx)("option",{value:"7",children:"ties"},"7")]}),Object(n.jsx)("button",{className:"btn btn-outline-secondary float-right btn-space",onClick:this.onSelectSubmitCateg,children:"Search"})]})]})}}]),a}(c.a.Component),C=function(e){var t=e.cat;return Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("img",{src:t,alt:"cat by category",className:"card-img-top thumbnail"})})},B=function(e){var t=e.categorized.map((function(e,t){return Object(n.jsx)(C,{cat:e},t)}));return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h5",{children:['Search by category "',e.categoryname,'"']}),Object(n.jsx)("div",{className:"card-columns",children:t})]})},k=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).onTermSubmit=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/images/search",{params:{q:t,limit:50}});case 2:a=e.sent,n.setState({cats:a.data,catlist:!0,mode:"catlist"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onSelectSubmit=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("from app",t),e.next=3,O.get("/breeds/search",{params:{q:t}});case 3:a=e.sent,n.setState({breed:a.data[0],breedId:a.data[0].id,breeddetail:!0,mode:"breeddetail"}),console.log("from app",n.state.breedId);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onSelectSubmitId=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("from app",t),e.next=3,O.get("/images/search",{params:{breed_id:t,limit:50}});case 3:a=e.sent,console.log("SELECTED BREED FOR IMAGES",n.state.selectedBreed),n.setState({breedImages:a}),console.log("BREEDIMAGES",n.state.breedImages);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onSelectSubmitCateg=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/images/search",{params:{limit:50,category_ids:t}});case 2:for(a=e.sent,r=[],c=0;c<30;c++)r.push(a.data[c].url);n.setState({selectedcategory:t,categorized:r,categorydetail:!0,mode:"categorylist"}),e.t0=n.state.selectedcategory,e.next="5"===e.t0?9:"15"===e.t0?11:"1"===e.t0?13:"14"===e.t0?15:"2"===e.t0?17:"4"===e.t0?19:"7"===e.t0?21:23;break;case 9:return n.setState({selectedCategoryName:"boxes"}),e.abrupt("break",24);case 11:return n.setState({selectedCategoryName:"clothes"}),e.abrupt("break",24);case 13:return n.setState({selectedCategoryName:"hats"}),e.abrupt("break",24);case 15:return n.setState({selectedCategoryName:"sinks"}),e.abrupt("break",24);case 17:return n.setState({selectedCategoryName:"space"}),e.abrupt("break",24);case 19:return n.setState({selectedCategoryName:"sunglasses"}),e.abrupt("break",24);case 21:return n.setState({selectedCategoryName:"ties"}),e.abrupt("break",24);case 23:n.setState({selectedCategoryName:"no category"});case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={cats:[],catlist:!1,breed:[],breedId:"",breeddetail:!1,breedImages:[],selectedcategory:"boxes",selectedCategoryName:"boxes",categorized:[],categorydetail:!1,mode:"none"},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onTermSubmit("cat"),this.setState({catlist:!0})}},{key:"renderCatList",value:function(){return"catlist"===this.state.mode?Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{data:this.state.cats,catlist:this.state.catlist})," "]}):null}},{key:"renderBreedDetail",value:function(){var e=this;return"breeddetail"===this.state.mode?Object(n.jsx)(S,{data:this.state.breed,dataImages:this.state.breedImages,onSelectSubmit:this.onSelectSubmit,onSelectSubmitId:this.onSelectSubmitId,breeddetail:this.state.breeddetail,getBreedImages:function(){return e.getBreedImages}}):null}},{key:"renderCategoryList",value:function(){return"categorylist"===this.state.mode?Object(n.jsx)(B,{categorized:this.state.categorized,categoryname:this.state.selectedCategoryName}):null}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"display-4 text-center mt-5 mb-3 maintext",children:" Random cats from tumbler "}),Object(n.jsxs)("div",{className:"card-columns",children:[Object(n.jsx)("div",{className:"card  greyish",children:Object(n.jsx)(p,{onFormSubmit:this.onTermSubmit})}),Object(n.jsx)("div",{className:"card greyish",children:Object(n.jsx)(g,{getBreeds:this.getBreeds,breeds:this.state.breeds,onSelectSubmit:this.onSelectSubmit,onSelectSubmitId:this.onSelectSubmitId})}),Object(n.jsx)("div",{className:"card greyish",children:Object(n.jsx)(y,{getCategories:this.getCategories,categories:this.state.categories,onSelectSubmitCateg:this.onSelectSubmitCateg})})]}),Object(n.jsxs)("div",{children:[" ",this.renderCatList()," "]})," ",Object(n.jsxs)("div",{children:[" ",this.renderBreedDetail()]})," ",Object(n.jsxs)("div",{children:[" ",this.renderCategoryList()," "]})," "]})}}]),a}(c.a.Component);i.a.render(Object(n.jsx)(k,{}),document.querySelector("#root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.645c9346.chunk.js.map