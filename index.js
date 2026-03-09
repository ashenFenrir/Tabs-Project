document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#sources_list > a").forEach(element => {
        console.log(element);
        element.href = element.text;
    });
});

var current_tab = 0;

function tab_func(id){
    prev_tab = document.getElementById(`tab_${current_tab}`);
    prev_tab.style.visibility = "hidden";

    tab = document.getElementById(`tab_${id}`);
    tab.style.visibility='visible';
    current_tab = id;

}