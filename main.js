var arrNumber = [];
document.getElementById("btnThemSo").onclick = function () {
  // input : nhapso : number
  var nhapSo = Number(document.getElementById("nhapSo").value);
  //output: ket qua: string
  var ketQua = "";
  //progress
  arrNumber.push(nhapSo);
  ketQua = arrNumber;
  //in output ra man hinh
  document.getElementById("nhapSo").value = "";
  document.getElementById("arrNumber").innerHTML = ketQua;
};
// bài 1:tính tổng
document.getElementById("btnTinhTong").onclick = function () {
  // output: ket qua : Number
  var ketQua = 0;
  // progress
  for (var index = 0; index < arrNumber.length; index++) {
    ketQua = ketQua + arrNumber[index];
  }
  //in output ra man hinh
  document.getElementById("arrNumber_1").innerHTML = ketQua;
};
//bài 2:đếm số dương
document.getElementById("btnDemSoDuong").onclick = function () {
  // output: ket qua ; Number
  var ketQua = 0;
  // progress
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 0) {
      ketQua++;
    }
  }
  //in output ra màn hình
  document.getElementById("arrNumber_2").innerHTML = ketQua;
};
//bai:3 tìm số nhỏ nhất
document.getElementById("btnMin").onclick = function () {
  //output : ket qua : string
  //   var ketQua = 0;
  //   // progress
  //   ketQua = Math.min.apply(Math, arrNumber);
  // // in output ra màng hình
  min = arrNumber[0];
  for (var index = 0; index < arrNumber.length; index++) {
    if (min > arrNumber[index]) {
      min = arrNumber[index];
    }
  }
  document.getElementById("arrNumber_3").innerHTML =
    "kết qủa nhỏ nhất : " + min;
};
//bài 4: tìm số dương nhỏ nhất

document.getElementById("btnDuongNhoNhat").onclick = function () {
  // progress
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 0) {
      min = arrNumber[index];
    }
    break;
  }
  for (var index = 0; index < arrNumber.length; index++) {
    if (min > arrNumber[index] && arrNumber[index] > 0) {
      min = arrNumber[index];
    }
  }
  //in output ra màn hình
  document.getElementById("arrNumber_4").innerHTML =
    "kết quả số dương nhỏ nhất : " + min;
};
//bài 5: tìm số chẵn cuối cùng
document.getElementById("btnSoChanCuoi").onclick = function () {
  var soChan = -1;
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] % 2 === 0) soChan = arrNumber[index];
  }
  document.getElementById("arrNumber_5").innerHTML =
    "số chẵn cuối cùng là  : " + soChan;
};
// bài 6: đổi chỗ
document.getElementById("btnDoiCho").onclick = function () {
  //input:nhapViTri1,nhapViTri2 : number
  var nhapViTri1 = Number(document.getElementById("nhapViTri1").value);
  var nhapViTri2 = Number(document.getElementById("nhapViTri2").value);
  // output: hoandoi: String
  var hoanDoi = arrNumber[nhapViTri1]; // HOANDOI = b
  // progress
  arrNumber[nhapViTri1] = arrNumber[nhapViTri2]; //vt1 =c
  arrNumber[nhapViTri2] = hoanDoi; //vt2=b
  //in ouput ra màn hình
  document.getElementById("arrNumber_6").innerHTML =
    "mảng sau khi đổi: " + arrNumber;
};
// bài 7: sắp xếp tăng dần
document.getElementById("btnSapXepTang").onclick = function () {
  // progress
  for (var index1 = 0; index1 < arrNumber.length; index1++) {
    for (var index = index1 + 1; index < arrNumber.length; index++) {
      var lay1GiaTri = arrNumber[index1];
      if (lay1GiaTri > arrNumber[index]) {
        arrNumber[index1] = arrNumber[index];
        arrNumber[index] = lay1GiaTri;
      }
    }
  }
  // in output ra màn hình
  document.getElementById("arrNumber_7").innerHTML = arrNumber;
};
// bài 8
document.getElementById("btnSoNguyenTo").onclick = function () {
  //output: ketqua; string
  var ketQua = "";
  // progresss
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 1) {
      var kiemTra = true;
      for (uoc = 2; uoc <= arrNumber[index] / 2; uoc++) {
        if (arrNumber[index] % uoc === 0) {
          kiemTra = false;
          break;
        }
      }
      if (kiemTra == true) {
        ketQua = "số nguyên tố:" + arrNumber[index];
        break;
      } else ketQua = "khoong cos số nguyên tố";
    }
  }
  //in ouput ra màn hình
  document.getElementById("arrNumber_8").innerHTML = ketQua;
};
// bài 9: đếm số nguyên
document.getElementById("btnDemSoNguyen").onclick = function () {
  // output: ket qua ; Number
  var ketQua = 0;
  // progress
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] % 1 === 0) {
      ketQua++;
    }
  }
  //in output ra màn hình
  document.getElementById("arrNumber_9").innerHTML = ketQua;
};
// bài 10.
document.getElementById("btnsoSanh").onclick = function () {
  // output: ket qua ; Number
  var soSanh = "";
  var ketQua = 0;
  var ketQuaAm = 0;
  // progress
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 0) {
      ketQua++;
    }
  }
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] < 0) {
      ketQuaAm++;
    }
  }

  if (ketQua > ketQuaAm) {
    soSanh = "số dương" + ">" + "số âm";
  } else {
    soSanh = "số âm" + ">" + "số dương";
  }
  //in output ra màn hình
  document.getElementById("arrNumber_10").innerHTML = soSanh;
};
