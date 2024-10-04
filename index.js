      let imgBox = document.getElementById("imgBox");
      let qrImage = document.getElementById("qrImage");
      let qrText = document.getElementById("qrText");
      let errorr = document.getElementById("errorr");


      function generateQR(){
        if(qrText.value.length > 0){
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
            imgBox.classList.add("show-img");
          }
          //  else if(qrText.value==3){
          //  errorr.textContent ="Not valid";
          // }
          else{
            qrText.classList.add('error');
            setTimeout(()=>{
              qrText.classList.remove('error');
            },1000)
               
          }

      }