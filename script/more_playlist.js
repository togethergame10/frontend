function deletePlaylist() {
  if (confirm("플레이리스트를 삭제하시겠습니까?") == true) {
    //확인

    document.removefrm.submit();
  } else {
    //취소

    return false;
  }
}

function deleteElement() {
  if (confirm("플레이리스트 목록에서 삭제하시겠습니까?") == true) {
    //확인
    event.preventDefault();
    document.removefrm.submit();
  } else {
    //취소
    event.preventDefault();
    return false;
  }
}
