const keys = document.querySelectorAll("#container > div");
const display = document.getElementById("display");

keys.forEach(key => {
  key.addEventListener("click", () => {
    const value = key.textContent.trim();

    switch (value.toLowerCase()) {
      case "backspace":
        display.value = display.value.slice(0, -1);
        break;
      case "enter":
        display.value += "\n";
        break;
      case "space":
        display.value += " ";
        break;
      case "caps lock":
      case "shift":
      case "ctrl":
      case "alt":
      case "fn":
        // Ignore these for now (not functional)
        break;
      default:
        display.value += value;
        break;
    }
  });
});
