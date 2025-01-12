let link = document.getElementById('link');
let generate = document.getElementById('generate');
let qrImage = document.getElementById('qrImage');
let errorPrint = document.getElementById('errorprint');


// console.log("bhopal");
function generateQR(){
    if(link.value){
        let url = link.value;
        qrImage.style.display = "block";
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
        console.log("hit url");
        console.log(qrImage.src);
    }
    else{
        console.log("No url found");
        errorPrint.innerText = "No url found !!";   
    }
}

link.addEventListener( 'input',()=>{
    errorPrint.innerText = "";
    qrImage.style.display = "none";
})



