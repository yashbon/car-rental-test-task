"use strict";(self.webpackChunkcar_rental_test_task=self.webpackChunkcar_rental_test_task||[]).push([[395],{901:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(439),s=n(851),a="ButtonFavorite_buttonFavorite__b1IBF",i=n(184),o=function(e){var t=e.onClick;return(0,i.jsx)("p",{className:a,onClick:t,children:"like"})},c="ButtonLearn_buttonLearn__d8YMI",d=function(e){var t=e.onClick;e.advert;return(0,i.jsx)("button",{className:c,onClick:t,children:"Learn more"})},l="AdvertCard_advertsItem__WyLER",u=n(791),v=n(434),f=n(488),h=function(e){var t=e.togleModal,n=e.advert,a=(e.closeModal,e.showModal,n.make),c=n.img,h=n.rentalPrice,x=n.address,j=n.rentalCompany,_=(0,u.useState)(!1),m=(0,r.Z)(_,2),k=m[0],g=m[1],p=(0,v.v9)(s.T).favorites,w=(0,v.I0)();(0,u.useEffect)((function(){p.some((function(e){return e.id===n.id}))&&g(!0)}),[p,n]);return(0,i.jsxs)("div",{className:l,children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{width:"274px",height:"268px",overflow:"hidden"},children:[(0,i.jsx)(o,{onClick:function(e){e.stopPropagation(),g(!k),p.some((function(e){return e.id===n.id}))?w((0,f.e3)(n)):w((0,f.a3)(n))}}),(0,i.jsx)("img",{src:c,alt:a,style:{width:"100%",height:"100%",objectFit:"cover"}})]}),(0,i.jsxs)("title",{children:[(0,i.jsx)("span",{children:a}),(0,i.jsx)("span",{children:h})]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{children:x}),(0,i.jsx)("span",{children:j})]})]}),(0,i.jsx)(d,{onClick:function(){return t({advert:n})}})]})},x="AdvertsList_advertsList__4qTN4",j="AdvertsList_ListItem__K1eNP",_=n(164),m="Modal_Overlay__yoxbg",k="Modal_Modal__I1UYJ",g="Modal_Image__1oBBy",p=document.querySelector("#modal-root"),w=function(e){var t=e.closeModal,n=e.dataAdvert.advert,r=n.make,s=n.img;return(0,u.useEffect)((function(){function e(e){"Escape"===e.code&&t()}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]),(0,_.createPortal)((0,i.jsx)("div",{className:m,onClick:function(e){e.target===e.currentTarget&&t()},children:(0,i.jsxs)("div",{className:k,children:[(0,i.jsx)("button",{onClick:t,children:"close"}),(0,i.jsx)("img",{src:s,alt:r,className:g}),(0,i.jsx)("h2",{children:r})]})}),p)},C=function(e){var t=e.adverts,n=(0,u.useState)(!1),s=(0,r.Z)(n,2),a=s[0],o=s[1],c=(0,u.useState)(),d=(0,r.Z)(c,2),l=d[0],v=d[1];function f(e){o(!a),v(e)}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ul",{className:x,children:t.map((function(e){return(0,i.jsx)("li",{className:j,children:(0,i.jsx)(h,{advert:e,togleModal:f,showModal:a})},e.id)}))}),a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:l.make}),(0,i.jsx)(w,{closeModal:f,dataAdvert:l})]})]})}},395:function(e,t,n){n.r(t);var r=n(901),s=n(434),a=n(851),i=n(184);t.default=function(){var e=(0,s.v9)(a.T).favorites;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"favorites"}),(0,i.jsx)(r.Z,{adverts:e})]})}},851:function(e,t,n){n.d(t,{O:function(){return r},T:function(){return s}});var r=function(e){return e.adverts},s=function(e){return e.favorites}}}]);
//# sourceMappingURL=395.16697982.chunk.js.map