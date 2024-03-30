const bao bọc = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const YesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt"); // Thêm đoạn này

YesBtn.addEventListener("click", () => {
  question.innerHTML = "Anh cũng yêu bé HoàiAnh của anh rất nhiều<br>Yêu bé HoàiAnh siêu nhiềuuu";
  gif.src =
    "https://media.giphy.com/media/vvc1dJPLEU2QOw9cXy/giphy.gif";

  // Ẩn cả hai nút Có và Không
  YesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "không"; // Ẩn dòng chữ khi người dùng nhấn vào nút Có
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const RandomX = Math.floor(Math.random() * maxX);
  const RandomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = RandomX + "px";
  noBtn.style.top = RandomY + "px";
});
