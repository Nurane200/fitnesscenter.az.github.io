const searchForm = document.querySelector(".search-form");
const instagramForm = document.querySelector(".instagram-form");
const facebookForm = document.querySelector(".facebook-form");
//!buttons
const searchBtn = document.querySelector("#search-btn");
const instagramBtn = document.querySelector("#instagram-btn");
const facebookBtn = document.querySelector("#facebook-btn");

searchBtn.addEventListener("click", function (){
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(searchBtn) &&
            !e.composedPath().includes(searchForm)
        ) 
        {
        searchForm.classList.remove("active");
        }
    })
});
instagramBtn.addEventListener("click", function (){
    instagramForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(instagramBtn) &&
            !e.composedPath().includes(instagramForm)
        ) 
        {
        instagramForm.classList.remove("active");
        }
    })
});

facebookBtn.addEventListener("click", function (){
    facebookForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(facebookBtn) &&
            !e.composedPath().includes(facebookForm)
        ) 
        {
            facebookForm.classList.remove("active");
        }
    })
});
