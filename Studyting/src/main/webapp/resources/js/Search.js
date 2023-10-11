function Search() {

    var newiframe = document.createElement("iframe");
    newiframe.style.width = "98.5%";
    newiframe.style.height = "98.5%";
    newiframe.style.border = "none";
    newiframe.style.scrolling = "no";

    newiframe.src = "Search_iframe.html";
    var parent = document.getElementById("search_group");
    parent.replaceChildren();

    parent.appendChild(newiframe);
}

function Add_Group() {
    window.open("New_Group.html", '_blank', "width = 650, height = 500, toolbar=no,"
        + "menubar=no, location=no,scrollbars=no, resizable=no");
}