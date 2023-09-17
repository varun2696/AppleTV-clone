
const appleLogo = document.getElementById("appleLogo");
appleLogo.addEventListener('click', function () {
    window.location.href = "index.html"
})

const showUserName = JSON.parse(sessionStorage.getItem("UserID")) || "Sign In";
const signInBtn = document.getElementById('sign');
signInBtn.innerText = showUserName;

signInBtn.addEventListener('click', function () {
    if (signInBtn.innerText === "Sign In") {
        window.location.replace('/signIn.html')
    }
    else {
        return;
    }
})


var Imagedata = [
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/Features126/v4/4a/12/d7/4a12d75d-b7f6-5eb0-3c65-5f88879c2402/15013377-ea27-4c23-a2a9-d68d75ae603c.lsr/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/d6sprLP3-1W-OlED4ZlzOg/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/670x377.webp" },
    { img_url: "https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/670x377.webp" },
    { img_url: "https://is5-ssl.mzstatic.com/image/thumb/ewq0-5ZSairVdRtcg43s0w/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/HRBOk7ebJJpnufwvrhXLUw/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/_dJgnWG8W30_qMRZYCEx-Q/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/f5MpOY_Tglwyv9W9lwutqg/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/NuIOgsGJ11I4jRoa7-GbSA/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/qYEYYvFXN2O4zEuCcBSbjw/670x377.webp" },
    { img_url: "https://is5-ssl.mzstatic.com/image/thumb/owNSUO3F109RC75YDPMY7A/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/SEsiWD2cTDShiJqUtRPAxg/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/2hSgeI8AyyKcpu_6Rhwg1w/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/2hSgeI8AyyKcpu_6Rhwg1w/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/ztml996EQMN-hkl3rjIlsw/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/kVTKGnVvCdFlB1sZeKa8YQ/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/HGw-QzsXlYUDp68NCOvxZQ/670x377.webp" },
    { img_url: "https://is4-ssl.mzstatic.com/image/thumb/vWs6dt5xDhG_DjIoc-89tA/670x377.webp" },
    { img_url: "https://is4-ssl.mzstatic.com/image/thumb/rZ34KsuVSjdutVP-0HO95A/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/dbEKo7rp5RGNNDrCbA7AUQ/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/le6mxqLNaXH47MHIH7stzw/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/BXmR2-KFYGt0UOGwMaocBg/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/wB0ypiax7KegkM2a0X_m8g/670x377.webp" },
    { img_url: "https://is5-ssl.mzstatic.com/image/thumb/McXcp2YSeuDh16Oph0nt6g/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/6tJakyTEtS0vrgdc9POZpg/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/fS85BR5uGUlTFLXLAWAMsg/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/fS85BR5uGUlTFLXLAWAMsg/670x377.webp" },
    { img_url: "https://is5-ssl.mzstatic.com/image/thumb/XtNPMhEaBU1FKkk_QK-DeA/670x377.webp" },
    { img_url: "https://is4-ssl.mzstatic.com/image/thumb/GwU4Qm-NLXeNi7M5bxpX-g/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/D1SCGzM1ESBh-SIkHwcvUQ/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/6kPVBOcFxH5eWRVp9Vy9BA/670x377.webp" },
    { img_url: "https://is4-ssl.mzstatic.com/image/thumb/q9_3U3s5W2xyotbNEgDWgA/670x377.webp" },
    { img_url: "https://is4-ssl.mzstatic.com/image/thumb/K-nsm8mEVNAAnevMTyya7g/670x377.webp" },
    { img_url: "https://is5-ssl.mzstatic.com/image/thumb/uBU112xIP48X2tW5EbpGGQ/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/i1482ZJ0WuDzQNcH_-HNpw/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/3iAbZQ4pznOpDRenkvOhNA/670x377.webp" },
    { img_url: "https://is4-ssl.mzstatic.com/image/thumb/Ro6cUnMcHLf3sEVL38YlRg/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/guRFN8wTcsEevaCqEl9RBA/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/IyvoDdhWEjtSADaSryepIw/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/8593WFOGVTTA1ncIGrL37g/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/Tb1jarRHaWN_SFiMjZcDHw/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/IryLNqf3vJszRupPX70Elg/670x377.webp" },
    { img_url: "https://is4-ssl.mzstatic.com/image/thumb/rbA884KpTpFowJZ9t08rhw/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/oANBVngpEJDvHRhdyozySA/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/zRCSBlp0LjwClRXsjyDNYQ/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/yXhlXOFkS9yJ1kMmOhfIbg/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/qAk-30MspnyIG9hVKJ1qKQ/670x377.webp" },
    { img_url: "https://is5-ssl.mzstatic.com/image/thumb/PsLk5RQuPoAqWJ-lVe1gLQ/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/d9YbWy1AerS9BZSiyoQ0Lw/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/lN-bUPh0Botn7U7jKgbnFg/670x377.webp" },
    { img_url: "https://is4-ssl.mzstatic.com/image/thumb/q15eqXAa_XH-L0KIDkPBJA/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/3gwPKd4h15ZXDprBfJqYPg/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/jvpbfkNAZaLIN3DZJUDX8Q/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/VXktJkcnADdcq8RjZVT_nw/670x377.webp" },
    { img_url: "https://is4-ssl.mzstatic.com/image/thumb/_WDO4pxq_b43sYn1s-nJQg/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/izP6zMmzs-m3VCjcOvM-DQ/670x377.webp" },
    { img_url: "https://is5-ssl.mzstatic.com/image/thumb/_Kq-GgPdDxxqWtSZ9GbHug/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/Epzt9WNlE21aE-FNCoVj2w/670x377.webp" },
    { img_url: "https://is4-ssl.mzstatic.com/image/thumb/L4WNJNV3nbmyAL6MQSeGuw/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/PzRfPYv8-A3pM1Uafiv1qQ/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/L79If4rL5GAF2ffGc7jBRg/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/7ZibOOG9wgaP6oAsnsGSxA/670x377.webp" },
    { img_url: "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/mqP1mK0HzuFhIBXsd_Q_SA/670x377.webp" },
    { img_url: "https://is4-ssl.mzstatic.com/image/thumb/Iz8wdsRXYRysnRRCY0yMrA/670x377.webp" },
    { img_url: "https://is5-ssl.mzstatic.com/image/thumb/RFbs1Kj9CJgtWAYKwmOEig/670x377.webp" },
    { img_url: "https://is5-ssl.mzstatic.com/image/thumb/NHLksWLSZpTcIw36-n7vWA/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/5SQrBAWXONSSRweUSmuRyg/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/vB48H4eBprLJ-WdCBTA6cw/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/xwiVfxV1l5Tfy6-1uQ25_Q/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/f5RNUG1IgsopLqB-Oy2mQw/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/QiFf4rD5DY65HbtJUOjE7Q/670x377.webp" },
    { img_url: "https://is5-ssl.mzstatic.com/image/thumb/P-1f-E_Qew_9syoQd34Wlw/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/lQggjzswj8ZD1hym1_oVGQ/670x377.webp" },
    { img_url: "https://is4-ssl.mzstatic.com/image/thumb/fiTyznFr4Rsvd25TNhffww/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/XoJp7FzEyuPeFp3nZZMHJw/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/a99v9iRDYcIGof0CvxUUoA/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/eAiYUbPoqO8wItnIrDqnJg/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/Ulms3rha_yDCvDVlZyYUoQ/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/7bpqOTRk7jFXrAFvrvx-MQ/670x377.webp" },
    { img_url: "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/StRHuSLsy2WhrdoPNZ07xQ/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/cyRvgYnPlaVn3rN2SDdW1Q/670x377.webp" },
    { img_url: "https://is2-ssl.mzstatic.com/image/thumb/DCj5c2CndQsWCj9zkGGa5Q/670x377.webp" },
    { img_url: "https://is3-ssl.mzstatic.com/image/thumb/k-4X4dDwJrtXlsgr1VI_0w/670x377.webp" }
]


Imagedata.forEach(function (el) {
    var card = document.createElement("div");

    var Img = document.createElement("img");
    Img.src = el.img_url;

    card.append(Img);

    document.querySelector("#container").append(card);
});
