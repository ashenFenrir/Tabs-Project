document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#sources_list > a").forEach(element => {
        console.log(element);
        element.href = element.text;
    });
});

var current_tab = 0;
var ids = 2;

function new_tab(){
    tabs_container = document.getElementById("tabs_container");
    tabs_bar = document.getElementById("tabs_bar");
    
    const new_tab_frame = document.createElement("div");
    new_tab_frame.id = `tab_${++ids}`;
    new_tab_frame.className = 'tab';
    new_tab_frame.style.visibility = "hidden";
    new_tab_frame.innerText = ` It's a tab number ${ids+1}`;
    
    const new_tab_button = document.createElement("div");
    new_tab_button.id = `tab_button_${ids}`;
    new_tab_button.className = 'tab_button';
    new_tab_button.setAttribute("onclick", `tab_func(${ids})`);
    new_tab_button.innerText = `Tab #${ids+1}`;
    console.log(new_tab_button);
    
    

    tabs_container.appendChild(new_tab_frame);
    tabs_bar.appendChild(new_tab_button);
}

function tab_func(id){
    console.log(id);
    prev_tab = document.getElementById(`tab_${current_tab}`);
    prev_tab.style.visibility = "hidden";

    tab = document.getElementById(`tab_${id}`);
    tab.style.visibility='visible';
    current_tab = id;

}