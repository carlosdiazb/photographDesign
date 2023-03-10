let options = document.querySelectorAll(".selections p");

for (const option of options) {
    option.addEventListener("click", () => handleClick(option));
}

function handleClick(option){
    let optionMenu = option.dataset.menu;
    let optionMenuElement = document.getElementById("menu-" + option.dataset.menu)
    let menus = document.querySelectorAll(".menu");

    for (const menu of menus) {
        if(menu.id == "menu-" + optionMenu){
            setTimeout(() =>{
                menu.style.position = "relative";
                menu.style.width = "100%";
                menu.style.height = "auto";
            }, 300)
            menu.style.left = "0";
        }else{
            if(menu.dataset.number < optionMenuElement.dataset.number){
                menu.style.left = "-4000px";
            }else{
                menu.style.left = "4000px";
            }
            setTimeout(() =>{
                menu.style.position = "relative";
                menu.style.width = "0";
                menu.style.height = "0";
            }, 300)
        }
    }
    removeSelected();
    option.classList.add("menu-selected");
}

function removeSelected() {
    let options = document.querySelectorAll(".selections p");
    for (const option of options) {
        option.classList.remove("menu-selected");
    }
}