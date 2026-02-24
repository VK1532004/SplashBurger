
$(document).ready(function() {
    
    const stavkeMenija = [
        { naslov: "Početna", link: "index.html" },
        { naslov: "Meni", link: "#glavnimeni" },
        { naslov: "Recenzije", link: "#recenzija" },
        { naslov: "O nama", link: "about.html" }
    ];

   
    function popuniHeader() {
        const $headerUl = $('#glavna-navigacija'); 
        if ($headerUl.length) {
            $headerUl.empty(); 
            
            stavkeMenija.forEach((stavka, index) => {
               
                const activeClass = (index === 0) ? "active" : "";
                
                const liHtml = `
                    <li class="nav-item ${activeClass}">
                        <a class="nav-link" href="${stavka.link}">${stavka.naslov}</a>
                    </li>
                `;
                $headerUl.append(liHtml);
            });
        }
    }

    
    function popuniFooter() {
        const $footerUl = $('#footer-navigacija');
        if ($footerUl.length) {
            $footerUl.empty();
            
            stavkeMenija.forEach(stavka => {
                const linkHtml = `
                    <a href="${stavka.link}">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <span>${stavka.naslov}</span>
                    </a>
                `;
                $footerUl.append(linkHtml);
            });
        }
    }

    
    popuniHeader();
    popuniFooter();

   
});


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



$(document).ready(function() {
    function kreirajFeaturesSekciju() {
        
        const prednosti = [
            {
                naslov: "Brza Dostava",
                tekst: "Vaša hrana stiže topla i sveža u rekordnom roku na vašu adresu.",
                ikona: "fa-truck"
            },
            {
                naslov: "Sveži Sastojci",
                tekst: "Koristimo isključivo domaće namirnice proverenog kvaliteta.",
                ikona: "fa-leaf"
            },
            {
                naslov: "Vrhunski Kvalitet",
                tekst: "Naši kuvari pripremaju svako jelo sa posebnom pažnjom i ljubavlju.",
                ikona: "fa-star"
            }
        ];

      
        const section = document.createElement('section');
        section.className = 'why_section layout_padding';
        section.style.backgroundColor = '#f1f2f3';

       
        const container = document.createElement('div');
        container.className = 'container';

        
        const headingBox = document.createElement('div');
        headingBox.className = 'heading_container heading_center';
        headingBox.style.marginBottom = '45px';

        const h2 = document.createElement('h2');
        h2.innerText = 'Zašto Izabrati Nas?';
        headingBox.appendChild(h2);
        container.appendChild(headingBox);

        
        const row = document.createElement('div');
        row.className = 'row';

       
        prednosti.forEach(stavka => {
            const col = document.createElement('div');
            col.className = 'col-md-4';

            const box = document.createElement('div');
            box.className = 'box';
            box.style.textAlign = 'center';
            box.style.padding = '30px';
            box.style.background = '#ffffff';
            box.style.borderRadius = '10px';
            box.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
            box.style.transition = 'all 0.3s';
            box.style.marginBottom = '20px';

            
            box.onmouseover = () => { box.style.transform = 'translateY(-10px)'; box.style.borderColor = '#ffbe33'; };
            box.onmouseout = () => { box.style.transform = 'translateY(0)'; };

            const imgBox = document.createElement('div');
            imgBox.className = 'img-box';
            imgBox.style.fontSize = '45px';
            imgBox.style.color = '#222831';
            imgBox.style.marginBottom = '15px';
            
            const i = document.createElement('i');
            i.className = `fa ${stavka.ikona}`;
            imgBox.appendChild(i);

            const detailBox = document.createElement('div');
            detailBox.className = 'detail-box';

            const h5 = document.createElement('h5');
            h5.innerText = stavka.naslov;
            h5.style.fontWeight = 'bold';

            const p = document.createElement('p');
            p.innerText = stavka.tekst;

            detailBox.appendChild(h5);
            detailBox.appendChild(p);
            box.appendChild(imgBox);
            box.appendChild(detailBox);
            col.appendChild(box);
            row.appendChild(col);
        });

        container.appendChild(row);
        section.appendChild(container);

        
        const footer = document.querySelector('footer');
        if (footer) {
            document.body.insertBefore(section, footer);
        }
    }

  if ($('#glavnimeni').length > 0) {
        kreirajFeaturesSekciju();
    }
});







