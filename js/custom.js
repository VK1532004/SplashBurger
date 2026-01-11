function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



$(document).ready(function() {
    $('select').niceSelect();
  });


function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});





const form = document.getElementById('form');
const ime = document.getElementById('ime');
const telefon = document.getElementById('telefon');
const email = document.getElementById('email');
const osobe = document.getElementById('osobe');
const datum = document.getElementById('datum');
const poruka = document.getElementById('textarea');



const getTodayDate = () => new Date().toISOString().split('T')[0];

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isFormatValid = re.test(String(email).toLowerCase());
    
    const dozvoljeniDomeni = ['gmail.com', 'yahoo.com', 'ict.edu.rs'];
    const domen = email.split('@')[1];
    const isDomainValid = dozvoljeniDomeni.includes(domen);

    return isFormatValid && isDomainValid;
}

const isValidPhone = phone => {
    const re = /^[0-9]+$/; 
    return re.test(phone) && phone.length >= 8;
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.greska'); 
    errorDisplay.innerText = message;
    inputControl.classList.add('greska');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.greska'); 
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('greska');
};

const validateInputs = () => {
    const imeValue = ime.value.trim();
    const telefonValue = telefon.value.trim();
    const emailValue = email.value.trim();
    const osobeValue = osobe.value;
    const datumValue = datum.value;
    const porukaValue = poruka.value.trim();
    const today = getTodayDate();

    let isFormValid = true;

    
    if(imeValue === '') {
        setError(ime, 'Ime je obavezno');
        isFormValid = false;
    } else {
        setSuccess(ime);
    }

    
    if(telefonValue === '') {
        setError(telefon, 'Telefon je obavezan');
        isFormValid = false;
    } else if (!isValidPhone(telefonValue)) {
        setError(telefon, 'Samo brojevi (min 8)');
        isFormValid = false;
    } else {
        setSuccess(telefon);
    }

   
    if(emailValue === '') {
        setError(email, 'Email je obavezan');
        isFormValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Dozvoljeni: @gmail, @yahoo ili @ict');
        isFormValid = false;
    } else {
        setSuccess(email);
    }

    
    if(osobeValue === "") {
        setError(osobe, 'Odaberite broj osoba');
        isFormValid = false;
    } else {
        setSuccess(osobe);
    }

    
    if(datumValue === "") {
        setError(datum, 'Datum je obavezan');
        isFormValid = false;
    } else if (datumValue < today) {
        setError(datum, 'Datum ne može biti u prošlosti');
        isFormValid = false;
    } else {
        setSuccess(datum);
    }

    if(porukaValue === '') {
        setError(poruka, 'Poruka je obavezna');
        isFormValid = false;
    } else if (porukaValue.length < 15) {
        setError(poruka, 'Poruka mora imati bar 15 karaktera');
        isFormValid = false;
    } else {
        setSuccess(poruka);
    }


    if (isFormValid) {
        prikaziUspesnuPoruku();
    }
};



function prikaziUspesnuPoruku() {
    const successOverlay = document.createElement('div');
    successOverlay.id = "full-screen-success";
    successOverlay.innerHTML = `
        <div class="success-content">
            <i class="fa fa-check-circle"></i>
            <h2>Hvala Vam, ${ime.value}!</h2>
            <p>Vaša rezervacija je uspešno poslata.<br>Očekujte naš poziv uskoro.</p>
            <button onclick="location.reload()" class="close-btn">Zatvori</button>
        </div>
    `;
    document.body.appendChild(successOverlay);
    setTimeout(() => successOverlay.classList.add('active'), 10);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});


document.addEventListener('DOMContentLoaded', () => {
    datum.setAttribute('min', getTodayDate());
});



$(document).ready(function() {

    $(document).on('click', '.food_section .box', function(e) {
        
        var naslov = $(this).find('h5').text();
        var opis = $(this).find('p').text();
        
        
        var detalji = $(this).attr('data-info'); 

        
        if (!detalji) {
            detalji = ""; 
        } else {
            
            detalji = "<hr style='border-color:#555'><p style='color:#ffbe33'>" + detalji + "</p>";
        }

        $('#modalTitle').text(naslov);
        
        
        $('#modalDescription').html(opis + detalji);

        $('#foodModal').css('display', 'flex'); 
    });

   
    $(document).on('click', '.close-modal', function() { $('#foodModal').hide(); });
    $(window).on('click', function(e) { if (e.target.id === "foodModal") $('#foodModal').hide(); });
});



$('#foodModal').css('display', 'flex');






