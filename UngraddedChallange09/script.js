var angka = [2, 4, 6]
var genap=[], ganjil=[], kelipatan3=[]

function mengelompokanAngka (angka) {
    var p = angka.length

    for (var i=0; i<=p; i++) {
        for (var j=0; j<=p; j++) {
            if (angka[j] % 2 == 0) {
                genap.push(angka[j])
            } else if (angka[j] % 2 == 1) {
                ganjil.push(angka[j])
            } else if (angka[j] % 3 == 0) {
                kelipatan3.push(angka[j])
            }
        }

        console.log("Bilangan genap: " + genap + ", Bilangan ganjil: " + ganjil + ", Bilangan Kelipatan 3: " + kelipatan3)
    }
}