$(document).ready(function() {
    function kreirajBackToTopDugme() {
   
        const btn = document.createElement('button');
        btn.id = "backToTop";
        btn.innerHTML = '<i class="fa fa-arrow-up"></i>';
        
     
        Object.assign(btn.style, {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#ffbe33',
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer',
            display: 'none', 
            zIndex: '1000',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            fontSize: '20px',
            transition: 'all 0.3s ease'
        });

        document.body.appendChild(btn);

     
        btn.onmouseover = () => {
            btn.style.backgroundColor = '#222831';
            btn.style.transform = 'scale(1.1)';
        };
        btn.onmouseout = () => {
            btn.style.backgroundColor = '#ffbe33';
            btn.style.transform = 'scale(1.0)';
        };

       
        $(window).scroll(function() {
            if ($(window).scrollTop() > 400) {
                $(btn).fadeIn();
            } else {
                $(btn).fadeOut();
            }
        });

      
        $(btn).click(function() {
            $('html, body').animate({ scrollTop: 0 }, 600);
            return false;
        });
    }

    kreirajBackToTopDugme();
});






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






$(document).ready(function() {
    function kreirajSekcijuKuvari() {
        const kuvari = [
            { ime: "Marko Petrović", uloga: "Glavni kuvar", slika: "images/kuvar1.jfif", opis:"Marko ima preko 15 godina iskustva u elitnim restoranima Pariza. Njegova strast su moderni obrti na tradicionalna balkanska jela.", fb: "https://www.facebook.com/?locale=sr_RS", ig: "https://www.instagram.com/" },
            { ime: "Ana Jović", uloga: "Poslastičar", slika: "images/zenakuvar1.jfif", opis:"Anini deserti nisu samo hrana, već umetnička dela. Specijalista je za francuske makaronse i domaće krempite.", fb: "https://www.facebook.com/?locale=sr_RS", ig: "https://www.instagram.com/" },
            { ime: "Stefan Lukić", uloga: "Majstor za burgere", slika: "images/kuvar2.jfif", opis:"Stefan veruje da je tajna savršenog burgera u marinadi i temperaturi grila. On je kreator našeg čuvenog 'Splash' burgera.", fb: "https://www.facebook.com/?locale=sr_RS", ig: "https://www.instagram.com/" },
            { ime: "Jelena Nikolić", uloga: "Specijalista za pastu", slika: "images/zenakuvar2.jfif", opis:"Jelena ručno pravi svaku vrstu testenine u našoj kuhinji. Donela je recept za autentičnu karbonaru direktno iz Rima.", fb: "https://www.facebook.com/?locale=sr_RS", ig: "https://www.instagram.com/" }
        ];

        const section = document.createElement('section');
        section.className = 'chef_section layout_padding';
        section.style.background = '#ffffff';

        const container = document.createElement('div');
        container.className = 'container';

        const heading = document.createElement('div');
        heading.className = 'heading_container heading_center';
        heading.style.marginBottom = '45px';
        heading.innerHTML = `<h2>Upoznajte naše kuvare</h2>`;
        container.appendChild(heading);

        const row = document.createElement('div');
        row.className = 'row';

kuvari.forEach(kuvar => {
    const col = document.createElement('div');
    col.className = 'col-md-3 col-sm-6';

    const chefBox = document.createElement('div');
    chefBox.className = 'chef_box';
 
    chefBox.style.cssText = 'text-align: center; margin-bottom: 30px; cursor: pointer;';

  
    const imgContainer = document.createElement('div');
    imgContainer.style.cssText = 'width: 180px; height: 180px; margin: 0 auto 15px; overflow: hidden; border-radius: 50%; border: 5px solid #ffbe33; transition: 0.3s;';
    
    const img = document.createElement('img');
    img.src = kuvar.slika;
    img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
    imgContainer.appendChild(img);

    
    const info = document.createElement('div');
    info.innerHTML = `
        <h5 style="font-weight: bold; margin-bottom: 5px;">${kuvar.ime}</h5>
        <p style="color: #666; font-style: italic; font-size: 0.9rem; margin-bottom: 10px;">${kuvar.uloga}</p>
    `;

   
    const socialBox = document.createElement('div');
    socialBox.style.cssText = 'display: flex; justify-content: center; gap: 15px; margin-bottom: 10px;';
    socialBox.innerHTML = `
        <a href="${kuvar.fb}" style="color: #222831;"><i class="fa fa-facebook"></i></a>
        <a href="${kuvar.ig}" style="color: #222831;"><i class="fa fa-instagram"></i></a>
    `;

   
    const bio = document.createElement('div');
    bio.className = 'chef-bio';
    bio.style.cssText = 'display: none; margin-top: 15px; font-size: 0.85rem; color: #444; background: #fefefe; padding: 12px; border-radius: 8px; border: 1px solid #ffbe33; box-shadow: 0 2px 5px rgba(0,0,0,0.05);';
    bio.innerText = kuvar.opis;

   
    chefBox.onclick = function() {
       
        $('.chef-bio').not($(bio)).slideUp();
        
    
        $(bio).slideToggle(400);
        
       
        if (bio.style.display === 'none') {
            imgContainer.style.borderColor = '#222831';
        } else {
            imgContainer.style.borderColor = '#ffbe33';
        }
    };

    
    chefBox.appendChild(imgContainer);
    chefBox.appendChild(info);
    chefBox.appendChild(socialBox);
    chefBox.appendChild(bio); 
    
    col.appendChild(chefBox);
    row.appendChild(col);
});

        container.appendChild(row);
        section.appendChild(container);

        
        const recenzije = document.querySelector('.client_section');
        if (recenzije) {
            recenzije.parentNode.insertBefore(section, recenzije);
        } else {
            document.body.insertBefore(section, document.querySelector('footer'));
        }
    }
 if ($('#glavnimeni').length > 0) {
        kreirajSekcijuKuvari();
    }
    
});