$(document).ready(function() {
  
    const hrana = [
        {
            naslov: "Vegetarijanska pica",
            opis: "Sveže. Šareno. Ukusno. Ko kaže da pica mora da ima meso da bi bila savršena?",
            cena: "$20",
            slika: "images/f1.png",
            kategorija: "pizza",
            detalji: "Bogatstvo povrća: paprika, kukuruz, masline i paradajz na hrskavoj podlozi."
        },
        {
            naslov: "Klasik Burger",
            opis: "Uživajte u sočnom junećem mesu, topljenom siru i hrskavoj salati.",
            cena: "$15",
            slika: "images/f2.png",
            kategorija: "burger",
            detalji: "100% čista junetina (200g), sveža zemička, paradajz, zelena salata i naš tajni sos."
        },
        {
            naslov: "Kaprićoza",
            opis: "Najpopularnija kombinacija ukusa koja nikada ne izlazi iz mode.",
            cena: "$17",
            slika: "images/f3.png",
            kategorija: "pizza",
            detalji: "Spoj šunke vrhunskog kvaliteta, svežih šampinjona i topljenog sira na našem domaćem testu."
        },
        {
            naslov: "Karbonara",
            opis: "Kremasto savršenstvo pripremljeno po originalnoj recepturi.",
            cena: "$18",
            slika: "images/f4.png",
            kategorija: "pasta",
            detalji: "Kremasti sos od pavlake, hrskava pančeta, žumance i dosta parmezana."
        },
        {
            naslov: "Pomfrit",
            opis: "Hrskavi, zlatno-žuti krompirići prženi do savršenstva.",
            cena: "$10",
            slika: "images/f5.png",
            kategorija: "fries",
            detalji: "Domaći krompir, morska so, prženo u čistom biljnom ulju. Bolji nego u Meku!"
        },
        {
            naslov: "Četiri vrste sira",
            opis: "Spoj četiri vrste vrhunskih sireva stvara kremastu teksturu.",
            cena: "$15",
            slika: "images/f6.png",
            kategorija: "pizza",
            detalji: "Mocarela, gorgonzola, parmezan i čedar na San Marzano pelatu."
        },
        {
            naslov: "Pohovani pileći burger",
            opis: "Hrskavi pileći file sa svežom zelenom salatom i bogatim smoky sosom.",
            cena: "$12",
            slika: "images/f7.png",
            kategorija: "burger",
            detalji: "Pileći file u kukuruznim pahuljicama, coleslaw namaz i zelena salata."
        },
        {
            naslov: "Pileći burger",
            opis: "Sočna piletina sa grila uz dodatak sveže zelene salate i paradajza.",
            cena: "$14",
            slika: "images/f8.png",
            kategorija: "burger",
            detalji: "Grilovani file mariniran u začinskom bilju sa blagim kremastim sosom."
        },
        {
            naslov: "Bolonjeze",
            opis: "Tradicionalni italijanski ragu od pažljivo biranog junećeg mesa.",
            cena: "$10",
            slika: "images/f9.png",
            kategorija: "pasta",
            detalji: "Mleveno meso krčkano u domaćem paradajz sosu sa mediteranskim začinima."
        }
    ];

 function inicijalizujMeni() {
        const container = $('#menu-container');
        container.empty(); 

        hrana.forEach(artikal => {
            const htmlKartica = `
                <div class="col-sm-6 col-lg-4 all ${artikal.kategorija}">
                    <div class="box" data-info="${artikal.detalji}">
                        <div class="img-box">
                            <img src="${artikal.slika}" alt="${artikal.naslov}">
                        </div>
                        <div class="detail-box">
                            <h5>${artikal.naslov}</h5>
                            <p>${artikal.opis}</p>
                            <div class="options" style="display: flex; justify-content: space-between; align-items: center;">
                                <h6>${artikal.cena}</h6>
                                <a href="javascript:void(0)" class="info-arrow" style="background: #e69100; color: white; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none;">
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`;
            container.append(htmlKartica);
        });

       
        var $grid = $('.grid').imagesLoaded(function() {
            $grid.isotope({
                itemSelector: '.all',
                layoutMode: 'fitRows',
                transitionDuration: '0.7s'
            });
        });

       
        $('.filters_menu li').on('click', function() {
            $('.filters_menu li').removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    }

   
    inicijalizujMeni();

    
    $(document).on('click', '.info-arrow', function(e) {
        e.preventDefault();
        var parentBox = $(this).closest('.box');
        var naslov = parentBox.find('h5').text();
        var opis = parentBox.find('p').text();
        var detalji = parentBox.attr('data-info'); 
        var detaljiHtml = "<hr style='border-color:#555'><p style='color:#ffbe33'>" + detalji + "</p>";

        $('#modalTitle').text(naslov);
        $('#modalDescription').html(opis + detaljiHtml);
        $('#foodModal').css('display', 'flex'); 
    });

    $(document).on('click', '.close-modal', function() { $('#foodModal').hide(); });
    $(window).on('click', function(e) { if (e.target.id === "foodModal") $('#foodModal').hide(); });
});



