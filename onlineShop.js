$(document).ready(function() {
  $.ajax({
    url: "newProducts.json",
    dataType: "json",
    async: false,
    success: function(products) {
      productsList = products;
      productsList = productsList.value;
    }
  });

  $.ajax({
    url: "onlineShopProducts.json",
    dataType: "json",
    async: false,
    success: function(categories) {
      categoriesList = categories;
      categoriesList = categoriesList.value;
    }
  });
  $(".buyInfo").hide();
  console.log(categoriesList);
  console.log(productsList);
  function tabelaNaslov() {
    let listaProdukataNaslov = document.getElementById("listaProdukataNaslov");
    let divDemo = document.createElement("div");
    divDemo.setAttribute("id", "divDemo");

    let tr = document.createElement("tr");

    let td2 = document.createElement("td");
    td2.innerHTML = "Id";
    tr.appendChild(td2);
    let td1 = document.createElement("td");
    td1.innerHTML = "Product Name";
    tr.appendChild(td1);
    let td3 = document.createElement("td");
    td3.innerHTML = "Unit Price";
    tr.appendChild(td3);
    let td4 = document.createElement("td");
    td4.innerHTML = "Quantity Per Unit";
    tr.appendChild(td4);
    let td5 = document.createElement("td");
    td5.innerHTML = "Units In Stock";
    tr.appendChild(td5);

    divDemo.appendChild(tr);
    //divDemo.appendChild(tabela);
    listaProdukataNaslov.appendChild(divDemo);
  }
  tabelaNaslov();

  let select = document.getElementById("kategorije");
  for (let i in categoriesList) {
    let option = document.createElement("option");
    option.setAttribute("value", categoriesList[i].CategoryID);
    option.innerHTML = categoriesList[i].CategoryName;
    select.appendChild(option);
  }

  for (let x in productsList) {
    function tabela() {
      let listaProdukata = document.getElementById("listaProdukata");
      let tabela = document.createElement("table");
      tabela.setAttribute("id", "tab" + x);
      let tr = document.createElement("tr");
      tr.setAttribute("id", "tr" + x);
      tr.setAttribute("value", productsList[x].CategoryID);

      let td2 = document.createElement("td");
      td2.innerHTML = productsList[x].CategoryID;
      tr.appendChild(td2);

      let td1 = document.createElement("td");
      td1.innerHTML =
        productsList[x].ProductName +
        "<br>" +
        '<span id="buyInfo' +
        [x] +
        '">+1</span>';
      let btnBuy = document.createElement("button");
      btnBuy.setAttribute("class", "btnBuy");
      btnBuy.setAttribute("value", x);
      btnBuy.innerHTML = "Buy";
      td1.appendChild(btnBuy);
      tr.appendChild(td1);

      let td3 = document.createElement("td");
      td3.innerHTML = productsList[x].UnitPrice + " $";
      td3.setAttribute("value", parseFloat(productsList[x].UnitPrice));
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      td4.innerHTML = productsList[x].QuantityPerUnit;
      tr.appendChild(td4);

      let td5 = document.createElement("td");
      td5.innerHTML = productsList[x].UnitsInStock;
      tr.appendChild(td5);

      tabela.appendChild(tr);
      listaProdukata.appendChild(tabela);
      $("#buyInfo" + [x]).hide();
    }
    tabela();
  }

  $("#inputFilter").keyup(function() {
    let value = $(this).val();
    value = value.toLowerCase();
    console.log(value);
    $("table").hide();
    $("table").filter(function() {
      let condition =
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1;
      $(this).toggle(condition);
      //ovo je uslov da ne izlistava prazne redove kad obrisemo sve iz filtera
      //zato sto smo dole kroz filter provukli metode .hide i .empty
      if (value == "" && $(this).text() == "") {
        $(this).hide();
      }
    });
  });

  $("#kategorije").click(function() {
    $("table").hide();
    $("table").load(window.location.href + " table");

    let value = $(this).val();
    console.log(value);
    for (let y in productsList) {
      const product = productsList[y];
      let nasID = product.CategoryID;
      console.log(nasID);
      if (value == nasID) {
        console.log(product);

        //vrv moze krace *** Kako ovo napisati krace?

        let listaProdukata = document.getElementById("listaProdukata");
        let tabela = document.createElement("table");
        tabela.setAttribute("id", "tab" + y);
        let tr = document.createElement("tr");
        tr.setAttribute("id", "tr" + y);
        tr.setAttribute("value", productsList[y].CategoryID);

        let td2 = document.createElement("td");
        td2.innerHTML = productsList[y].CategoryID;
        tr.appendChild(td2);

        let td1 = document.createElement("td");
        td1.innerHTML =
          productsList[y].ProductName +
          "<br>" +
          '<span id="buyInfo' +
          [y] +
          '">+1</span>';
        let btnBuy = document.createElement("button");
        btnBuy.setAttribute("class", "btnBuy");
        btnBuy.setAttribute("value", y);
        btnBuy.innerHTML = "Buy";
        td1.appendChild(btnBuy);
        tr.appendChild(td1);

        let td3 = document.createElement("td");
        td3.innerHTML = productsList[y].UnitPrice + " $";
        td3.setAttribute("value", parseFloat(productsList[y].UnitPrice));
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.innerHTML = productsList[y].QuantityPerUnit;
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.innerHTML = productsList[y].UnitsInStock;
        tr.appendChild(td5);

        tabela.appendChild(tr);
        listaProdukata.prepend(tabela);
        $("#buyInfo" + y).hide();
        //vrv moze krace ***
      }
    }
    $(".btnBuy").on("click", function buy() {
      for (let s in productsList) {
        let click = new Number($(this).val());
        click = click + 1;
        sumDemo += 1;
        if (sumDemo == 1) {
          console.log("prvi proizvod");
        } else {
          //console.log("nije prvi");
        }
        if (click == productsList[s].ProductID) {
          //console.log(productsList[s].ProductID);
          //console.log(click);
          $("#buyInfo" + [s]).show();
          $("#buyInfo" + [s]).hide(1000);
          korpa.proizvodi.push({
            id: productsList[s].ProductID,
            name: productsList[s].ProductName,
            price: productsList[s].UnitPrice,
            quantity: productsList[s].QuantityPerUnit
          });
          korpa.suma += parseFloat(productsList[s].UnitPrice);
          console.log(korpa);
        }
      }
    });
  });
  $(function() {
    $("#slider-range").slider({
      range: true,
      min: 1,
      max: 101,
      values: [11, 88],
      slide: function(event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });
  $("#btnSlider").click(function() {
    $("table").hide();
    $("table").load(window.location.href + " table");
    //console.log($("#slider-range").slider("values", 0));
    // console.log($("#slider-range").slider("values", 1));
    const minPrice = $("#slider-range").slider("values", 0);
    const maxPrice = $("#slider-range").slider("values", 1);
    for (let z in productsList) {
      const product = productsList[z];
      let price = product.UnitPrice;
      // console.log(price);
      if (price >= minPrice && price <= maxPrice) {
        //vrv moze krace ***

        let listaProdukata = document.getElementById("listaProdukata");
        let tabela = document.createElement("table");
        tabela.setAttribute("id", "tab" + z);
        let tr = document.createElement("tr");
        tr.setAttribute("id", "tr" + z);
        tr.setAttribute("value", productsList[z].CategoryID);

        let td2 = document.createElement("td");
        td2.innerHTML = productsList[z].CategoryID;
        tr.appendChild(td2);

        let td1 = document.createElement("td");
        td1.innerHTML =
          productsList[z].ProductName +
          "<br>" +
          '<span id="buyInfo' +
          [z] +
          '">+1</span>';
        let btnBuy = document.createElement("button");
        btnBuy.setAttribute("class", "btnBuy");
        btnBuy.setAttribute("value", z);
        btnBuy.innerHTML = "Buy";
        td1.appendChild(btnBuy);
        tr.appendChild(td1);

        let td3 = document.createElement("td");
        td3.innerHTML = productsList[z].UnitPrice + " $";
        td3.setAttribute("value", parseFloat(productsList[z].UnitPrice));
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.innerHTML = productsList[z].QuantityPerUnit;
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.innerHTML = productsList[z].UnitsInStock;
        tr.appendChild(td5);

        tabela.appendChild(tr);
        listaProdukata.prepend(tabela);
        $("#buyInfo" + [z]).hide();
        //vrv moze krace ***
      }
    }
    $(".btnBuy").on("click", function buy() {
      for (let s in productsList) {
        let click = new Number($(this).val());

        click = click + 1;
        sumDemo += 1;
        if (sumDemo == 1) {
          console.log("prvi proizvod");
        } else {
          //console.log("nije prvi");
        }
        if (click == productsList[s].ProductID) {
          //console.log(productsList[s].ProductID);
          //console.log(click);
          $("#buyInfo" + [s]).show();
          $("#buyInfo" + [s]).hide(1000);
          korpa.proizvodi.push({
            id: productsList[s].ProductID,
            name: productsList[s].ProductName,
            price: productsList[s].UnitPrice,
            quantity: productsList[s].QuantityPerUnit
          });
          korpa.suma += parseFloat(productsList[s].UnitPrice);
          console.log(korpa);
        }
      }
    });
  });
  let korpa = {
    proizvodi: [],
    suma: 0
  };
  //console.log(productsList);
  var sumDemo = 0;

  $(".btnBuy").on("click", function buy() {
    for (let s in productsList) {
      let click = new Number($(this).val());
      click = click + 1;
      sumDemo += 1;
      if (sumDemo == 1) {
        console.log("prvi proizvod");
      } else {
        //console.log("nije prvi");
      }
      if (click == productsList[s].ProductID) {
        $("#buyInfo" + [s]).show();
        $("#buyInfo" + [s]).hide(1000);
        korpa.proizvodi.push({
          id: productsList[s].ProductID,
          name: productsList[s].ProductName,
          price: productsList[s].UnitPrice,
          quantity: productsList[s].QuantityPerUnit
        });
        korpa.suma += parseFloat(productsList[s].UnitPrice);
        console.log(korpa);
      }
    }
  });

  $("#listaKorpa").hide();
  $("#btnKorpa").on("click", function prikaziKorpu() {
    $("#listaKorpa").empty();
    console.log(korpa.proizvodi);
    console.log("Cena: " + korpa.suma + "$");
    let listaKorpa = document.getElementById("listaKorpa");
    let tabela = document.createElement("table");

    for (let g in korpa.proizvodi) {
      let tr = document.createElement("tr");
      tr.setAttribute("class", "trKorpa");
      let td2 = document.createElement("td");
      td2.innerHTML = korpa.proizvodi[g].id;
      tr.appendChild(td2);

      let td1 = document.createElement("td");
      td1.innerHTML = korpa.proizvodi[g].name;
      tr.appendChild(td1);

      let td3 = document.createElement("td");
      td3.innerHTML = korpa.proizvodi[g].price + " $";
      td3.setAttribute("value", korpa.proizvodi[g].price);
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      td4.innerHTML = korpa.proizvodi[g].quantity;
      tr.appendChild(td4);

      tabela.appendChild(tr);

      listaKorpa.appendChild(tabela);
    }

    // let listaKorpa = document.getElementById("listaKorpa");
    //let tabela = document.createElement("table");
    let tr2 = document.createElement("tr");
    let tdSuma = document.createElement("td");

    tdSuma.setAttribute("id", "totalPrice");
    tdSuma.innerHTML = "Total Price: " + korpa.suma + "$";

    let tr3 = document.createElement("button");
    tr3.setAttribute("id", "btnDelete");

    tr3.innerHTML = "Empty Cart";

    tr2.appendChild(tdSuma);

    tabela.appendChild(tr2);
    tabela.appendChild(tr3);
    listaKorpa.appendChild(tabela);
    $("#btnDelete").click(function() {
      tdSuma.innerHTML = "Total Price: " + 0 + "$";
      $(".trKorpa").empty();

      korpa.proizvodi = [];
      korpa.suma = 0;
      sumDemo = 0;
      //  console.log(korpa);
    });
    $("#listaKorpa").toggle("3000");
  });
});