$(document).ready(function() {
    
   
    
    let sacuvaniDatum = localStorage.getItem('akcijaKraj');
    let ciljniDatum;

    if (sacuvaniDatum) {
        
        ciljniDatum = new Date(sacuvaniDatum).getTime();
    } else {
        
        let buducnost = new Date();
        buducnost.setDate(buducnost.getDate() + 7);
        ciljniDatum = buducnost.getTime();
        localStorage.setItem('akcijaKraj', buducnost);
    }

    function kreirajSpecijalnuPonudu() {
        const ponudaHtml = `
            <div id="promo-timer-sekcija" class="container" style="margin-top: 30px; margin-bottom: 20px;">
                <div style="background: linear-gradient(135deg, #222831 0%, #323d4a 100%); 
                            border: 2px solid #ffbe33; 
                            border-radius: 15px; 
                            padding: 25px; 
                            position: relative; 
                            overflow: hidden;
                            box-shadow: 0 10px 20px rgba(0,0,0,0.2);">
                    
                    <div class="row align-items-center">
                        <div class="col-md-6 text-md-left text-center">
                            <h3 style="font-family: 'Dancing Script', cursive; color: #ffbe33; font-size: 2.2rem; margin-bottom: 5px;">
                                Specijalna Ponuda!
                            </h3>
                            <p style="color: #ffffff; margin-bottom: 0; font-size: 1.1rem;">
                                Iskoristi <span style="color: #ffbe33; font-weight: bold;">30% popusta</span> pre nego što vreme istekne!
                            </p>
                        </div>
                        <div class="col-md-6 text-center mt-3 mt-md-0">
                            <div id="countdown" style="display: flex; justify-content: center; gap: 15px; color: white;">
                                <div class="timer-unit">
                                    <span id="dana" style="display: block; font-size: 1.8rem; font-weight: bold; color: #ffbe33;">00</span>
                                    <small style="text-transform: uppercase; font-size: 0.7rem;">Dana</small>
                                </div>
                                <div style="font-size: 1.8rem; font-weight: bold; margin-top: -5px;">:</div>
                                <div class="timer-unit">
                                    <span id="sati" style="display: block; font-size: 1.8rem; font-weight: bold; color: #ffbe33;">00</span>
                                    <small style="text-transform: uppercase; font-size: 0.7rem;">Sati</small>
                                </div>
                                <div style="font-size: 1.8rem; font-weight: bold; margin-top: -5px;">:</div>
                                <div class="timer-unit">
                                    <span id="minuti" style="display: block; font-size: 1.8rem; font-weight: bold; color: #ffbe33;">00</span>
                                    <small style="text-transform: uppercase; font-size: 0.7rem;">Min</small>
                                </div>
                                <div style="font-size: 1.8rem; font-weight: bold; margin-top: -5px;">:</div>
                                <div class="timer-unit">
                                    <span id="sekunde" style="display: block; font-size: 1.8rem; font-weight: bold; color: #ffbe33;">00</span>
                                    <small style="text-transform: uppercase; font-size: 0.7rem;">Sek</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        $('#glavnimeni .heading_container').after(ponudaHtml);
    }

    function azurirajTimer() {
        const sad = new Date().getTime();
        const razlika = ciljniDatum - sad;

        if (razlika > 0) {
            const d = Math.floor(razlika / (1000 * 60 * 60 * 24));
            const h = Math.floor((razlika % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((razlika % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((razlika % (1000 * 60)) / 1000);

            $('#dana').text(d < 10 ? "0" + d : d);
            $('#sati').text(h < 10 ? "0" + h : h);
            $('#minuti').text(m < 10 ? "0" + m : m);
            $('#sekunde').text(s < 10 ? "0" + s : s);
            
            $('#sekunde').fadeOut(500).fadeIn(500);
        } else {
            
            localStorage.removeItem('akcijaKraj');
            $('#promo-timer-sekcija').html('<h4 class="text-center" style="color:#ffbe33">Akcija je završena! Pratite nas za nove popuste.</h4>');
        }
    }

    
    if ($('#glavnimeni').length) {
        kreirajSpecijalnuPonudu();
        azurirajTimer(); 
        setInterval(azurirajTimer, 1000);
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




