if (typeof document !== "undefined") {
  const moduleOpenBtn = document.querySelector(
    "div.add-employe .header button"
  );
  const moduleCloseBtn = document.querySelector(
    "div.adding-module .module .close-module"
  );

  const outOfModule = document.querySelector("div.outof-module");
  const inModule = document.querySelector("div.in-module");

  moduleOpenBtn.addEventListener("click", () => {
    outOfModule.classList.add("blur-sm");
    inModule.classList.remove("hidden");
    inModule.classList.add("block");
  });

  moduleCloseBtn.addEventListener("click", () => {
    outOfModule.classList.remove("blur-sm");
    inModule.classList.add("hidden");
  });
}

