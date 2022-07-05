'use strict';
const navigation = document.getElementById("navigation");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click",()=>{
    //this.classList.toggle("active");
    toggle.classList.toggle('active');
    navigation.classList.toggle('navigation-toggle');
});