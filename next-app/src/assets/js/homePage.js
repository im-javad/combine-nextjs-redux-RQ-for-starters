if (typeof document !== "undefined") {
  const outOfModule = document.querySelector("div.outof-module");
  const inModule = document.querySelector("div.in-module");

  // -------------------------------------------------------------------------------------------------------

  const addEmployeeModuleOpenBtn = document.querySelector(
    "div.add-employe .header button"
  );
  const addEmployeeModuleCloseBtn = document.querySelector(
    "div.adding-module .module .close-module"
  );

  addEmployeeModuleOpenBtn.addEventListener("click", () => {
    outOfModule.classList.add("blur-sm");
    inModule.classList.remove("hidden");
    inModule.classList.add("block");
  });

  addEmployeeModuleCloseBtn.addEventListener("click", () => {
    outOfModule.classList.remove("blur-sm");
    inModule.classList.add("hidden");
  });
  
  // -------------------------------------------------------------------------------------------------------

}

