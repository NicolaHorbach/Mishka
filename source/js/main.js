const triggersElements=document.querySelectorAll("[data-trigger]"),modalElement=document.querySelector("[data-triggeredBy]"),modalBackdrop=document.querySelector(".modal-backdrop"),showClassname="is-opened",hideClassname="is-hidden";function showModal(){modalElement.classList.toggle(showClassname);modalBackdrop.classList.toggle(hideClassname)}triggersElements.forEach(function(a){a.addEventListener("click",function(b){b.preventDefault();showModal()})});modalBackdrop.addEventListener("click",function(a){showModal()});
const navigation=document.querySelectorAll(".navigation-list"),toggle=document.querySelector(".toggle");changeMenuVisibility();function changeMenuVisibility(){navigation.forEach(function(a){a.classList.toggle("is-opened")});toggle.classList.toggle("is-toggled")}toggle.addEventListener("click",function(){changeMenuVisibility()});