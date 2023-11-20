// 옵션 선택 시 실행될 함수
var groups = document.querySelectorAll(".select-options");
for (var i = 0; i < groups.length; i++) {
  groups[i].addEventListener("click", function (event) {
    var options = this.querySelectorAll(".option");
    for (var j = 0; j < options.length; j++) {
      options[j].classList.toggle("selected", false);
    }
    if (event.target.classList.contains("option")) {
      event.target.classList.toggle("selected", true);
    }
  });
}

// 선택한 옵션을 수집하고 폼 데이터에 추가하는 함수
function gatherSelectedOptions() {
  var selectedOptions = document.querySelectorAll(".selected");
  var selectedValues = Array.from(selectedOptions).map((option) => option.value);

  // 선택한 옵션 값을 폼 안의 hidden input 필드에 추가합니다.
  var hiddenInput = document.getElementById("selectedOptions");
  if (hiddenInput) {
    hiddenInput.value = selectedValues.join(",");
  }
}