

//detect pi browser by En/Moaaz Elsharkawy

function isPiBrowser() {
  return navigator.userAgent.indexOf("PiBrowser") !== -1;
}

if (!sessionStorage.getItem("pi_browser") && !isPiBrowser()) {
  var dialogBox = document.createElement("div");
  dialogBox.style.position = "fixed";
  dialogBox.style.top = "50%";
  dialogBox.style.left = "50%";
  dialogBox.style.transform = "translate(-50%, -50%)";
  dialogBox.style.width = "350px";
  dialogBox.style.padding = "20px";
  dialogBox.style.backgroundColor = "#f0f0f0";
  dialogBox.style.border = "1px solid #ccc";
  dialogBox.style.borderRadius = "5px";
  dialogBox.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
  dialogBox.style.zIndex = "9999";
  dialogBox.style.textAlign = "center";

  var dialogContent = document.createElement("p");
  dialogContent.textContent = "يفضل فتح المتجر في متصفح pi browser";
  dialogContent.style.marginBottom = "20px";

  var dialogContentEN = document.createElement("p");
  dialogContentEN.textContent = "It is recommended to open the store in pi browser.";
  dialogContentEN.style.marginBottom = "20px";

  dialogBox.appendChild(dialogContent);
  dialogBox.appendChild(dialogContentEN);

  var closeButton = document.createElement("button");
  closeButton.textContent = "ok";
  closeButton.style.backgroundColor = "#5e3f89";
  closeButton.style.color = "white";
  closeButton.style.border = "none";
  closeButton.style.padding = "10px 20px";
  closeButton.style.textAlign = "center";
  closeButton.style.textDecoration = "none";
  closeButton.style.display = "inline-block";
  closeButton.style.fontSize = "16px";
  closeButton.style.marginTop = "20px";
  closeButton.style.borderRadius = "4px";
  closeButton.style.cursor = "pointer";

  dialogBox.appendChild(closeButton);

  document.body.appendChild(dialogBox);

  closeButton.addEventListener("click", function () {
    dialogBox.style.display = "none";
    sessionStorage.setItem("pi_browser", "true");
  });
}



</script>
