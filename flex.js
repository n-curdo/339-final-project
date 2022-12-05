/* ------BEGIN ALL FLEX PAGE STUFF------ */
var backpack_img = document.querySelector("#backpack");
var backpack_info = document.querySelector("#backpack_info")
var boots_img = document.querySelector("#boots_img");
var boots_info = document.querySelector("#boots_info");
var map_img = document.querySelector("#map_img");
var map_info = document.querySelector("#map_info");
var aid_img = document.querySelector("#aid_img");
var aid_info = document.querySelector("#aid_info");
var knife_img = document.querySelector("#knife_img");
var knife_info = document.querySelector("#knife_info");
var sunscreen_img = document.querySelector("#sunscreen_img");
var sunscreen_info = document.querySelector("#sunscreen_info");
var insect_img = document.querySelector("#insect_img");
var insect_info = document.querySelector("#insect_info");
var light_img = document.querySelector("#light_img");
var light_info = document.querySelector("#light_info");
var food_img = document.querySelector("#food_img");
var food_info = document.querySelector("#food_info");

/*-------END ALL FLEX PAGE STUFF------ */
window.addEventListener("load", function(){
    console.log("Window opened successfully");
});

backpack_img.addEventListener("click", function(){
    if (backpack_info.style.display == "none"){
        backpack_info.style.display = "block";
        backpack_img.scrollIntoView();
    }else{
        backpack_info.style.display = "none";
    }
});
backpack_img.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        backpack_img.click();
    }
});

boots_img.addEventListener("click", function(){
    if (boots_info.style.display == "none"){
        boots_info.style.display = "block";
        boots_img.scrollIntoView();
    }else{
        boots_info.style.display = "none";
    }
});
boots_img.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        boots_img.click();
    }
});

map_img.addEventListener("click", function(){
    if (map_info.style.display == "none"){
        map_info.style.display = "block";
        map_img.scrollIntoView();
    }else{
        map_info.style.display = "none";
    }
});
map_img.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        map_img.click();
    }
});

aid_img.addEventListener("click", function(){
    if (aid_info.style.display == "none"){
        aid_info.style.display = "block";
        aid_img.scrollIntoView();
    }else{
        aid_info.style.display = "none";
    }
});
aid_img.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        aid_img.click();
    }
});

knife_img.addEventListener("click", function(){
    if (knife_info.style.display == "none"){
        knife_info.style.display = "block";
        knife_img.scrollIntoView();
    }else{
        knife_info.style.display = "none";
    }
});
knife_img.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        knife_img.click();
    }
});

sunscreen_img.addEventListener("click", function(){
    if (sunscreen_info.style.display == "none"){
        sunscreen_info.style.display = "block";
        sunscreen_img.scrollIntoView();
    }else{
        sunscreen_info.style.display = "none";
    }
});
sunscreen_img.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        sunscreen_img.click();
    }
});

insect_img.addEventListener("click", function(){
    if (insect_info.style.display == "none"){
        insect_info.style.display = "block";
        insect_img.scrollIntoView();
    }else{
        insect_info.style.display = "none";
    }
});
insect_img.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        insect_img.click();
    }
});

light_img.addEventListener("click", function(){
    if (light_info.style.display == "none"){
        light_info.style.display = "block";
        light_img.scrollIntoView();
    }else{
        light_info.style.display = "none";
    }
});
light_img.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        light_img.click();
    }
});

food_img.addEventListener("click", function(){
    if (food_info.style.display == "none"){
        food_info.style.display = "block";
        food_img.scrollIntoView();
    }else{
        food_info.style.display = "none";
    }
});
food_img.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        food_img.click();
    }
});
