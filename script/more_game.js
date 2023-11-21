function toggleLike() {
  var likeButton = document.getElementById("likeButton");
  var likeImage = likeButton.querySelector("img");

  // Check the current state of the like button
  var isLiked = likeImage.src.includes("like.png");

  // Toggle the image source based on the current state
  likeImage.src = isLiked ? "../img/likefull.png" : "../img/like.png";
}

function openModal() {
  console.log("모달 열기 함수 호출됨");
  var modal = document.getElementById("myModal");
  modal.style.display = "flex"; // 모달 표시
  console.log("모달 표시 스타일:", modal.style.display);
}

function closeModal() {
  console.log("Close modal function called");
  var modal = document.getElementById("myModal");
  modal.style.display = "none"; // Hide the modal
}
