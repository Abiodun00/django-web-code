const titleInput = document.querySelector('input[name=title]');
const slugInput = document.querySelector('input[name=slug]');
const slugify = (val) =>{
    return val.toString().toLowerCase().trim()
//replace & with '-and-'
    .replace(/&/g,'-and-') 
    .replace(/[\s\W-]+/g,'-') //replace spaces, non word chars and dashes with a single dash
};

titleInput.addEventListener('keyup',(e)=>{
    slugInput.setAttribute('value',slugify(titleInput.value));
});