console.log("file sharing app");
let fileDrop = document.querySelector(".fileDrop");
let browse = document.getElementById("browse");
let fileInput = document.getElementById("fileInput");
fileDrop.addEventListener("dragover",(e)=>{
    e.preventDefault();
    console.log("hey");
    if(!fileDrop.classList.contains('dragged'));
        {fileDrop.classList.add('dragged');}
});

fileDrop.addEventListener("dragleave",()=>{
    console.log("hey");
    fileDrop.classList.remove('dragged');
});
fileDrop.addEventListener("drop",(e)=>{
    e.preventDefault();
    console.log("hey1");
    fileDrop.classList.remove('dragged');
    console.log(e.dataTransfer.files.length);
});
browse.addEventListener("click",()=>{
fileInput.click();
console.log(fileInput.files);
//console.log(e.dataTransfer.files.length);
});
// browse.onchange = function(event) {
//     console.log(event);
//     //TODO do something with fileList.  
// }
function fileupload(){
    console.log(fileInput.files);
}
