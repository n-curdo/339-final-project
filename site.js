var nav_sidebar = document.querySelector(".nav_sidebar");
var nav_button = document.querySelector(".nav_button");

/*------BEGIN ALL GRID IMAGE STUFF----*/
var angels_img = document.querySelector("#angels");
var angels_active = false;
var devils_img = document.querySelector("#devils");
var devils_active = false;
var emerald_img = document.querySelector("#emerald");
var emerald_active = false;
var delicate_img = document.querySelector("#delicate");
var delicate_active = false;
var cathedral_img = document.querySelector("#cathedral");
var cathedral_active = false;
var navajo_img = document.querySelector("#navajo");
var navajo_active = false;
var rattlesnake_img = document.querySelector("#rattlesnake");
var rattlesnake_active = false;
var skyline_img = document.querySelector("#skyline");
var skyline_active = false;
var vernal_img = document.querySelector("#vernal");
var vernal_active = false;

var info_img = document.querySelector("#info_img");
var info_text = document.querySelector("#info_text");
var info_zone = document.querySelector(".info_zone");
/*------END ALL GRID IMAGE STUFF----*/




window.addEventListener("load", function(){
    console.log("window has been opened");
    /*Sets all the active values to false*/
    angels_active = false;
    devils_active = false;
    emerald_active = false;
    delicate_active = false;
    cathedral_active = false;
    navajo_active = false;
    rattlesnake_active = false;
    skyline_active = false;
    vernal_active = false;

});

nav_button.addEventListener("click", function(){
    if(nav_sidebar.style.backgroundColor == "red"){
        nav_sidebar.style.backgroundColor = "blue";
    }else{
        nav_sidebar.style.backgroundColor = "red";
    }
});

angels_img.addEventListener("click", function(){
    if(angels_active == false){
        angels_active = true;
        info_zone.style.display = "grid";
        info_img.style.display = "inline";
        info_text.style.display = "inline";

        info_img.src = "images/angels_landing.jpg";
        info_img.alt = "Angels Landing Trail Image";
        
        info_text.innerHTML = "<span style='font-weight: bold; font-size: x-large;'>Angels Landing Trail</span> <br><br> Angels landing is a quintessential hike in Zion National Park and offers amazing viewpoints second to few. <br><br> Angels Landing itself is a unique fin-like mountain formation jutting out from the center of the main canyon and the trail follows this spine to the final viewpoint approximately 1500 feet above the canyon floor. <br><br> This hike is said to take between 2-4 hours at a round-trip distance of 5.4 miles so make sure you plan accordingly and happy hiking!"

        info_img.scrollIntoView();
    }else{
        info_img.scrollIntoView();
    }
});

devils_img.addEventListener("click", function(){
    if(devils_active == false){
        devils_active = true;
        info_zone.style.display = "grid";
        info_img.style.display = "inline";
        info_text.style.display = "inline";

        info_img.src = "images/devils_bridge.jpg";
        info_img.alt = "Devil's Bridge Trail Image";
        
        info_text.innerHTML = "<span style='font-weight: bold; font-size: x-large;'>Devil's Bridge Trail</span> <br><br> Devil's Bridge is the largest natrual sandstone arch in the Sedona area within Coconino National Forest resembling a bridge due to its size. <br><br> The hike offers breathtaking views of Red Rock country sometimes leading you to believe you're on another planet. <br><br> The hike is moderately challenging with a round-trip length of 3.9 miles and typically takes under 2 hours to complete thus resulting in it being a highly popular trail and area for hiking and off-road driving. <br><br> Bon Voyage!"

        info_img.scrollIntoView();
    }else{
        info_img.scrollIntoView();
    }
});

emerald_img.addEventListener("click", function(){
    if(emerald_active == false){
        emerald_active = true;
        info_zone.style.display = "grid";
        info_img.style.display = "inline";
        info_text.style.display = "inline";

        info_img.src = "images/emerald_lake.jpg";
        info_img.alt = "Emerald Lake Trail Image";
        
        info_text.innerHTML = "<span style='font-weight: bold; font-size: x-large;'>Emerald Lake Trail</span> <br><br> Emerald Lake is a gorgeous staple within Rocky Mountain National Park. <br><br> The trail is perfect for photography enthusiasts providing ample opportunities to score amazing shots of the mountains surrounding the trail. <br><br> At 3.2 miles round trip, the trail itself is considered easy to complete in typically under 2 hours and the area is very popular for hiking and snowshoeing. <br><br> Safe Travels!"

        info_img.scrollIntoView();
    }else{
        info_img.scrollIntoView();
    }
});

