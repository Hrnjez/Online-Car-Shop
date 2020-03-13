class Products {
  constructor(
    ProductID,
    ProductName,
    SuplierID,
    CategoryID,
    UnitPrice,
    UnitsInStock,
    Discount,
    Value
  ) {
    this.ProductID = ProductID;
    this.ProductName = ProductName;
    this.SuplierID = SuplierID;
    this.CategoryID = CategoryID;
    this.UnitPrice = UnitPrice;
    this.UnitsInStock = UnitsInStock;
    this.Discount = Discount;
    this.Value = Value;
  }
}
const product1 = new Products(1, "Audi", 1, 1, 8000, 3, "20%", 1);
const product2 = new Products(2, "Alfa Romeo", 2, 2, 5000, 5, "0%", 1);
const product3 = new Products(3, "Bmw", 3, 3, 9000, 3, "50%", 1);
const product4 = new Products(4, "Citroen", 4, 4, 3000, 10, "10%", 1);
const product5 = new Products(5, "Fiat", 5, 5, 2000, 10, "10%", 1);
const product6 = new Products(6, "Ford", 6, 6, 6000, 3, "0%", 1);
const product7 = new Products(7, "Honda", 7, 7, 8000, 5, "0%", 1);
const product8 = new Products(8, "Jaguar", 8, 8, 12000, 1, "0%", 1);
const product9 = new Products(9, "Lexus", 9, 9, 11000, 1, "0%", 1);
const product10 = new Products(10, "Mazda", 10, 10, 7000, 0, "0%", 1);
const product11 = new Products(11, "Mitsubishi", 11, 11, 9000, 3, "0%", 1);
const product12 = new Products(12, "Opel", 12, 12, 4000, 0, "10%", 1);
const product13 = new Products(13, "Toyota", 13, 13, 6000, 4, "0%", 1);
const product14 = new Products(14, "Seat", 14, 14, 5000, 5, "0%", 1);
const product15 = new Products(15, "Volvo", 15, 15, 8000, 2, "0%", 1);
var object = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15
];

function getData(e) {
  e.preventDefault();

  console.log(object);
  createTable(object);
}
//Greskom sam prvo radio sa ovim podacima, pa sam ih sacuvao ovde za kasnije.
//funkcija za povlacenje podataka (XHR)
/*
function getData(e) {
  e.preventDefault();
  document.getElementById("myShopBtn").remove();
  try {
    let result;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status === 200) {
          result = JSON.parse(xmlhttp.response);
          createTable(result.value);
          console.log(result);
          
        } else {
          return false;
          //greskaa
        }
      }
    };
    xmlhttp.open(
      "GET",
      "https://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json",
      false
    );
    xmlhttp.send();
  } catch (err) {
    console.error(err);
  }
}
*/
//document.getElementById("myShopBtn").addEventListener("click", getData);

