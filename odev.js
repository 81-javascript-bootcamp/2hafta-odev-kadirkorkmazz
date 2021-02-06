/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

var car = {
  registrationNumber: "GA12345",
  brand: "Toyota",
  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  }
}

var myCarDetails = car.displayDetails.bind(car);
myCarDetails();
//car.displayDetails.call(car); // Call ile alternatif çözüm 1
//car.displayDetails.apply(car); // Apply ile alternatif çözüm 2

/*  SORU 1 AÇIKLAMA
bind ile this=car şeklinde belirterek sorunu çözebiliyoruz.
myCarDetails fonksiyonunu düzenlememiz istendiği için en doğru sonuç bu olmalı diye düşünüyorum.
Alternatif olarak call ve apply kullanımlarını da ekledim.

***Not: Arrow function kullanmayı denedim ancak hem sonuca ulaşamadım.
Üstelik bind ile sonuca ulaşırken, fonksiyonu arrow function'a çevirince, sonuç tekrar undefined undefined oluyor.
***Derste sormak üzere not aldım.

*/


/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

/* SORU 2 AÇIKLAMA
Aşağıda, önce değerin string tipinde olup olmadığını sorguladım. Bunu diğerlerinden ayrı bir if içerisine alma sebebim, eğer girilen değer 
string değil ise çalışmayı engelleyecek bir hata almamdı. Yine replace işlemini bundan sonraki aşamada yaptım ki yine benzer bir hata oluşmasın.
Yani değer string değil ise replace etmeye çalışmasın. 
Sonrasında ise boş string olup olmadığını, ve boşluksuz halinin en az 2 karakter olup olmadığını sorguladım.
Hepsine uyan değerler true, uymayan değerler false olarak dönüyor. 
Açıkcası daha kısa bir yolu mutlaka varmış gibi geliyor ama ben sadece bu yöntemle sonuca ulaşabildim hocam :)
*/

function isValidName(name) {

  if (typeof (name) !== "string") {
    return false;
  } else {

    gaplessName = name.replace(/\s/g, '');  //Bir regex pattern buldum. \s ile boşlukları bulup, g ise bulduklarımızın hepsini seçmeye yarayan bir flag. daha sonra replace ile bu boşlukları kaldırıyoruz.

    if (name == "") {
      return false;
    }
    else if (gaplessName.length < 3) {
      return false;
    }
    else {
      return true;
    }
  }
}

console.log(isValidName("Ahmet") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);



/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
  )
}

//summary(); // Bu şekilde çağırdığımızda ilgili yerlerde undefined alıyoruz.
summary.call(book, "dystopian", "1932"); // Burada, call metoduyla this=book şeklinde belirtip, istenen ek yerlere elle veri girerek sonuca ulaşabiliyoruz.

//SORU 3 ALTERNATİF ÇÖZÜMLER
//let MyFunc2 = summary.bind(book, "dystopian", "1932");   // bind ile fonksiyonu direkt çağırmadan, bir değişkene atayarak kullanabiliyoruz.
//MyFunc2();

//summary.apply(book, ["dystopian", "1932"]); //apply ile call'da yaptığımızdan farklı olarak, elle girdiğimiz değerleri bir array içerisinde vererek yine sonuca ulaşabiliyoruz.

//let genreAndYear = ["dystopian", "1932"];  //apply ikinci yöntem için elle girdiğimiz değerleri bir array içerisine atadım.
//summary.apply(book, genreAndYear); //Burada da değerleri elle girmek yerine bir array gösteriyoruz. Yine istediğimiz sonuca ulaşabiliyoruz.
