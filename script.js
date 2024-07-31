const $counters = $(".counter");

$counters.each(function () {
  $(this).html("0");
  const updateCounter = () => {
    const target = +this.getAttribute("data-target");
    const c = +this.innerText;

    const increment = target / 200;

    if (c < target) {
      $(this).html(`${Math.ceil(c + increment)}`);
      setTimeout(updateCounter, 1);
    } else {
      $(this).html(target);
    }
  };

  updateCounter();
});
