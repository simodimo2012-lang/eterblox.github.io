const btn = document.getElementById("downloadAll");
const msg = document.getElementById("msg");

btn.addEventListener("click", () => {
  const files = ["downloads/ArabBlox.exe", "downloads/ArabBlox.pck"];
  files.forEach((file, i) => {
    setTimeout(() => {
      const a = document.createElement("a");
      a.href = file;
      a.download = "";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }, i * 900);
  });
  msg.textContent = "بدأ تحميل ملفي اللعبة. إذا منع المتصفح التحميل المتعدد، اسمح بالتحميلات المتعددة.";
});
