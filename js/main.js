function uzemanyagKalkulator() {

    let fogyasztas = Number(document.getElementById("fogyasztas").value);
    let uzemanyag = Number(document.getElementById("uzemanyag").value);
    let kilometer = Number(document.getElementById("kilometer").value);


    uzemanyagAr = (fogyasztas * uzemanyag * kilometer) / 100;

    let forintHULocale = Intl.NumberFormat('hu-HU');

    document.getElementById("eredmeny").innerHTML = ("Az Ön által tervezett út útiköltsége: " + forintHULocale.format(Math.round(uzemanyagAr)) + " Ft");
}


function zoldsegKalkulator() {

    let almaMennyiseg = Number(document.getElementById("almaMennyiseg").value);
    let szilvaMennyiseg = Number(document.getElementById("szilvaMennyiseg").value);
    let szoloMennyiseg = Number(document.getElementById("szoloMennyiseg").value);

    almaAr = almaMennyiseg * 240;
    szilvaAr = szilvaMennyiseg * 310;
    szoloAr = szoloMennyiseg * 650;

    zoldsegAr = (almaAr + szilvaAr + szoloAr);

    let forintHULocale = Intl.NumberFormat('hu-HU');
    document.getElementById("eredmeny").innerHTML = ("Az Ön által vásárolt gyülömcsök ára külön-külön: alma: " + forintHULocale.format(almaAr) + " Ft (240 ft/kg), szilva: " + forintHULocale.format(szilvaAr) + " Ft (310 ft/kg), szőlő: " + forintHULocale.format(szoloAr) + " Ft (650 ft/kg). A teljes végösszeg: " + forintHULocale.format(zoldsegAr) + " Ft.");
}


function euroKalkulator() {

    let euroArfolyam = Number(document.getElementById("euroArfolyam").value);
    let valtoOsszeg = Number(document.getElementById("valtoOsszeg").value);

    euroOsszeg = (euroArfolyam * valtoOsszeg);

    let forintHULocale = Intl.NumberFormat('hu-HU');
    document.getElementById("eredmeny").innerHTML = ("A mai napon Ön " + valtoOsszeg + " Euroért " + forintHULocale.format(euroOsszeg) + " Forintot kap!");
}

