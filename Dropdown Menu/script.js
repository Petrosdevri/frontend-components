const menu = document.getElementsByClassName("menu")[0];
const submenu = document.getElementsByClassName("menu-sub")[0];

function menuItemEnter() {
    submenu.style.display = "block";
}

function menuItemLeave() {
    submenu.style.display = "none";
}

function onMenuItemMouseEnter(item) {
    item.classList.add("menu-item--active");
    menuItemEnter();
}

const menuItems = document.getElementsByClassName("menu-item");
for(let menuItem of menuItems) {
    menuItem.onmouseenter = () => onMenuItemMouseEnter(menuItem);
}

menu.onmouseleave = menuItemLeave;