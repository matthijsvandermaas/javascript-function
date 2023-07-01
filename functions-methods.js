// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
function getEmailDomain(email) {
    const atIndex = email.lastIndexOf('@'); // Zoek de laatste index van het teken '@'
    const domain = email.slice(atIndex + 1); // Haal de substring vanaf de index na '@' tot het einde van de string
    return domain;
}

// Voorbeeldgebruik:
console.log(getEmailDomain("n.eeken@novi-education.nl")); // Output: novi-education.nl
console.log(getEmailDomain("t.mellink@novi.nl")); // Output: novi.nl
console.log(getEmailDomain("a.wiersma@outlook.com")); // Output: outlook.com




/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
function getEmailDomain(email) {
    const atIndex = email.lastIndexOf('@'); // Zoek de laatste index van het teken '@'
    const domain = email.slice(atIndex + 1); // Haal de substring vanaf de index na '@' tot het einde van de string
    return domain;
}

function typeOfEmail(email) {
    const domain = getEmailDomain(email);

    if (domain === "novi-education.nl") {
        return "Student";
    } else if (domain === "novi.nl") {
        return "Medewerker";
    } else {
        return "Extern";
    }
}

// Voorbeeldgebruik:
console.log(typeOfEmail("n.eeken@novi-education.nl")); // Output: "Student"
console.log(typeOfEmail("t.mellink@novi.nl")); // Output: "Medewerker"
console.log(typeOfEmail("novi.nlaapjesk@outlook.com")); // Output: "Extern"
console.log(typeOfEmail("a.wiersma@outlook.com")); // Output: "Extern"



/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(email) {
    if (!email.includes('@')) {
        return false; // Geen @-teken aanwezig, dus ongeldig e-mailadres
    }

    if (email.includes(',')) {
        return false; // Komma aanwezig, dus ongeldig e-mailadres
    }

    if (email.endsWith('.')) {
        return false; // Punt als laatste karakter, dus ongeldig e-mailadres
    }

    return true; // Alle voorwaarden voldaan, dus geldig e-mailadres
}

// Voorbeeldgebruik:
console.log(checkEmailValidity("n.eeken@novi.nl")); // Output: true
console.log(checkEmailValidity("tessmellink@novi.nl")); // Output: true
console.log(checkEmailValidity("n.eekenanovi.nl")); // Output: false
console.log(checkEmailValidity("n.eeken@novinl")); // Output: false
console.log(checkEmailValidity("tessmellink@novi,nl")); // Output: false

function checkEmailValidity(email) {
    if (!email.includes('@')) {
        return false; // Geen @-teken aanwezig, dus ongeldig e-mailadres
    }

    if (email.includes(',')) {
        return false; // Komma aanwezig, dus ongeldig e-mailadres
    }

    if (email.endsWith('.')) {
        return false; // Punt als laatste karakter, dus ongeldig e-mailadres
    }

    return true; // Alle voorwaarden voldaan, dus geldig e-mailadres
}

const emailAddresses = [
    "n.eeken@novi.nl",
    "tessmellink@novi.nl",
    "n.eekenanovi.nl",
    "n.eeken@novinl.",
    "tessmellink@novi,nl"
];

for (let i = 0; i < emailAddresses.length; i++) {
    const email = emailAddresses[i];
    if (checkEmailValidity(email)) {
        console.log(email);
    }
}