function bmiKalkulator() {

    let testMagassag = Number(document.getElementById("testMagassag").value);
    let testTomeg = Number(document.getElementById("testTomeg").value);


    bmi = testTomeg / (Math.pow(testMagassag / 100, 2));
    //document.getElementById("eredmeny").innerHTML=("Az Ön testtömeg indexe (BMI): "+bmi.toLocaleString('hu-hu')+", ami azt jeleni, hogy Ön ");

    document.getElementById("eredmeny").classList.add("bg-dark");
    document.getElementById("eredmeny").classList.add("p-3");
    document.getElementById("tulsovany").classList.remove("bg-danger");
    document.getElementById("mersekelt").classList.remove("bg-warning");
    document.getElementById("enyhensovany").classList.remove("bg-warning");
    document.getElementById("normal").classList.remove("bg-success");
    document.getElementById("tulsulyos").classList.remove("bg-warning");
    document.getElementById("enyheelhizas").classList.remove("bg-warning");
    document.getElementById("kozepeselhizas").classList.remove("bg-warning");
    document.getElementById("koroselhizas").classList.remove("bg-danger");
    document.getElementById("eredmeny").classList.remove("text-warning");
    document.getElementById("eredmeny").classList.remove("text-danger");
    document.getElementById("eredmeny").classList.remove("text-success");

    if (bmi < 16) {

        document.getElementById("eredmeny").innerHTML = ("Az Ön testtömeg indexe (BMI): <strong>" + bmi.toLocaleString('hu-hu') + "</strong>, ami azt jeleni, hogy Ön <strong> súlyosan sovány</strong>!");

        document.getElementById("eredmeny").classList.add("text-danger");
        document.getElementById("tulsovany").classList.add("bg-danger");


    } else if (bmi < 17) {

        document.getElementById("eredmeny").innerHTML = ("Az Ön testtömeg indexe (BMI): <strong>" + bmi.toLocaleString('hu-hu') + "</strong>, ami azt jeleni, hogy Ön <strong> mérsékelten sovány</strong>!");

        document.getElementById("eredmeny").classList.add("text-warning");
        document.getElementById("mersekelt").classList.add("bg-warning");


    } else if (bmi < 18.5) {

        document.getElementById("eredmeny").innerHTML = ("Az Ön testtömeg indexe (BMI): </strong>" + bmi.toLocaleString('hu-hu') + "</strong>, ami azt jeleni, hogy Ön <strong> enyhén sovány</strong>!");

        document.getElementById("eredmeny").classList.add("text-warning");
        document.getElementById("enyhensovany").classList.add("bg-warning");

    } else if (bmi < 24.5) {

        document.getElementById("eredmeny").innerHTML = ("Az Ön testtömeg indexe (BMI): <strong>" + bmi.toLocaleString('hu-hu') + "</strong>, ami azt jeleni, hogy Ön <strong> normál testsúlyal</strong> rendelkezik!");

        document.getElementById("eredmeny").classList.add("text-success");
        document.getElementById("normal").classList.add("bg-success");

    } else if (bmi < 30) {

        document.getElementById("eredmeny").innerHTML = ("Az Ön testtömeg indexe (BMI): <strong>" + bmi.toLocaleString('hu-hu') + "</strong>, ami azt jeleni, hogy Ön <strong> túlsúlyos</strong>!");

        document.getElementById("eredmeny").classList.add("text-warning");
        document.getElementById("tulsulyos").classList.add("bg-warning");

    } else if (bmi < 35) {

        document.getElementById("eredmeny").innerHTML = ("Az Ön testtömeg indexe (BMI): <strong>" + bmi.toLocaleString('hu-hu') + "</strong>, ami azt jeleni, hogy Ön <strong> I. fokú elhízott</strong>!");

        document.getElementById("eredmeny").classList.add("text-warning");
        document.getElementById("enyheelhizas").classList.add("bg-warning");
    } else if (bmi < 40) {

        document.getElementById("eredmeny").innerHTML = ("Az Ön testtömeg indexe (BMI): <strong>" + bmi.toLocaleString('hu-hu') + "</strong>, ami azt jeleni, hogy Ön <strong> II. fokú elhízott</strong>!");

        document.getElementById("eredmeny").classList.add("text-warning");
        document.getElementById("kozepeselhizas").classList.add("bg-warning");

    } else if (bmi >= 40) {

        document.getElementById("eredmeny").innerHTML = ("Az Ön testtömeg indexe (BMI): <strong>" + bmi.toLocaleString('hu-hu') + "</strong>, ami azt jeleni, hogy Ön <strong> III. fokú elhízott</strong>!");

        document.getElementById("eredmeny").classList.add("text-danger");
        document.getElementById("koroselhizas").classList.add("bg-danger");

    }

}

function egyenletKalkulator() {

    let valtozoA = Number(document.getElementById("valtozoA").value);
    let valtozoB = Number(document.getElementById("valtozoB").value);
    let valtozoC = Number(document.getElementById("valtozoC").value);

    diszkriminans = Math.sqrt(Math.pow(valtozoB, 2) - 4 * valtozoA * valtozoC);
    x1 = (-1 * valtozoB + diszkriminans) / (2 * valtozoA);
    x2 = (-1 * valtozoB - diszkriminans) / (2 * valtozoA);

    document.getElementById("eredmeny").classList.remove("text-danger");
    document.getElementById("eredmeny").classList.remove("text-success");
    document.getElementById("eredmeny").classList.add("bg-dark");
    document.getElementById("eredmeny").classList.add("p-3");
    document.getElementById("eredmeny").classList.add("rounded-3");

    if (diszkriminans > 0) {

        document.getElementById("eredmeny").innerHTML = ("Az egyenletnek két valós gyöke, azaz két megoldása van X<sub>1</sub> és X<sub>2</sub>, azaz kettő pontban érinti az X tengelyt!<br> X<sub>1</sub>= " + x1 + "<br> X<sub>2</sub>= " + x2 );
        document.getElementById("eredmeny").classList.add("text-success");


    } else if (diszkriminans == 0) {

        document.getElementById("eredmeny").innerHTML = ("Az egyenletnek egy valós gyöke, azaz egy megoldása van X<sub>1</sub>, azaz egy pontban érinti az X tengelyt!<br> X<sub>1</sub>= " + x1);
        document.getElementById("eredmeny").classList.add("text-success");

    } else {

        document.getElementById("eredmeny").innerHTML = ("Az egyenletnek nincs valós gyöke, azaz nincs megoldása, nem érinti az x tengelyt!");
        document.getElementById("eredmeny").classList.add("text-danger");

    }



}