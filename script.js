// モーダルを開くボタン
const openModalBtn = document.getElementById("openModal");
// モーダルそのもの
const modal = document.getElementById("modal");
// モーダル内の閉じるボタン
const closeModalBtn = document.querySelector(".close-btn");

// モーダルを表示する処理
openModalBtn.onclick = function() {
    modal.style.display = "block";
};

// モーダルを閉じる処理
closeModalBtn.onclick = function() {
    modal.style.display = "none";
};

// モーダルの外をクリックした場合に閉じる処理
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