//formiranje tabele
function createTable(object) {
  // kupivmo vec postojeci div iz html-a
  tabelaDiv = document.getElementById("webShop");

  // kreiramo tag <table>
  tableEl = document.createElement("table");

  // kacimo mu id "tabela"
  tableEl.setAttribute("id", "tabela");

  // u gore pokupljen div pakujemo tabelaEl koji sadrzi tag <table>
  tabelaDiv.appendChild(tableEl);

  // kupimo opet div koji smo sada vec dopunili
  tabelaDiv = document.getElementById("webShop");

  // setujemo brojac na 0 zbog id-eva
  let i = 0;
  for (const key in object) {
    // opcionalno pitanje dal taj key postoji u nizu object
    if (object.hasOwnProperty(key)) {
      // kreiramo jedan red <tr></tr>
      red = document.createElement("tr");

      // kroz svaki prolaz kroz petlju dodeljujemo mu id red0,red1....redN
      red.setAttribute("id", "red" + i);

      // kacimo red u tabelu -- ovo moze da se odradi na samom kraju ne mora ovde
      tableEl.appendChild(red);

      // kreiramo jednu celiju <td></td>
      box1 = document.createElement("div");
      box1.setAttribute("id", "box1img");

      box1.innerHTML = '<img src="img/img' + key + '.jpg" >';
      red.appendChild(box1);
      celija1 = document.createElement("td");

      // u njen innerHtml pakujemo productName
      //console.log(object[key]);
      celija1.innerHTML =
        "<span id='greenColor'>Product Name: </span>" + object[key].ProductName;

      // kreiramo jednu celiju <td></td>
      celija2 = document.createElement("td");

      // u njen innerHtml pakujemo UnitPrice
      celija2.innerHTML =
        "<span id='greenColor'>Price: </span>" + object[key].UnitPrice + " $";

      // kreiramo jednu celiju <td></td>
      celija3 = document.createElement("td");

      // u njen innerHtml pakujemo UnitsInStock
      celija3.innerHTML =
        "<span id='greenColor'>Available: </span>" + object[key].UnitsInStock;
      // kreiramo jednu celiju <td></td>
      celija5 = document.createElement("td");

      celija5.innerHTML =
        "<span id='redColor'>Nema toliko proizvoda na stanju! </span>";
      noviRed = document.getElementById("red" + i);
      // u njen innerHtml pakujemo Discount (koji nismo resili)
      popust = document.createElement("span");
      popust.setAttribute("id", "blueColor");
      // racunica za discount
      newPrice =
        parseInt(object[key].UnitPrice) -
        parseInt(object[key].UnitPrice) *
          (parseInt(object[key].Discount) / 100);
      if (parseInt(object[key].Discount) > 0) {
        popust.innerHTML =
          "<br>Discount: " + object[key].Discount + " New Price: " + newPrice;
        object[key].UnitPrice = newPrice;
      }
      celija2.appendChild(popust);
      // pravimo input za broj produkata
      input = document.createElement("input");

      //dodajemo potrebne atribute
      input.setAttribute("id", "input" + i);
      input.setAttribute("type", "number");
      input.setAttribute("value", 1);

      // kreiramo <td>
      celija6 = document.createElement("td");

      // i kacimo input u <td>
      celija6.appendChild(input);

      // kreiramo dugme
      button = document.createElement("button");

      // setujemo id dugmeta kako bismo kasnije slusali da li je kliknuto
      // button0,button1....
      button.setAttribute("id", "button" + i);

      // kao atribut value setujemo UnitPrice
      button.setAttribute("value", JSON.stringify(object[i]));
      button.innerHTML = "Kupi";

      // dugme bi izgledalo <button value ='11.000' id='button0'>Kupi</button>

      // kreiramo celiju
      celija4 = document.createElement("td");
      // u nju pakujemo button
      celija4.appendChild(button);

      // opet kupimo red koji smo gore definisali i u njega pakujemo celije
      noviRed = document.getElementById("red" + i);
      noviRed.appendChild(celija1);
      noviRed.appendChild(celija2);
      noviRed.appendChild(celija3);
      noviRed.appendChild(celija4);
      noviRed.appendChild(celija6);

      // na div sa id-em koji odgovara brojacu i kacimo event listiner
      // na svaki klik na dugme sa id-evima button0,button1 itd pozivamo f-ju
      document
        .getElementById("button" + i)
        .addEventListener("click", function(event) {
          var brojKomada = new Number(
            document.getElementById("input" + key).value
          );
          // console.log(object[key].UnitsInStock);
          // console.log(brojKomada);
          var dostupno = object[key].UnitsInStock;
          for (i = 0; i < brojKomada; i++) {
            if (brojKomada < dostupno || brojKomada == dostupno) {
              saberi(event.target.value);
            } else {
              console.log("Neemaaaaa!");
              noviRed = document.getElementById("red" + key);
              celija5.innerHTML =
                "<span id='redColor'>Nema toliko proizvoda na stanju! </span>";
              noviRed.appendChild(celija5);
              setTimeout(
                () => ((celija5.innerHTML = ""), noviRed.appendChild(celija5)),
                1000
              );
            }
          }
          console.log("trazeno: " + brojKomada);
          console.log("dostupno: " + dostupno);
        });
      i++;
    }
  }
}
//deklarisemo neke pocetne vrednosti koje se dalje provlace kroz funkcije
sum = 0;
let korpa = {
  proizvodi: [],
  suma: 0
};
var sumDemo = 0;

