const imgArray = [
  document.getElementById('img-1'),
  document.getElementById('img-2'),
  document.getElementById('img-3')
];
const btnStop = document.querySelector('.btn-stop'); //자동토글버튼
const btnShift = document.querySelector('.btn-success'); //수동버튼
let btnFlag = false;

const imgSrcArr = imgArray.map(el => el.getAttribute('src'));

//수동전환
btnShift.addEventListener('click', () => {
  imgSrcArr.push(imgSrcArr.shift());
  console.log(imgSrcArr);
  imgArray.map((el, i) => el.setAttribute('src', imgSrcArr[i]));
});

let setTime = setInterval(() => {
  imgSrcArr.push(imgSrcArr.shift());
  imgArray.map((el, i) => el.setAttribute('src', imgSrcArr[i]));
},1000);

//자동 토글
btnStop.addEventListener('click', () => {
  if(btnFlag == false){
    clearInterval(setTime);
    btnFlag = true;
  }else{
    setTime = setInterval(() => {
      imgSrcArr.push(imgSrcArr.shift());
      imgArray.map((el, i) => el.setAttribute('src', imgSrcArr[i]));
    },1000);
    btnFlag = false;
  }
});
