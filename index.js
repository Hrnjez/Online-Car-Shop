$(document).ready(function() {
  $("#demo1").hide();
  $("#demo2").hide();
  $("#demo3").hide();
  $("#demo4").hide();
  $("#drugiProjekat").hide();
  $("#pogresanIdPw").hide();
  //$("#celaStrana").hide();
  $("#btn1").click(function() {
    $("#demo1").toggle("3000");
  });
  $("#btn2").click(function() {
    $("#demo2").toggle("3000");
  });
  $("#btn3").click(function() {
    $("#demo4").toggle("3000");
    $("#btn3").hide("3000");
  });
  $("#title").click(function() {
    $("#demo3").toggle("3000");
  });
  $("#title").css("font-size", "60px");
  $("#title").css("background-color", "rgb(20, 19, 19)");

  $("#footer").css("font-family", "Arial Narrow");
  $("#footer").css("background-color", "rgb(20, 19, 19)");

  $("#btnLogIn").click(function(e) {
    e.preventDefault(); // zato sto po difoltu reloaduje stranicuuu
    let logInProductsList = null;
    $.ajax({
      url: "logInProducts.json",
      dataType: "json",
      async: false,
      success: function(logInProducts) {
        logInProductsList = logInProducts;
        logInProductsList = logInProductsList.value;
      }
    });
    //console.log(logInProductsList);
    let userPwList = Array();

    for (let i = 0; i < logInProductsList.length; i++) {
      var username = logInProductsList[i].ContactName;
      var password = logInProductsList[i].CustomerID;
      userPwList.push({ id: username, pw: password });
    }
    console.log(userPwList);

    let inputUser = document.getElementById("user");
    let inputPw = document.getElementById("pw");
    login = false;
    for (let x in userPwList) {
      if (
        inputUser.value == userPwList[x].id &&
        inputPw.value == userPwList[x].pw
      ) {
        console.log("Log In: SUCCESS");
        window.location.href = "onlineShop.html";
        login = true;
        break;
      } else {
        login = false;
      }
      if (login == false) {
        $("#pogresanIdPw").show(500);
        $("#drugiProjekat").hide(500);
      }
    }
  });
});

$("#btnShop").click(function createTable() {
  var webShop = document.getElementById("webShop");
  var tableD = document.createElement("td");
  tableD.setAttribute("id", "tabela");

  for (i = 0; i < productsArr.length; i++) {
    var tableR = document.createElement("tr" + i);
    console.log(productsArr[i].ProductName);
    tableR.innerHTML = "Product Name: " + productsArr[i].ProductName + "<br>";
    tableD.appendChild(tableR);
    webShop.appendChild(tableD);
  }
});
