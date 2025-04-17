
let listElements = document.querySelectorAll(".item-click"); // Selecciona todos los elementos con la clase "Brand"

listElements.forEach(listElement => { // Recorre cada elemento
    listElement.addEventListener("click", () => { 
 

        listElement.classList.toggle('arrow');
        
        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}p`

    });
});

