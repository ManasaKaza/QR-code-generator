function generateQR() {
    const gapi = "https://chart.googleapis.com/chart?&cht=qr&chs=";
    const myimg = document.getElementById("img");
    const mytext = document.getElementById("qrtext").value;
    const mysize = document.getElementById("size").value;
  
    if (mytext !== "" && ["100", "150", "200", "250", "300"].includes(mysize)) {
      myimg.src = `${gapi}${mysize}x${mysize}&chl=${mytext}`;
    } else {
      alert("Please Enter Text or Select a Valid Size");
    }
  }
  