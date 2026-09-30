// 1. SEARCH MOVIES 
const searchInput = document.querySelector(".search-box input"); 
const movieCards = document.querySelectorAll(".movie-card"); 
searchInput.addEventListener("input", function () { 
    const searchText = searchInput.value.toLowerCase(); 
    movieCards.forEach(function (card) { 
        const movieName = card.querySelector("h3").textContent.toLowerCase(); 
        if (movieName.includes(searchText)) { 
            card.style.display = "block"; 
        } else { 
                card.style.display = "none"; 
        }
       
     });
    
});

// 2. MOVIE CARD CLICK 
movieCards.forEach(function (card) { 
    card.addEventListener("click", function () { 
        const movieName = card.querySelector("h3").textContent; 

        alert("You selected: " + movieName); 
    }); 
});

// 3. NAVIGATION MENU
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) { 
        event.preventDefault(); 
        const menuName = link.textContent; 
        alert(menuName + " clicked");
    });
});

// 4. WEBSITE LOADED
console.log("Netflix website loaded successfully!");