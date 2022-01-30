// view more button

function viewMore(){
    let viewMoreBtn = document.getElementById("view-more-btn");
    if (viewMoreBtn.innerText == "View More") {
        document.getElementById("view-more-city").style.display = "block";
        viewMoreBtn.innerText = "View Less";
    }
    else {
        document.getElementById("view-more-city").style.display = "none";
        viewMoreBtn.innerText = "View More";
    }
}