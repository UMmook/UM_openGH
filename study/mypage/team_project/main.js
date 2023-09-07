const favoriteContentsElements =
  document.querySelectorAll(".Favorite-contents");

favoriteContentsElements.forEach((favoriteContentsDiv, index) => {
  favoriteContentsDiv.addEventListener("mouseenter", function () {
    favoriteContentsDiv.style.transition =
      "transform 0.3s ease, background-image 0.3s ease";
    favoriteContentsDiv.style.transform = "scale(1.1)";

    switch (index) {
      case 0:
        favoriteContentsDiv.style.backgroundImage =
          "linear-gradient(to right, transparent, rgb(205, 161, 247))";
        break;
      case 1:
        favoriteContentsDiv.style.backgroundImage =
          "linear-gradient(to right, transparent, #fcebe0)";
        break;
      case 2:
        favoriteContentsDiv.style.backgroundImage =
          "linear-gradient(to right, transparent, rgb(208, 255, 208))";
        break;
      case 3:
        favoriteContentsDiv.style.backgroundImage =
          "linear-gradient(to right, transparent, rgb(220, 245, 255))";
        break;
      default:
        favoriteContentsDiv.style.backgroundImage = "none";
        break;
    }
  });

  favoriteContentsDiv.addEventListener("mouseleave", function () {
    favoriteContentsDiv.style.transition =
      "transform 0.3s ease, background-image 0.3s ease";
    favoriteContentsDiv.style.transform = "scale(1)";
    favoriteContentsDiv.style.backgroundImage = "none";
  });
});

const home = document.querySelector(".home");
const circles = home.querySelectorAll(".circle");

circles.forEach((circle) => {
  const img = circle.querySelector("img");
  const originalSrc = img.src;

  circle.addEventListener("mouseover", function () {
    const newImageSrc = circle.getAttribute("data-image");
    img.src = newImageSrc;
  });

  circle.addEventListener("mouseout", function () {
    img.src = originalSrc;
  });
});

const roomsContents = document.querySelectorAll(".rooms-contents .square");

roomsContents.forEach((room, index) => {
  const innerElement = room.querySelector(".circle"); // Select the inner element containing image and text

  room.addEventListener("mouseenter", function () {
    innerElement.style.transition =
      "transform 0.3s ease, background-image 0.3s ease";
    innerElement.style.transform = "scale(1.1) rotateY(180deg)"; // Apply flip animation to the inner element

    switch (index) {
      case 0:
        room.style.backgroundImage =
          "linear-gradient(to right, transparent, rgb(134, 29, 231))";
        break;
      case 1:
        room.style.backgroundImage =
          "linear-gradient(to right, transparent, #fcebe0)";
        break;
      case 2:
        room.style.backgroundImage =
          "linear-gradient(to right, transparent, rgb(208, 255, 208))";
        break;
      case 3:
        room.style.backgroundImage =
          "linear-gradient(to right, transparent, rgb(220, 245, 255))";
        break;
      default:
        room.style.backgroundImage = "none";
        break;
    }
  });

  room.addEventListener("mouseleave", function () {
    innerElement.style.transition =
      "transform 0.3s ease, background-image 0.3s ease";
    innerElement.style.transform = "scale(1) rotateY(0deg)"; // Revert the flip animation

    room.style.transition = "transform 0.3s ease, background-image 0.3s ease";
    room.style.backgroundImage = "none";
  });
});
