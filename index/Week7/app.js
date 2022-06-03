console.log("Karthik");
var res = document.getElementById("res");
var input = document.getElementById("ip2");
res.addEventListener("click", task1);
var count1=0;
var count2=0;
var r1=parseInt(Math.random()*100);
console.log(r1);
function task1() {
  if(count1==0){
  count1++;
  console.log(ip2.value);
  let n = ip2.value;
  if(isNaN(n)){
    document.getElementById("postContainer1").innerHTML += `<h3>Invalid Input</h3>`;
  }
  else if(n>300){
    document.getElementById("postContainer1").innerHTML += `<h3>We can't print more than 300 colors</h3>`;
  }
  else{
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((element) => {
      for(let i=1;i<=n;i++){
          count2++;
          var template =
            '<div class="section2">' +
            '<div class="s2-t1">' +
            '<img src="' +
            element[r1+i].url +
            '" alt="ft1" class="image">' +
            "</div>" +
            "</div>";
          document.getElementById("postContainer1").innerHTML += template;
      }});
}
  }
}
console.log(r1);