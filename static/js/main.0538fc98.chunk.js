(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{20:function(e,a,t){e.exports={Button:"Button_Button__3Ts69"}},22:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__1PIls"}},23:function(e,a,t){e.exports=t(48)},28:function(e,a,t){},29:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(19),l=t.n(o),c=(t(28),t(29),t(9)),i=t(2),m=t(3),u=t(5),s=t(4),h=t(6),g=t.n(h),p=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={inputValue:""},e.handleChange=function(a){e.setState({inputValue:a.target.value})},e.handleSubmit=function(a){a.preventDefault(),e.props.fetchImages(e.state.inputValue),e.props.onSubmit(e.state.inputValue)},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:g.a.Searchbar},r.a.createElement("form",{className:g.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:g.a.SearchFormbutton},r.a.createElement("span",{className:g.a.SearchFormbuttonlabel},"Search")),r.a.createElement("input",{className:g.a.SearchForminput,name:"search",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputValue,onChange:this.handleChange})))}}]),t}(n.Component),d=t(20),f=t.n(d),b=function(e){var a=e.onSomething;return r.a.createElement("button",{className:f.a.Button,onClick:a},"Load more")},y=t(7),S=t.n(y),v=function(e){var a=e.image,t=e.toggleModalWin;return console.log(a),r.a.createElement("li",{className:S.a.ImageGalleryItem},r.a.createElement("img",{src:a.webformatURL,alt:a.webformatURL,className:S.a.ImageGalleryItemimage,onClick:function(){t(a.largeImageURL)}}))},_=t(21),w=t.n(_),E=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return w.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(a,"&key=").concat("17101210-5860812662443c66832a02556","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},I=t(22),M=t.n(I),F=(t(47),t(8)),j=t.n(F),O=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleKeyDown=function(a){"Escape"===a.code&&e.props.onClose()},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillMount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return r.a.createElement("div",{className:j.a.Overlay,onClick:this.props.onClose,alt:""},r.a.createElement("div",{className:j.a.Modal},r.a.createElement("img",{src:this.props.imageModal})))}}]),t}(n.Component),C=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={images:[],loader:!0,error:!1,searchQuery:"",page:1,showModal:!1,imageModal:""},e.toggleModal=function(a){e.setState((function(e){return{showModal:!e.showModal,imageModal:a}}))},e.toggleModalClose=function(){e.setState((function(e){return{showModal:!e.showModal,imageModal:""}}))},e.fetchImages=function(a,t){var n=0;n=1===t?0:document.documentElement.scrollHeight-144,console.log("query",a),E(a,t).then((function(a){return e.setState((function(e){return{images:[].concat(Object(c.a)(e.images),Object(c.a)(a)),loader:!1,page:e.page+1}}))})).catch((function(a){return e.setState({error:a})})).finally((function(){return e.setState({loader:!1})})),window.scrollTo({top:n,behavior:"smooth"})},e.handleSearchFormSubmit=function(a){console.log(a),e.setState({searchQuery:a,page:1,images:[]})},e}return Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this.state,n=(t.searchQuery,t.page),r=a.searchQuery,o=this.state.searchQuery;r===o&&a.page===n||this.fetchImages(o,n)}},{key:"render",value:function(){var e=this,a=this.state,t=a.images,n=(a.loader,a.error),o=a.showModal,l=a.imageModal;return n?r.a.createElement("h1",null,"Woops, something went wrong. Try again later!"):r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{onSubmit:this.handleSearchFormSubmit,fetchImages:this.fetchImages}),r.a.createElement("ul",{className:M.a.ImageGallery},t.map((function(a){return r.a.createElement(v,{image:a,toggleModalWin:e.toggleModal,key:a.id})}))),!!t.length&&r.a.createElement(b,{onSomething:this.fetchImages}),o&&r.a.createElement(O,{imageModal:l,onClose:this.toggleModalClose}))}}]),t}(n.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))},6:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__rbbpM",SearchForm:"Searchbar_SearchForm__3vfUw",SearchFormbutton:"Searchbar_SearchFormbutton__n0jTi",SearchFormbuttonlabel:"Searchbar_SearchFormbuttonlabel__1gVu2",SearchForminput:"Searchbar_SearchForminput__3C1tf","SearchForm-input":"Searchbar_SearchForm-input__1cNjq"}},7:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2VovE",ImageGalleryItemimage:"ImageGalleryItem_ImageGalleryItemimage__3rjJh"}},8:function(e,a,t){e.exports={Overlay:"Modal_Overlay__2ElTG",Modal:"Modal_Modal__3RgQ3"}}},[[23,1,2]]]);
//# sourceMappingURL=main.0538fc98.chunk.js.map