var indicator = document.querySelectorAll('.indicator__item > a');
indicator.forEach(function(el){
    el.addEventListener('click' , function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }) ;
});
