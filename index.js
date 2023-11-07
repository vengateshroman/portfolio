//toggle icon navbar

//scroll section


window.onscroll=()=>{
    //sticky Headers
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY >100);
}
