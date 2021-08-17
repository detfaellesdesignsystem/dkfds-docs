let data = [
    {"affaldstype": "Dagrenovation", "farvekode": "Grøn", "beskrivelse": "Madaffald, samt papir, pap eller plastik der ikke kan genanvendes, fordi der er madrester eller andet snask på.", "hvorenderdet": "Alt det affald, du smider ud i din primære skraldespand, som er dagrenovationen, bliver hentet og kørt på forbrændingen."},
    {"affaldstype": "Bioaffald og kompost", "farvekode": "Beige", "beskrivelse": "Alt madaffald uden fødevareemballage.", "hvorenderdet": "Bioaffaldet kommes i bionedbrydelige poser, som bliver komposteret til muld."},
    {"affaldstype": "Glas", "farvekode": "Hvid", "beskrivelse": "Alle typer glas og flasker.", "hvorenderdet": "De hele vinflasker rengøres og genbruges af vinhuse, mens glasskårene bliver smeltet om til nyt glas."},
    {"affaldstype": "Elektronik", "farvekode": "Orange", "beskrivelse": "Genstande der har brugt strøm.", "hvorenderdet": "Det elektroniske affald bliver typisk kørt til et demonteringsanlæg, hvor det bliver skilt ad, så de forskellige dele kan genanvendes separat."}
];


document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementById("btn-sort-by-affaldstype") !== null){

        let btnAffaldstype = document.getElementById("btn-sort-by-affaldstype");
        let btnFarvekode = document.getElementById("btn-sort-by-farvekode");

        btnAffaldstype.addEventListener('click', function(){
            let currentSorting = this.parentNode.getAttribute('aria-sort');
            let newSorting = "ascending";
            if(currentSorting == "ascending"){
                newSorting = "descending";
            }
            btnFarvekode.parentNode.setAttribute('aria-sort', "none");
            this.parentNode.setAttribute('aria-sort', newSorting);
            sortTable('affaldstype', newSorting);
        });

        btnFarvekode.addEventListener('click', function(){
            let currentSorting = this.parentNode.getAttribute('aria-sort');
            let newSorting = "ascending";
            if(currentSorting == "ascending"){
                newSorting = "descending";
            }
            btnAffaldstype.parentNode.setAttribute('aria-sort', "none");
            this.parentNode.setAttribute('aria-sort', newSorting);
            sortTable('farvekode', newSorting);
        });
    }
});
function compareStrings(a, b, order) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();
    let value = (a < b) ? -1 : (a > b) ? 1 : 0;
    if(order === 'descending'){
        return (value === 1) ? -1 : 1; 
    }
    return value;
  }
function sortTable(column, order){
    let table = document.getElementById("sortingTable");
    let tbody = table.getElementsByTagName('tbody')[0];
    tbody.setAttribute("aria-busy", "true");
    tbody.innerHTML = "";

    data.sort(function(a, b) {
        if(column == "affaldstype"){
            return compareStrings(a.affaldstype, b.affaldstype, order);
        }
        else if(column == "farvekode"){
            return compareStrings(a.farvekode, b.farvekode, order);
        }
    });
    

    for(let r in data){
        let tr = document.createElement('tr');
        let tdAffaldstype = document.createElement('td');
        tdAffaldstype.setAttribute('data-title', "Affaldstype");
        tdAffaldstype.innerText = data[r].affaldstype;
        let tdFarvekode = document.createElement('td');
        tdFarvekode.setAttribute('data-title', "Farvekode");
        tdFarvekode.innerText = data[r].farvekode;

        
        let tdBeskrivelse = document.createElement('td');
        tdBeskrivelse.setAttribute('data-title', "Beskrivelse");
        tdBeskrivelse.innerText = data[r].beskrivelse;
        
        let tdHvorenderdet = document.createElement('td');
        tdHvorenderdet.setAttribute('data-title', "Hvor ender det?");
        tdHvorenderdet.innerText = data[r].hvorenderdet;
        
        tr.appendChild(tdAffaldstype);
        tr.appendChild(tdFarvekode);
        tr.appendChild(tdBeskrivelse);
        tr.appendChild(tdHvorenderdet);
        tbody.appendChild(tr);
    }
    
    tbody.removeAttribute("aria-busy");
}