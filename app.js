const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const iniValue = +counter.innerHTML;

    if (iniValue < target) {
      const incrimental = target / 100;

      counter.innerHTML = `${Math.ceil(iniValue + incrimental)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerHTML = target;
    }
  };

  updateCounter();
});
