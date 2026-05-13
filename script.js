const overlay = document.getElementById("overlay");
const popover = document.getElementById("popover");
const iframe = document.getElementById("popover-iframe");
const closeBtn = document.getElementById("close-btn");

document.querySelectorAll(".popover-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const type = trigger.dataset.type;
    const url = trigger.dataset.url;

    popover.className = `popover ${type}`;
    iframe.src = url;
    popover.style.display = "block";
    overlay.style.display = "block";
    document.body.classList.add("no-scroll");
  });
});

function closePopover() {
  popover.style.display = "none";
  overlay.style.display = "none";
  iframe.src = "";
  document.body.classList.remove("no-scroll");
}

closeBtn.addEventListener("click", closePopover);
overlay.addEventListener("click", closePopover);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePopover();
});
