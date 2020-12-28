const textArea = document.getElementById('textArea');
const result = document.getElementById('result');
textArea.addEventListener('keyup', countStringNum);

function countStringNum(){
  const valueStr = textArea.value;
  const num = valueStr.length ;
  console.log(valueStr);
  const varhtml = `문자열에서 문자의 개수는 ${num}개 입니다.`;

  result.innerHTML = varhtml;
}