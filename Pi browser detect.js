<script>

function isPiBrowser() {
  return navigator.userAgent.indexOf("PiBrowser") !== -1;
}

function openLinkInPiBrowser() {}

if (!sessionStorage.getItem("pi_browser") && !isPiBrowser()) {

  var dialogBox = document.createElement("div");

  // إضافة محتوى النافذة الجديدة هنا
  dialogBox.style.position = "fixed";
  dialogBox.style.display = "flex";
  dialogBox.style.flexDirection = "column";
  dialogBox.style.alignItems = "center";
  dialogBox.style.top = "50%";
  dialogBox.style.left = "50%";
  dialogBox.style.transform = "translate(-50%, -50%)";
  dialogBox.style.width = "370px";
  dialogBox.style.padding = "20px";
  dialogBox.style.backgroundColor = "#f0f0f0";
  dialogBox.style.border = "1px solid #ccc";
  dialogBox.style.borderRadius = "20px";
  dialogBox.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
  dialogBox.style.zIndex = "9999";
  dialogBox.style.textAlign = "center";

  var dialogContent = document.createElement("p");
  dialogContent.textContent = "بعد الفحص تبين انك لم تستخدم متصفح الباي يفضل فتح المتجر في متصفح pi browser .";
  dialogContent.style.marginBottom = "20px";

  var dialogContentEN = document.createElement("p");
  dialogContentEN.textContent = "It is recommended to open the store in pi browser";
  dialogContentEN.style.marginBottom = "20px";

  dialogBox.appendChild(dialogContent);
  dialogBox.appendChild(dialogContentEN);

var openInPiBrowserBtn = document.createElement("a");
openInPiBrowserBtn.textContent = " open in pi browser";
openInPiBrowserBtn.style.backgroundColor = "#5e3f89";
openInPiBrowserBtn.style.color = "white";
openInPiBrowserBtn.style.margin = "0 auto";
openInPiBrowserBtn.style.border = "none";
openInPiBrowserBtn.style.padding = "15px 20px";
openInPiBrowserBtn.style.textAlign = "center";
openInPiBrowserBtn.style.textDecoration = "none";
openInPiBrowserBtn.style.display = "inline-block";
openInPiBrowserBtn.style.fontSize = "16px";
openInPiBrowserBtn.style.marginTop = "15px";
openInPiBrowserBtn.style.borderRadius = "4px";
openInPiBrowserBtn.style.cursor = "pointer";
openInPiBrowserBtn.addEventListener("click", function () {

window.location = "pi:";

});

dialogBox.appendChild(openInPiBrowserBtn);

  var closeButton = document.createElement("button");
  closeButton.textContent = "exit";
  closeButton.style.margin = "0 auto";
closeButton.style.backgroundColor = "#C68E17";
  closeButton.style.color = "white";
  closeButton.style.border = "none";
  closeButton.style.padding = "15px 20px";
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