delicate_img.addEventListener("click", function(){
    if(delicate_active == false){
        delicate_active = true;
        info_zone.style.display = "grid";
        info_img.style.display = "inline";
        info_text.style.display = "inline";

        info_img.src = "images/delicate_arch.jpg";
        info_img.alt = "Delicate Arch Trail Image";
        
        info_text.innerHTML = "<span style='font-weight: bold; font-size: x-large;'>Delicate Arch Trail</span> <br><br> When in Arches National Park, visiting the Delicate Arch is a MUST and perfect during golden hours just after sunrise and before sunset when the rocks turn beautiful colors. <br><br> The park itself is home to some of the greatest geologic features across the globe and this trail gives you views of many of them. <br><br> The hike itself is considered moderately challenging at 3.2 miles round trip and taking about an hour and a half to complete. Although the trail is better to hike in the spring or fall when temperatures are cooler and you're safe from the scorching sun. <br><br> Godspeed!"

        info_img.scrollIntoView();
    }else{
        info_img.scrollIntoView();
    }
});

cathedral_img.addEventListener("click", function(){
    if(cathedral_active == false){
        cathedral_active = true;
        info_zone.style.display = "grid";
        info_img.style.display = "inline";
        info_text.style.display = "inline";

        info_img.src = "images/cathedral_rock.jpg";
        info_img.alt = "Cathedral Rock Trail Image";
        
        info_text.innerHTML = "<span style='font-weight: bold; font-size: x-large;'>Cathedral Rock Trail</span> <br><br> Cathedral rock is a natural sandstone butte on the Sedona skyline and one of the most-photographed sights in Arizona. <br><br> The trail itself is very rocky and highly technical but offers great views of the naturally occurring goliath rock formations in the heart of red rock country. <br><br> The hike is considered a challenging route due to its rocky nature taking a little over an hour to complete an only 1.2 mile round trip route. If you plan to take it be sure to bring good hiking boots. <br><br> Proceed with caution!"

        info_img.scrollIntoView();
    }else{
        info_img.scrollIntoView();
    }
});

navajo_img.addEventListener("click", function(){
    if(navajo_active == false){
        navajo_active = true;
        info_zone.style.display = "grid";
        info_img.style.display = "inline";
        info_text.style.display = "inline";

        info_img.src = "images/navajo_loop.jpg";
        info_img.alt = "Navajo Loop and Queens Garden Trail Image";
        
        info_text.innerHTML = "<span style='font-weight: bold; font-size: x-large;'>Navajo Loop and Queens Garden Trail</span> <br><br> The trail offers incredible views and unique rock formations within Bryce Canyon Nationak park and takes you by the park's iconic features including Queen Victoria and Thor's Hammer. <br><br> Often considered an other-wordly landscape, the white, red, and orange sandstone towers can nearly pass as man-made. <br><br> The trail itself is moderately challenging taking an average of an hour and a half to complete the 3.1 mile round-trip route. <br><br> Cheerio!"

        info_img.scrollIntoView();
    }else{
        info_img.scrollIntoView();
    }
});

rattlesnake_img.addEventListener("click", function(){
    if(rattlesnake_active == false){
        rattlesnake_active = true;
        info_zone.style.display = "grid";
        info_img.style.display = "inline";
        info_text.style.display = "inline";

        info_img.src = "images/rattlesnake_ledge.jpg";
        info_img.alt = "Rattlesnake Ledge Trail Image";
        
        info_text.innerHTML = "<span style='font-weight: bold; font-size: x-large;'>Rattlesnake Ledge Trail</span> <br><br> "

        info_img.scrollIntoView();
    }else{
        info_img.scrollIntoView();
    }
});



