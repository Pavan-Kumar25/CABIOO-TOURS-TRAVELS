/*=========================================================
                WEBSITE PRELOADER
==========================================================*/

window.addEventListener("load", function(){

    document.getElementById("preloader").style.display = "none";

});

/*=========================================================
            SCROLL REVEAL
==========================================================*/

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSection);


function revealSection(){

    reveals.forEach(section=>{


        const windowHeight = window.innerHeight;


        const revealTop = section.getBoundingClientRect().top;


        const revealPoint = 120;



        if(revealTop < windowHeight - revealPoint){


            section.classList.add("active");


        }


    });


}


revealSection();