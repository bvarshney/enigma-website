var btn1 = document.getElementById("btn-1");
        var btn2 = document.getElementById("btn-2");
        var btn3 = document.getElementById("btn-3");
        var btn4 = document.getElementById("btn-4");

        var page1 = document.getElementById("page-1");
        var page2 = document.getElementById("page-2");
        var page3 = document.getElementById("page-3");
        var page4 = document.getElementById("page-4");

        var btnBackArray = document.getElementsByClassName("btn-back");

        // Add click event listeners to buttons
        btn1.addEventListener("click", function() {
            showPage(page1);
        });

        btn2.addEventListener("click", function() {
            showPage(page2);
        });

        btn3.addEventListener("click", function() {
            showPage(page3);
        });

        btn4.addEventListener("click", function() {
            showPage(page4);
        });

        // Add click event listeners to back buttons
        for (var i = 0; i < btnBackArray.length; i++) {
            btnBackArray[i].addEventListener("click", function() {
                hideAllPages();
            });
        }

        // Function to show a specific page
        function showPage(page) {
            hideAllPages();
            page.classList.remove("opacity-0");
        }

        // Function to hide all pages
        function hideAllPages() {
            page1.classList.add("opacity-0");
            page2.classList.add("opacity-0");
            page3.classList.add("opacity-0");
            page4.classList.add("opacity-0");
        }