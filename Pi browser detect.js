<script>
  function isPiBrowser() {
    return navigator.userAgent.indexOf("PiBrowser") !== -1;
  }

  function openLinkInPiBrowser() {}

  if (!sessionStorage.getItem("pi_browser") && !isPiBrowser()) {
    setTimeout(function () {
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
      dialogContent.innerHTML =
        "بعد الفحص تبين انك لم تستخدم متصفح الباي يفضل فتح المتجر في متصفح pi browser.";

         dialogContent.style.marginBottom = "20px";

      var dialogContentEN = document.createElement("p");
      dialogContentEN.textContent =
        "It is recommended to open the store in pi browser";
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
        window.location = "pi: باي سلة شوب";
      });

      dialogBox.appendChild(openInPiBrowserBtn);

      var cancelButton = document.createElement("button");
      cancelButton.textContent = "cancel";
      cancelButton.style.margin = "0 auto";
      cancelButton.style.backgroundColor = "#C68E17";
      cancelButton.style.color = "white";
      cancelButton.style.border = "none";
      cancelButton.style.padding = "15px 20px";
      cancelButton.style.textAlign = "center";
      cancelButton.style.textDecoration = "none";
      cancelButton.style.display = "inline-block";
      cancelButton.style.fontSize = "16px";
      cancelButton.style.marginTop = "20px";
      cancelButton.style.borderRadius = "4px";
      cancelButton.style.cursor = "pointer";
      cancelButton.addEventListener("click", function () {
        dialogBox.style.display = "none";
        sessionStorage.setItem("pi_browser", "true");

        var confirmationBox = document.createElement("div");

        confirmationBox.style.position = "fixed";
        confirmationBox.style.display = "flex";
        confirmationBox.style.flexDirection = "column";
        confirmationBox.style.alignItems = "center";
        confirmationBox.style.top = "50%";
        confirmationBox.style.left = "50%";
        confirmationBox.style.transform = "translate(-50%, -50%)";
        confirmationBox.style.width = "300px";
        confirmationBox.style.padding = "20px";
        confirmationBox.style.backgroundColor = "#f0f0f0";
        confirmationBox.style.border = "1px solid #ccc";
        confirmationBox.style.borderRadius = "20px";
        confirmationBox.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
        confirmationBox.style.zIndex = "9999";
        confirmationBox.style.textAlign = "center";
 var confirmationText = document.createElement("p");
confirmationText.innerHTML = "<span style='color: darkred;'>Error: لا ينصح بتجاهل فتح المتجر في متصفح الباي.</span>";


        confirmationText.style.marginBottom = "20px";

        var openInPiBrowserAgainBtn = document.createElement("button");
        openInPiBrowserAgainBtn.textContent = "فتح في متصفح الباي";
        openInPiBrowserAgainBtn.style.backgroundColor = "#5e3f89";
        openInPiBrowserAgainBtn.style.color = "white";
        openInPiBrowserAgainBtn.style.border = "none";
        openInPiBrowserAgainBtn.style.padding = "15px 20px";
        openInPiBrowserAgainBtn.style.textAlign = "center";
        openInPiBrowserAgainBtn.style.textDecoration = "none";
        openInPiBrowserAgainBtn.style.display = "inline-block";
        openInPiBrowserAgainBtn.style.fontSize = "16px";
        openInPiBrowserAgainBtn.style.marginTop = "15px";
        openInPiBrowserAgainBtn.style.borderRadius = "4px";
        openInPiBrowserAgainBtn.style.cursor = "pointer";
        openInPiBrowserAgainBtn.addEventListener("click", function () {
          confirmationBox.style.display = "none";
          window.location = "pi: باي سلة شوب";
        });

        var okButton = document.createElement("button");
        okButton.textContent = "تجاهل";
        okButton.style.backgroundColor = "#5e3f89";
        okButton.style.color = "white";
        okButton.style.border = "none";
        okButton.style.padding = "15px 20px";
        okButton.style.textAlign = "center";
        okButton.style.textDecoration = "none";
        okButton.style.display = "inline-block";
        okButton.style.fontSize = "16px";
        okButton.style.marginTop = "15px";
        okButton.style.borderRadius = "4px";
        okButton.style.cursor = "pointer";
        okButton.addEventListener("click", function () {
          confirmationBox.style.display = "none";
        });

        confirmationBox.appendChild(confirmationText);
        confirmationBox.appendChild(openInPiBrowserAgainBtn);
        confirmationBox.appendChild(okButton);

        document.body.appendChild(confirmationBox);
      });

      dialogBox.appendChild(cancelButton);

      document.body.appendChild(dialogBox);
    }, 5000);
  }
</script>
