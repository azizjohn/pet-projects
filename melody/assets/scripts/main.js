if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  $("body").text("Not responsive!");
} else {
  $(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var floorPath = $(".home-image path");
    var modal = $(".modal");
    var closeButton = $(".modal-close-button");
    var modalCounter = $(".modal-counter");
    var viewFlatsButton = $(".view-flats");

    floorPath.on("mouseover", function () {
      floorPath.removeClass("current-floor");
      currentFloor = $(this).attr("data-floor");
      $(".counter").text(currentFloor);
    });

    floorPath.on("click", function () {
      modal.toggleClass("is-open");
      modalCounter.text(usCurrentFloor);
    });

    closeButton.on("click", function () {
      modal.removeClass("is-open");
    });

    viewFlatsButton.on("click", function () {
      modal.toggleClass("is-open");
    });

    counterUp.on("click", function () {
      if (currentFloor < 18) {
        currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
      }
    });

    counterDown.on("click", function () {
      if (currentFloor > 2) {
        currentFloor--;
        usCurrentFloor = currentFloor.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
      }
    });
  });
}
