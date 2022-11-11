function tampil() {
  var angka = document.getElementById("angka").value;
  if (angka <= 0 || angka >= 21) {
    document.getElementById("output").innerHTML =
      "pilih angka antara 0 sampai 21";
  } else if (angka % 2 == 0) {
    let printResult = "";
    let result = 1;
    for (let i = 1; i < angka / 2; i++) {
      if (i == angka / 2) {
        printResult += 1 + "-";
      } else {
        printResult += i + "x ";
      }
      result *= i;
    }
    document.getElementById("output").innerHTML =
      "" + printResult + " = " + result;
  } else if (angka % 2 != 0) {
    let printResult = "";
    var a = 1;
    var b = 1;
    var next;
    while (a < angka * 10) {
      printResult += a + " ";
      next = a + b;
      a = b;
      b = next;
    }
    document.getElementById("output").innerHTML = "" + printResult;
  }
}
