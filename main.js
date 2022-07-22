// Bài tập 1
document.getElementById("yesterday").onclick = function () {
  // Input
  var ngay = document.getElementById("day").value * 1;
  var thang = document.getElementById("month").value * 1;
  var nam = document.getElementById("year").value * 1;
  var ngayTruoc;
  var thangTruoc;
  var namTruoc;

  // Process
  if (ngay === 1 && thang === 2) {
    ngayTruoc = 31;
  } else if (ngay === 1 && thang === 4) {
    ngayTruoc = 31;
  } else if (ngay === 1 && thang === 6) {
    ngayTruoc = 31;
  } else if (ngay === 1 && thang === 9) {
    ngayTruoc = 31;
  } else if (ngay === 1 && thang === 11) {
    ngayTruoc = 31;
  } else {
    ngayTruoc = 30;
  }

  if (ngay === 1 && thang === 1) {
    ngayTruoc = 31;
  }

  if (ngay === 1) {
    thangTruoc = thang - 1;
  } else {
    thangTruoc = thang;
  }

  if (ngay === 1 && thang === 1) {
    thangTruoc = 12;
  }

  if (ngay === 1 && thang === 1) {
    namTruoc = nam - 1;
  } else {
    namTruoc = nam;
  }

  // Output
  var result = "";
  result += "" + ngayTruoc + "/" + thangTruoc + "/" + namTruoc + "";
  document.getElementById("thongBaoNgay").innerText = result;
};

document.getElementById("tomorrow").onclick = function () {
  // Input
  var ngay = document.getElementById("day").value * 1;
  var thang = document.getElementById("month").value * 1;
  var nam = document.getElementById("year").value * 1;
  var ngayMai;
  var thangSau;
  var namSau;

  // Process
  if (ngay === 30) {
    ngayMai = ngay + 1;
  } else if (ngay === 31) {
    ngayMai = 1;
  } else {
    ngayMai = ngay + 1;
  }

  if (ngay === 31) {
    thangSau = thang + 1;
  } else {
    thangSau = thang;
  }

  if (ngay === 31 && thang === 12) {
    thangSau = 1;
    ngayMai = 1;
  }

  if (thang === 12) {
    namSau = nam + 1;
  } else {
    namSau = nam;
  }

  // Output
  var result = "";
  result += "" + ngayMai + "/" + thangSau + "/" + namSau + "";
  document.getElementById("thongBaoNgay").innerText = result;
};

// Bài tập 2
document.getElementById("tinhNgay").onclick = function () {
  // Input
  // Process
  // Output
};
