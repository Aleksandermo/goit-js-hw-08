!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=n.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},n.parcelRequired7c6=l);var r=l("5IjG7"),o=l("dwxJN"),i=document.querySelector(".gallery"),c=o.galleryItems.map((function(e){return'<li class = "gallery_item">\n    <a class="gallery__item" href="'.concat(e.original,'">\n    <img\n        class="gallery__image"\n        src="').concat(e.preview,'" \n        alt="').concat(e.description,'"\n        data-source="').concat(e.original,'"\n    >\n    </img>\n    </a>\n    </li>')})).join("");i.insertAdjacentHTML("afterbegin",c),document.addEventListener("DOMContentLoaded",(function(){new(e(r))(".gallery a",{captionsData:"alt",captionDelay:250})})),console.log(o.galleryItems)}();
//# sourceMappingURL=02-lightbox.082d8358.js.map
