/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/
//Function tar er parameter som sjekker modulo - hvis resultatet er lik 0, får vi svar "partall", ellers "oddetall"
function oddOrEven(tall) {
  return tall % 2 === 0 ? "Partall" : "Oddetall";
}

console.log(oddOrEven(5));
console.log(oddOrEven(456));
/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

const changeToUppercase = (string) => string.toUpperCase() + "!";

console.log(changeToUppercase("Dette er kult"));
console.log(changeToUppercase("Skal endres til store bokstaver"));

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

function greeter(name, time) {
  let message = "";
  if (time > 0 && time <= 5) {
    message = `God natt ${name}`;
  } else if (time >= 6 && time <= 11) {
    message = `God morgen ${name}`;
  } else if (time >= 12 && time <= 17) {
    message = `God dag ${name}`;
  } else if (time >= 18 && time <= 23) {
    message = `God kveld ${name}`;
  } else if (time < 0 || time > 23) {
    message = `Ugyldig tid ${name}`;
  } else if (time === undefined) {
    message = `Feilmelding: skriv en tid ${name}`;
  }

  return message;
}

console.log(greeter("Ela"));
console.log(greeter("Ela", 4));
console.log(greeter("Ann", 15));
/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

const changingArray = (newArray) => {
  newArray.pop();
  newArray.shift();
  return newArray;
};

console.log(changingArray(["Rød", "Grønn", "Blå", "Gul"]));
console.log(changingArray(["En", "To", "Tre", "Fire", "Fem", "Seks"]));
/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// first funksjon tar kun string og erstatter ord "vanskelig" med "gøy" og fjerner mellomromm fra starten og slutten av stringen

function changingString(string) {
  const changedString = string.replace("vanskelig", "gøy").trim();
  return changedString;
}

console.log(changingString("       javascript er vanskelig          "));

console.log(changingString(" Det er vanskelig å bruke metoder "));
console.log(changingString("   vanskelig        "));

//andre funskjon tar tre parameters: string, et ord som skal erstattes og et nytt ord og deretter fjerner mellomrom fra starten og slutten av string

function changingStringTwo(string, replacedWord, newWord) {
  const changedString = string.replace(replacedWord, newWord).trim();
  return changedString;
}

console.log(
  changingStringTwo(
    "       javascript er vanskelig          ",
    "vanskelig",
    "fun"
  )
);

console.log(
  changingStringTwo(" Det er vanskelig å bruke metoder ", "vanskelig", "gøy")
);

console.log(
  changingStringTwo(" Vi har fire årstider i Stavanger       ", "fire", "two")
);
// console.log("javascript er vanskelig".replace("vanskelig", "gøy"));
// const newString = "  Javascript er vanskelig   ";
// console.log(changingString(newString));

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/
// Steg 1
items.shift();
items[items.indexOf("Viskelær")] = "Linjal";
console.log(items);

// Steg 2
const newArray = items.toSpliced(0, 2, "Markeringspenn");
console.log(newArray);

// Steg 3
const joinedString = newArray.join(" | ");
console.log(joinedString);

// Steg 4
const filteredArray = items.filter((item) => item.includes("e"));
console.log(filteredArray);
/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

const checkingTheArray = (array, string) => {
  if (array.includes(string)) {
    const changedArray = array.toSpliced(array.indexOf(string), 1);
    return changedArray;
  } else {
    array.push(string);
    return array;
  }
};

console.log(checkingTheArray(["Rød", "Grønn", "Blå"], "Grønn"));
console.log(checkingTheArray(["Rød", "Grønn"], "Blå"));
console.log(checkingTheArray(["En", "To", "Tre"], "Fire"));
console.log(checkingTheArray(["En", "To", "Tre"], "To"));

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

const checkingDataType = (value) => {
  if (typeof value === "string") {
    return `😎 ${value} 😎`;
  } else if (typeof value === "number") {
    value *= 2;
    value.toString();
    return `😎 ${value} 😎`;
  } else if (typeof value === "boolean") {
    if (typeof value === "true") {
      return `😎 Ja 😎`;
    } else {
      return `😎 Slapp av 😎`;
    }
  } else {
    return `😎 Kun primitive verdier 😎`;
  }
};

console.log(checkingDataType("Hey"));
console.log(checkingDataType(5));
console.log(checkingDataType(false));
console.log(checkingDataType([5, 5, 6]));
