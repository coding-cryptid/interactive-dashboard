let count=0;

const countDisplay=document.getElementById("count");

document.getElementById("plus").addEventListener("click", () => {
    count++;
    countDisplay.textCOntent=count;
});

document.getElementById("minus").addEventListener("click", () => {
    count--;
    countDisplay.textCOntent=count;
});