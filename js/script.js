document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menuList = document.getElementById('menu-list');
    const nav = document.querySelector('nav'); 
    const h1 = document.querySelector("header h1");
    const additionalInfo = document.querySelector(".additional-info");

    openTab(null, 'Projects');

    // Scroll event handler
    document.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            h1.classList.add("shift");
        } else {
            h1.classList.remove("shift");
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
