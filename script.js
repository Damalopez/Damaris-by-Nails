// ==========================
// NAILS BY DAMARIS
// ==========================

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        if(destino){
            destino.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Animación al aparecer
const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("mostrar");
        }
    });
},{
    threshold:.15
});

document.querySelectorAll("section,.card,.gallery img").forEach(el=>{
    observer.observe(el);
});

// Botón volver arriba
const subir=document.createElement("button");

subir.innerHTML="↑";

subir.id="btnTop";

document.body.appendChild(subir);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        subir.style.display="block";

    }else{

        subir.style.display="none";

    }

});

subir.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Lightbox para imágenes
const imagenes=document.querySelectorAll(".gallery img");

const fondo=document.createElement("div");

fondo.id="lightbox";

fondo.innerHTML="<img>";

document.body.appendChild(fondo);

const imagenGrande=fondo.querySelector("img");

imagenes.forEach(img=>{

    img.addEventListener("click",()=>{

        imagenGrande.src=img.src;

        fondo.classList.add("activo");

    });

});

fondo.addEventListener("click",()=>{

    fondo.classList.remove("activo");

});