// funkcija za sabiranje proizvoda
function saberi(value) {
  //ovde resavamo brojac ispod korpe
  let korpaDemo = document.getElementById("korpaDemo");
  korpaDemo.setAttribute("type", "number");
  korpaDemo.setAttribute("value", 0);
  sumDemo += 1;
  korpaDemo.innerHTML = sumDemo;
  let newsDemo = document.getElementById("newsDemo");
  newsDemo.innerHTML = "<span id='redColor'>!</span>";
  //parsiramo json podatak za value
  let valueJson = JSON.parse(value);
  korpa.suma += parseFloat(valueJson.UnitPrice);
  tempProizvod = JSON.parse(event.target.value).ProductID;
  tempPrice = JSON.parse(event.target.value).UnitPrice;
  //uslovi i petlja za pravilno dodavanje proizvoda u korpu
  if (sumDemo == 1) {
    console.log("prvi proizvod");
    korpa.proizvodi.push({
      id: valueJson.ProductID,
      imeProizvoda: valueJson.ProductName,
      suplierId: valueJson.SuplierID,
      categoryId: valueJson.CategoryID,
      cenaProizvoda: valueJson.UnitPrice,
      dostupno: valueJson.UnitsInStock,
      popust: valueJson.Discount,
      value: valueJson.Value
    });
  } else {
    console.log("nije prvi");
    for (let y in korpa.proizvodi) {
      //console.log(tempProizvod);
      var uslov = false;
      if (korpa.proizvodi[y].id == tempProizvod) {
        console.log("kopija");
        console.log(tempPrice);
        korpa.proizvodi[y].value += 1;
        korpa.proizvodi[y].cenaProizvoda += tempPrice;
        uslov = true;
        console.log("kopija? " + uslov);
        break;
      } else {
        uslov = false;
      }
    }
    if (uslov == false) {
      console.log("kopija? " + uslov);
      korpa.proizvodi.push({
        id: valueJson.ProductID,
        imeProizvoda: valueJson.ProductName,
        suplierId: valueJson.SuplierID,
        categoryId: valueJson.CategoryID,
        cenaProizvoda: valueJson.UnitPrice,
        dostupno: valueJson.UnitsInStock,
        popust: valueJson.Discount,
        value: valueJson.Value
      });
    }
  }
  document.getElementById("cena").innerHTML =
    "Ukupna cena: " + korpa.suma + " $";
}
//funkcija za prikazivanje korpe
function prikaziKorpu() {
  console.log(korpa);
  //kupimo korpu i kreiramo tabelu
  let proizvodi = korpa.proizvodi;
  let korpaDiv = document.getElementById("korpa");
  korpaDiv.innerHTML = "";

  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "delete");
  deleteBtn.innerHTML = '<i class="fas fa-times fa-2x"></i>';
  korpaDiv.appendChild(deleteBtn);

  let tabela = document.createElement("table");
  tabela.setAttribute("id", "tabelaKorpa");
  korpaDiv.appendChild(tabela);

  let deleteAll = document.createElement("button");
  deleteAll.setAttribute("id", "deleteAll");
  deleteAll.innerHTML = "ocisti korpu";
  korpaDiv.appendChild(deleteAll);

  let newsDemo = document.getElementById("newsDemo");
  newsDemo.innerHTML = "";
  // kreiramo elemente tabele
  let red = document.createElement("tr");
  red.setAttribute("id", "tr");
  celija = document.createElement("td");
  celijaSuma = document.createElement("td");
  celijaCenaJednog = document.createElement("td");
  celijaUkupnaCena = document.createElement("td");
  celijaDostupno = document.createElement("td");

  celija.innerHTML = "Proizvod";
  celijaSuma.innerHTML = "Kolicina";
  celijaCenaJednog.innerHTML = "Cena Proizvoda";
  celijaUkupnaCena.innerHTML = "Ukupna cena";
  celijaDostupno.innerHTML = "Dostupno";
  red.appendChild(celija);
  red.appendChild(celijaSuma);
  red.appendChild(celijaCenaJednog);
  red.appendChild(celijaUkupnaCena);
  red.appendChild(celijaDostupno);

  tabela.appendChild(red);
  let i = 0;
  for (const key in proizvodi) {
    let red = document.createElement("tr");
    red.setAttribute("id", "tr" + i);
    celija1 = document.createElement("td");
    celija1.innerHTML = proizvodi[key].imeProizvoda;
    celijaCenaJednog = document.createElement("td");
    celijaCenaJednog.innerHTML =
      proizvodi[key].cenaProizvoda / proizvodi[key].value;

    celijaBr = document.createElement("td");
    celijaBr.innerHTML = "Σ : " + proizvodi[key].value;

    celija2 = document.createElement("td");
    celija2.innerHTML = proizvodi[key].cenaProizvoda;

    celija3 = document.createElement("td");
    celija3.innerHTML = proizvodi[key].dostupno;

    dugmeOduzmi = document.createElement("button");
    dugmeOduzmi.setAttribute("value", proizvodi[key].id);
    dugmeOduzmi.setAttribute("id", "dugmeOduzmi" + i);
    dugmeOduzmi.innerHTML = "Ukloni";

    celija4 = document.createElement("td");
    celija4.appendChild(dugmeOduzmi);

    // pravimo input za broj produkata
    input = document.createElement("input");
    input.setAttribute("id", "input" + i);
    input.setAttribute("type", "number");
    input.setAttribute("value", 1);

    // kreiramo <td> i kacimo input u <td>
    celija6 = document.createElement("td");
    celija6.appendChild(input);
    // kacimo sve celije u red
    red.appendChild(celija1);
    red.appendChild(celijaBr);
    red.appendChild(celijaCenaJednog);
    red.appendChild(celija2);
    red.appendChild(celija3);
    red.appendChild(celija4);
    red.appendChild(celija6);
    // potom red u tabelu-korpa
    tabela.appendChild(red);
    //click-event za brisanje proizvoda iz korpe
    document
      .getElementById("dugmeOduzmi" + i)
      .addEventListener("click", function(event) {
        let deleteMore = new Number(
          document.getElementById("input" + key).value
        );
        //uslovi i petlje za pravilno brisanje proizvoda
        if (sumDemo > 0) {
          if (korpa.proizvodi[key].value > deleteMore - 1 && deleteMore > 0) {
            console.log("Obrisano: " + deleteMore + " proizvoda.");
            for (s = 0; s < deleteMore; s++) {
              if (korpa.proizvodi[key].value > 0) {
                oduzmi(event.target.value);
              } else {
                console.log("obrisani su svi proizvodi tog tipa");
              }
            }
          } else {
            console.log("nije moguce obrisati toliko proizvoda");
            celijaGreska = document.createElement("tr");
            celijaGreska.innerHTML = "<span id='redColor'>Greska!</span>";
            tabela.prepend(celijaGreska);
            setTimeout(() => (celijaGreska.innerHTML = ""), 1000);
          }
        } else {
          console.log("korpa je prazna, ocisti korpu");

          celijaGreska = document.createElement("tr");
          celijaGreska.innerHTML =
            "<span id='blackColor'>Ocistite korpu!</span>";
          tabela.prepend(celijaGreska);
          setTimeout(() => (celijaGreska.innerHTML = ""), 1000);
        }
      });
    i++;
  }
  // dugme za zatvaranje  korpe
  document.getElementById("delete").addEventListener("click", zatvoriKorpu);
  function zatvoriKorpu() {
    document.getElementById("korpa").innerHTML = " ";
  }
  //dugme za brisanje svih proizvoda iz korpe
  document.getElementById("deleteAll").addEventListener("click", obrisiSve);
  function obrisiSve() {
    korpa.proizvodi = [];
    korpa.suma = 0;
    prikaziKorpu();
    sumDemo = 1;
    oduzmi();
    document.getElementById("cena").innerHTML =
      "Ukupna cena: " + korpa.suma + " $";
    console.log("Korpa je ispraznjena!");
  }
}
// funkcija za brisanje proizvoda iz korpe
function oduzmi(id) {
  let korpaDemo = document.getElementById("korpaDemo");
  korpaDemo.setAttribute("type", "number");
  sumDemo -= 1;
  korpaDemo.innerHTML = sumDemo;
  let proizvodi = korpa.proizvodi;
  // uslovi i petlje za oduzimanje i malo matematike zbog discount-a
  for (const key in proizvodi) {
    console.log(document.getElementById("dugmeOduzmi" + key).value);
    if (proizvodi[key].id == id) {
      if (event.target.value < 1) {
        korpa.suma -= korpa.proizvodi[key].cenaProizvoda;
        korpa.proizvodi.splice(key, 1);
      } else if (korpa.proizvodi[key].value > 1) {
        korpa.proizvodi[key].cenaProizvoda -=
          korpa.proizvodi[key].cenaProizvoda / korpa.proizvodi[key].value;
        korpa.proizvodi[key].value -= 1;
        korpa.suma -=
          korpa.proizvodi[key].cenaProizvoda / korpa.proizvodi[key].value;
        console.log(korpa.proizvodi[key].value);
      } else {
        korpa.suma -= korpa.proizvodi[key].cenaProizvoda;
        korpa.proizvodi[key].cenaProizvoda = 0;
        korpa.proizvodi[key].value = 0;
      }
      break;
    }
  }
  korpaDiv = document.getElementById("korpa");
  korpaDiv.innerHTML = "";
  // ovo sluzi da nam korpa ostane otvorena nakon bilo kakvog brisanja proizvoda
  prikaziKorpu();
  document.getElementById("cena").innerHTML =
    "Ukupna cena: " + korpa.suma + " $";
}
document.getElementById("cart").addEventListener("click", prikaziKorpu);
//Nesto kratko o projektu:
/*
KORPA: nakon sto se isprazni, potrebno je ocistiti korpu klikom na dugme 'ocisti korpu'.
SLIKE: neke su malo vece rezolucije pa bi valjalo da se smanje ali se nisam mnogo cimao oko toga.
KOD: Da je malo manji kod rado bih sve prepravio na engleski, ovako nema veze sad , drugi put vodim racuna.
STYLE: .css - kod bi mogao malo da se optimizuje. Na pocetku mi je dizajn bio lep, sad mi je vec nekako previse saren, 
mnogo mi je lepsi dizajn naslovne strane, nekako mi je jednostavniji i elegantniji.
PROJEKAT: Svaka funkcionalnost koja je trazena, radi. Ima i malo preko toga, pozdrav!
*/
