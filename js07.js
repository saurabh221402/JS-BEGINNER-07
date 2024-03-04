let qrtext= document.getElementById("qrlink");
        let qrimage = document.getElementById("qrimage");
        
        function generateQR(){
            if(qrtext.value=="")
            {
                alert("enter url or name");
            }
            else{
            qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrtext.value;
            console.log(qrimage);
            }
        }
let btn =document.getElementById("ss");

        btn.addEventListener('click', ()=>
        {
            html2canvas(document.getElementById("imgbox"))
            .then(canvas =>{
                const url =canvas.toDataURL('image/png');
                const a = document.createElement('a');
                a.setAttribute('download','imageName.png');
                a.setAttribute('href',url);
                a.click();
            })
        })