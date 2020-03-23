var nama1 = document.getElementById("nama1");
var nama2 = document.getElementById("nama2");
var  = document.getElementById("nilai_tulis2");
var nilai_prak = document.getElementById("nilai_prak");
var nilai_ujianTulis = document.getElementById("nilai_ujianTulis");

var hasil_ujian = (parseInt(tulis1) + parseInt(tulis2) + parseInt(prak)) / 3;
var ujian_tulis = parseInt(tulis1) + parseInt(tulis2);

nilai_ujianTulis.innerHTML = +ujian_tulis;
nilai_prak.innerHTML = +prak;
nilai_ujian.innerHTML = +hasil_ujian;

//Toefl//

var nilai_toefl = document.getElementById("nilai_toefl");
var score_toefl = document.getElementById("score_toefl");
var toefl1 = parseInt(toefl);
score_toefl.innerHTML = +toefl1;

if (parseInt(toefl) >= 500) {
  nilai_toefl.innerHTML = "100";
} else if (parseInt(toefl) >= 450) {
  nilai_toefl.innerHTML = "85";
} else if (parseInt(toefl) < 450) {
  nilai_toefl.innerHTML = "50";
}

//BEASISWA

var nilai_beasiswa = document.getElementById("nilai_beasiswa");
var nilai_toefl = nilai_toefl.innerHTML;
var score_beasiswa = (parseInt(hasil_ujian) + parseInt(nilai_toefl)) / 2;
nilai_beasiswa.innerHTML = +score_beasiswa;

var statusbsw = document.getElementById("statusbsw");

var nilai = +score_beasiswa;
if (nilai >= 90) {
  statusbsw.innerHTML = "LULUS";
} else if (nilai < 90) {
  statusbsw.innerHTML = "TIDAK LULUS";
}
