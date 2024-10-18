document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menuList = document.getElementById('menu-list');
    const nav = document.querySelector('nav'); 
    const h1 = document.querySelector("header h1");
    const additionalInfo = document.querySelector(".additional-info");
    const tabs = document.querySelector('.tabs');

    openTab(null, 'Projects');

    // Scroll event handler
    document.addEventListener("scroll", function() {

        if(window.scrollY > 1000) {
            tabs.classList.add('visible');
        } else {
            tabs.classList.remove('visible')
        }

        if (window.scrollY > 50) {
            h1.classList.add("shift");
        } else {
            h1.classList.remove("shift");
        }

        if (window.scrollY > 1000) { 
            tabs.classList.add('visible'); 
        } else {
            tabs.classList.remove('visible'); 
        }

        if(window.scrollY <= 1000){
            h1.style.display = 'block'
            nav.style.display = 'block'
        }else{
            h1.style.display = 'none'
            nav.style.display = 'none'
        }

        // Navigation style change
        if (window.scrollY > nav.offsetTop) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }

        // Show additional info based on scroll position
        if (window.scrollY > 300 && window.scrollY <= 1000) {
            additionalInfo.classList.add("visible");
        } else {
            additionalInfo.classList.remove("visible");
        }
    });

    // Function to open tabs
    function openTab(evt, tabName) {
        const tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        const tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
        document.getElementById(tabName).style.display = "block";
        if (evt) {
            evt.currentTarget.classList.add("active");
        }
    }

    // Navigation link event listeners
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            openTab(null, sectionId);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });
});

function openTab(evt, tabName) {
    // Get all elements with class="tabcontent" and hide them
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// By default, open the first tab when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
});
