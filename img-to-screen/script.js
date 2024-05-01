let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

// Déplacement du premier élément miniature à la fin
thumbnail.appendChild(thumbnailItems[0])

// Fonction pour le bouton suivant
nextBtn.onclick = function() {
    moveSlider('next')
}


// Fonction pour le bouton précédent
prevBtn.onclick = function() {
    moveSlider('prev')
}

// Fonction pour déplacer le carrousel
function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item') // Sélection des éléments du carrousel
    let thumbnailItems = document.querySelectorAll('.thumbnail .item') // Sélection des éléments miniatures

    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0]) // Déplacement de l'élément suivant à la fin du carrousel
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next') // Ajout de la classe 'next' pour l'animation
    } else {
        // Déplacement du dernier élément au début du carrousel
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev') // Ajout de la classe 'prev' pour l'animation
    }

    // Suppression de la classe d'animation après la fin de l'animation
    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true})  // Suppression de l'événement après son exécution
}