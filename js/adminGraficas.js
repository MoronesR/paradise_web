var graficasAdmin = [
    {
        id:0,
        title: 'Lugares concurridos'
    },
    {
        id:1,
        title: 'Status'
    },
    {
        id:2,
        title: 'Genero de empleados'
    },
    {
        id:3,
        title: 'Tipo de lugares'
    },
    {
        id:4,
        title: 'Lugares por munucipio'
    }
];

window.onload = function(){
    let elem = document.getElementById("graficas"),
        items = document.getElementsByClassName('svgU'),
        btnPrev =document.getElementById("prev"),
        btnNext =document.getElementById("next"), 
        slideIndex = 0;

    graficasAdmin.forEach(x => {
        let svgElem = document.createElementNS ("http://www.w3.org/2000/svg", "svg");
        getGrafica(svgElem,x.title,x.id)
        svgElem.setAttribute("class","svgU fade");
        elem.appendChild(svgElem);        
    });   
    showSlides(slideIndex);
    btnNext.addEventListener('click',() => {
        plusSlides(1);
    });
    btnPrev.addEventListener('click',() => {
        plusSlides(-1);
    });
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }    
    function showSlides(n) {
        var i;
        if (n > (items.length - 1)) {slideIndex = 0}    
        if (n < 0) {slideIndex = (items.length - 1)}
        for (i = 0; i < items.length; i++) {
            items[i].style.display = "none";  
        }
        items[slideIndex].style.display = "block";
    }
    function getGrafica(elem,titulo,id) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let data =JSON.parse(this.responseText);     
                graficaBarra(elem,titulo, data);
            }
        };
        xmlhttp.open("GET", "../php/actions/AcGraficas.php?type="+id, true);
        xmlhttp.send();
    }
};