function search(){
  var input, ul, li, result, i, txtValue, regex, regex2, error;
error=document.getElementById('error');
input = document.getElementById("input").value;
ul = document.getElementById("products");
li = ul.getElementsByTagName("li");
regex=/[^ا-ی\s]/;
regex2=["تابلو" , "ساعت" ,"جاکفشی" , "صندلی" ,"مبل" , "پرده" ,"کتابخانه" , "دراور" ,"شلف" , "لوازم تزیینی" ,"میز"];
if(input==""){
  error.innerHTML="😶خالی است😶<br>هنوز چیزی در قسمت بالا ننوشتی که برات جستجو کنم"
}
else if(regex.test(input)){
  error.innerHTML="✍️فارسی بنویس✍️<br>بیا با کمک همدیگه زبان فارسی رو گسترش بدیم"
}
else if(regex2.indexOf(input)==-1){
  error.innerHTML="🏃این محصول داریم اضافه می‌کنیم🏃<br>اما تا اون موقع پیشنهاد میکنم یه نگاهی به دسته بندی محصولات بندازی<br><a href='https://www.google.com/search?q=محصولات دکوراسیون و مبلمان داخلی'><button>مشاهده دسته بندی محصولات</button></a>"
}
else{
for (i = 0; i < li.length; i++) {
  result = li[i].getElementsByTagName("a")[0];
    txtValue = result.textContent || result.innerText;
    if (txtValue.indexOf(input) > -1) {
      window.location=result
    }
    else{
      error.innerHTML="✔️پیش به سوی یه خرید باحال✔️"
    };
};

    };
};

function addcode(event){
// اضافه کردن رویداد به دکمه های کیبورد
var keyboard=event.keyCode;
    if (keyboard == 13){
      search()
};
};
