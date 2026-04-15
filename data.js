/**
 * Central data file — edit this to add children, languages, and tasks.
 *
 * LANGUAGE CODES USED:
 *   nl = Nederlands, sq = Albanees, bs = Bosnisch, ru = Russisch, en = Engels
 *
 * Each task has a `steps` object keyed by language code.
 * Each value is an array of instruction strings (one per step).
 * The play page pairs steps[childLang][i] with steps.nl[i].
 */

const APP_DATA = {
  baseUrl: "https://jenspenneman.github.io/febe",

  children: [
    // --- Non-Dutch speakers ---
    { id: "alex", name: "Alex", symbol: "symbols/alex-fiets.png", languageCode: "sq" },
    { id: "melek", name: "Melek", symbol: "symbols/melek-glijbaan.png", languageCode: "bs" },
    { id: "noah", name: "Noah", symbol: "symbols/noah-bus.png", languageCode: "ru" },
    { id: "mon", name: "Mon", symbol: "symbols/mon-ananas.png", languageCode: "en" },

    // --- Dutch speakers ---
    { id: "lily-p", name: "Lily P.", symbol: "symbols/lily-p-ster.png", languageCode: "nl" },
    { id: "marie", name: "Marie", symbol: "symbols/marie-regenboog.png", languageCode: "nl" },
    { id: "jack", name: "Jack", symbol: "symbols/jack-zon.png", languageCode: "nl" },
    { id: "lily-b", name: "Lily B.", symbol: "symbols/lily-b-bloem.png", languageCode: "nl" },
    { id: "kasper", name: "Kasper", symbol: "symbols/kasper-hart.png", languageCode: "nl" },
    { id: "leonie", name: "Leonie", symbol: "symbols/leonie-ijsje.png", languageCode: "nl" },
    { id: "yara", name: "Yara", symbol: "symbols/yara-vlinder.png", languageCode: "nl" },
    { id: "jaran", name: "Jaran", symbol: "symbols/jaran-paraplu.png", languageCode: "nl" },
    { id: "lily-w", name: "Lily W.", symbol: "symbols/lily-w-krijtjes.png", languageCode: "nl" },
    { id: "zoe", name: "Zo\u00EB", symbol: "symbols/zoe-vos.png", languageCode: "nl" },
    { id: "amelie", name: "Amelie", symbol: "symbols/amelie-watermeloen.png", languageCode: "nl" },
    { id: "ylana", name: "Ylana", symbol: "symbols/ylana-lieveheersbeestje.png", languageCode: "nl" },
    { id: "cisse", name: "Cisse", symbol: "symbols/cisse-basketbal.png", languageCode: "nl" },
    { id: "adriana", name: "Adriana", symbol: "symbols/adriana-vlieger.png", languageCode: "nl" },
  ],

  tasks: [
    // ── 1. Zaadjes planten ──
    {
      id: "zaadjes-planten",
      title: "\uD83C\uDF31 Zaadjes planten",
      steps: {
        nl: [
          "Neem een kaartje.",
          "Kijk goed naar de bollen op het kaartje.",
          "Tel hoeveel bollen je ziet.",
          "Kies het zaadje met de juiste kleur.",
          "Plant het juiste aantal zaadjes in de plantenbak.",
          "Tel nog eens: heb je evenveel zaadjes geplant als bollen op het kaartje?",
        ],
        en: [
          "Take a card.",
          "Look carefully at the bulbs on the card.",
          "Count how many bulbs you see.",
          "Choose the seed with the right color.",
          "Plant the right number of seeds in the planter.",
          "Count again: did you plant as many seeds as bulbs on the card?",
        ],
        sq: [
          "Merr nj\u00EB kart\u00EB.",
          "Shiko mir\u00EB bulbat n\u00EB kart\u00EB.",
          "Num\u00EBro sa bulba sheh.",
          "Zgjidh far\u00EBn me ngjyr\u00EBn e duhur.",
          "Mbill numrin e duhur t\u00EB farave n\u00EB vazon.",
          "Num\u00EBro p\u00EBrs\u00EBri: a ke mbjell\u00EB po aq fara sa bulba n\u00EB kart\u00EB?",
        ],
        bs: [
          "Uzmi karticu.",
          "Dobro pogledaj lukovice na kartici.",
          "Izbroji koliko lukovica vidi\u0161.",
          "Izaberi sjemenku sa pravom bojom.",
          "Posadi ta\u010Dan broj sjemenki u saksiju.",
          "Izbroji ponovo: jesi li posadio isto sjemenki koliko i lukovica na kartici?",
        ],
        ru: [
          "\u0412\u043E\u0437\u044C\u043C\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443.",
          "\u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u043B\u0443\u043A\u043E\u0432\u0438\u0446\u044B \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435.",
          "\u041F\u043E\u0441\u0447\u0438\u0442\u0430\u0439, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u043A\u043E\u0432\u0438\u0446 \u0442\u044B \u0432\u0438\u0434\u0438\u0448\u044C.",
          "\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u0435\u043C\u0435\u0447\u043A\u043E \u043D\u0443\u0436\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430.",
          "\u041F\u043E\u0441\u0430\u0434\u0438 \u043D\u0443\u0436\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0435\u043C\u044F\u043D \u0432 \u0433\u043E\u0440\u0448\u043E\u043A.",
          "\u041F\u043E\u0441\u0447\u0438\u0442\u0430\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437: \u0442\u044B \u043F\u043E\u0441\u0430\u0434\u0438\u043B \u0441\u0442\u043E\u043B\u044C\u043A\u043E \u0436\u0435 \u0441\u0435\u043C\u044F\u043D, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u043A\u043E\u0432\u0438\u0446 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435?",
        ],
      },
    },

    // ── 2. Zoek het juiste boek ──
    {
      id: "zoek-boek",
      title: "\uD83D\uDCDA Zoek het juiste boek",
      steps: {
        nl: [
          "Neem de 4 gekleurde papieren bij je.",
          "Kijk goed naar de voorkant van de boeken bovenaan elk blad.",
          "Neem een losse prent.",
          "Kijk goed naar je prent.",
          "Zoek bij welk boek jouw prent hoort.",
          "Kleef de prent op het juiste blad.",
        ],
        en: [
          "Take the 4 colored papers with you.",
          "Look carefully at the front of the books at the top of each sheet.",
          "Take a loose picture.",
          "Look carefully at your picture.",
          "Find which book your picture belongs to.",
          "Stick the picture on the right sheet.",
        ],
        sq: [
          "Merr 4 letrat me ngjyra me vete.",
          "Shiko mir\u00EB kapakun e librave n\u00EB krye t\u00EB \u00E7do flete.",
          "Merr nj\u00EB figur\u00EB t\u00EB lir\u00EB.",
          "Shiko mir\u00EB figur\u00EBn t\u00EBnde.",
          "Gjej se cilit lib\u00EBr i p\u00EBrket figura jote.",
          "Ngjit figur\u00EBn n\u00EB flet\u00EBn e duhur.",
        ],
        bs: [
          "Uzmi 4 papira u boji sa sobom.",
          "Dobro pogledaj naslovnice knjiga na vrhu svakog lista.",
          "Uzmi jednu sliku.",
          "Dobro pogledaj svoju sliku.",
          "Prona\u0111i kojoj knjizi pripada tvoja slika.",
          "Zalijepi sliku na pravi list.",
        ],
        ru: [
          "\u0412\u043E\u0437\u044C\u043C\u0438 \u0441 \u0441\u043E\u0431\u043E\u0439 4 \u0446\u0432\u0435\u0442\u043D\u044B\u0445 \u043B\u0438\u0441\u0442\u0430.",
          "\u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u043E\u0431\u043B\u043E\u0436\u043A\u0438 \u043A\u043D\u0438\u0433 \u043D\u0430\u0432\u0435\u0440\u0445\u0443 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043B\u0438\u0441\u0442\u0430.",
          "\u0412\u043E\u0437\u044C\u043C\u0438 \u043E\u0434\u043D\u0443 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443.",
          "\u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u0441\u0432\u043E\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443.",
          "\u041D\u0430\u0439\u0434\u0438, \u043A \u043A\u0430\u043A\u043E\u0439 \u043A\u043D\u0438\u0433\u0435 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u0442\u0432\u043E\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430.",
          "\u041F\u0440\u0438\u043A\u043B\u0435\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u043D\u0430 \u043D\u0443\u0436\u043D\u044B\u0439 \u043B\u0438\u0441\u0442.",
        ],
      },
    },

    // ── 3. Boodschappen doen ──
    {
      id: "boodschappen",
      title: "\uD83D\uDED2 Boodschappen doen",
      steps: {
        nl: [
          "Neem een boodschappenlijstje.",
          "Kies een kleur: groen is makkelijk, oranje is een beetje moeilijk, rood is moeilijk.",
          "Kijk goed naar jouw kaartje.",
          "Groen: tel hoeveel keer het voorwerp op het kaartje staat. Neem dat voorwerp evenveel keer.",
          "Oranje: kijk welk voorwerp je moet nemen. Kijk naar het getalbeeld. Neem het voorwerp zoveel keer als het getalbeeld.",
          "Rood: kijk welk voorwerp je moet nemen. Kijk naar het cijfer. Neem het voorwerp zoveel keer als het cijfer.",
          "Verzamel alle juiste boodschappen.",
        ],
        en: [
          "Take a shopping list.",
          "Choose a color: green is easy, orange is a little hard, red is hard.",
          "Look carefully at your card.",
          "Green: count how many times the item is on the card. Take that item the same number of times.",
          "Orange: look which item you need to take. Look at the number image. Take the item as many times as the number image shows.",
          "Red: look which item you need to take. Look at the number. Take the item as many times as the number.",
          "Collect all the right groceries.",
        ],
        sq: [
          "Merr nj\u00EB list\u00EB pazari.",
          "Zgjidh nj\u00EB ngjyr\u00EB: jeshile \u00EBsht\u00EB e leht\u00EB, portokalli \u00EBsht\u00EB pak e v\u00EBshtir\u00EB, e kuqe \u00EBsht\u00EB e v\u00EBshtir\u00EB.",
          "Shiko mir\u00EB kart\u00EBn t\u00EBnde.",
          "Jeshile: num\u00EBro sa her\u00EB \u00EBsht\u00EB sendi n\u00EB kart\u00EB. Merr at\u00EB send po aq her\u00EB.",
          "Portokalli: shiko cilin send duhet t\u00EB marr\u00EBsh. Shiko figur\u00EBn e numrit. Merr sendin aq her\u00EB sa tregon figura e numrit.",
          "E kuqe: shiko cilin send duhet t\u00EB marr\u00EBsh. Shiko numrin. Merr sendin aq her\u00EB sa numri.",
          "Mblidh t\u00EB gjitha sendet e duhura.",
        ],
        bs: [
          "Uzmi spisak za kupovinu.",
          "Izaberi boju: zelena je lako, narand\u017Easta je malo te\u017Ee, crvena je te\u0161ko.",
          "Dobro pogledaj svoju karticu.",
          "Zelena: izbroji koliko puta se predmet pojavljuje na kartici. Uzmi taj predmet isto toliko puta.",
          "Narand\u017Easta: pogledaj koji predmet treba\u0161 uzeti. Pogledaj sliku broja. Uzmi predmet onoliko puta koliko pokazuje slika broja.",
          "Crvena: pogledaj koji predmet treba\u0161 uzeti. Pogledaj broj. Uzmi predmet onoliko puta koliko pokazuje broj.",
          "Skupi sve ta\u010Dne namirnice.",
        ],
        ru: [
          "\u0412\u043E\u0437\u044C\u043C\u0438 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A.",
          "\u0412\u044B\u0431\u0435\u0440\u0438 \u0446\u0432\u0435\u0442: \u0437\u0435\u043B\u0451\u043D\u044B\u0439 \u2014 \u043B\u0435\u0433\u043A\u043E, \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439 \u2014 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u0436\u043D\u043E, \u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u2014 \u0441\u043B\u043E\u0436\u043D\u043E.",
          "\u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u0441\u0432\u043E\u044E \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443.",
          "\u0417\u0435\u043B\u0451\u043D\u044B\u0439: \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u0439, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435. \u0412\u043E\u0437\u044C\u043C\u0438 \u044D\u0442\u043E\u0442 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0441\u0442\u043E\u043B\u044C\u043A\u043E \u0436\u0435 \u0440\u0430\u0437.",
          "\u041E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439: \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A\u043E\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u043D\u0443\u0436\u043D\u043E \u0432\u0437\u044F\u0442\u044C. \u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u0441 \u0447\u0438\u0441\u043B\u043E\u043C. \u0412\u043E\u0437\u044C\u043C\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0441\u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430.",
          "\u041A\u0440\u0430\u0441\u043D\u044B\u0439: \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A\u043E\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u043D\u0443\u0436\u043D\u043E \u0432\u0437\u044F\u0442\u044C. \u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u0446\u0438\u0444\u0440\u0443. \u0412\u043E\u0437\u044C\u043C\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u0441\u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0446\u0438\u0444\u0440\u0430.",
          "\u0421\u043E\u0431\u0435\u0440\u0438 \u0432\u0441\u0435 \u043D\u0443\u0436\u043D\u044B\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438.",
        ],
      },
    },

    // ── 4. Zaadjes kiezen en planten ──
    {
      id: "zaadjes-kiezen",
      title: "\uD83C\uDF38 Zaadjes kiezen en planten",
      steps: {
        nl: [
          "Neem een instructiekaart.",
          "Kies een kleur: groen is makkelijk, oranje is een beetje moeilijk, rood is moeilijk.",
          "Kijk goed naar jouw kaartje.",
          "Groen: kijk naar de kleur van de bollen. Tel hoeveel bollen je ziet. Neem Orbies in dezelfde kleur. Neem er evenveel als je geteld hebt.",
          "Oranje: kijk naar de kleur. Kijk naar het getalbeeld. Neem Orbies in de juiste kleur. Neem er zoveel als het getalbeeld.",
          "Rood: kijk naar de kleur. Kijk naar het cijfer. Neem Orbies in de juiste kleur. Neem er zoveel als het cijfer.",
          "Steek de Orbies in het bloempotje.",
        ],
        en: [
          "Take an instruction card.",
          "Choose a color: green is easy, orange is a little hard, red is hard.",
          "Look carefully at your card.",
          "Green: look at the color of the bulbs. Count how many bulbs you see. Take Orbies in the same color. Take as many as you counted.",
          "Orange: look at the color. Look at the number image. Take Orbies in the right color. Take as many as the number image shows.",
          "Red: look at the color. Look at the number. Take Orbies in the right color. Take as many as the number.",
          "Put the Orbies in the flower pot.",
        ],
        sq: [
          "Merr nj\u00EB kart\u00EB udh\u00EBzimi.",
          "Zgjidh nj\u00EB ngjyr\u00EB: jeshile \u00EBsht\u00EB e leht\u00EB, portokalli \u00EBsht\u00EB pak e v\u00EBshtir\u00EB, e kuqe \u00EBsht\u00EB e v\u00EBshtir\u00EB.",
          "Shiko mir\u00EB kart\u00EBn t\u00EBnde.",
          "Jeshile: shiko ngjyr\u00EBn e bulbave. Num\u00EBro sa bulba sheh. Merr Orbies me t\u00EB nj\u00EBjt\u00EBn ngjyr\u00EB. Merr po aq sa num\u00EBrove.",
          "Portokalli: shiko ngjyr\u00EBn. Shiko figur\u00EBn e numrit. Merr Orbies me ngjyr\u00EBn e duhur. Merr aq sa tregon figura e numrit.",
          "E kuqe: shiko ngjyr\u00EBn. Shiko numrin. Merr Orbies me ngjyr\u00EBn e duhur. Merr aq sa numri.",
          "Vendos Orbies n\u00EB vazon.",
        ],
        bs: [
          "Uzmi karticu sa uputstvom.",
          "Izaberi boju: zelena je lako, narand\u017Easta je malo te\u017Ee, crvena je te\u0161ko.",
          "Dobro pogledaj svoju karticu.",
          "Zelena: pogledaj boju lukovica. Izbroji koliko lukovica vidi\u0161. Uzmi Orbies iste boje. Uzmi ih isto koliko si izbrojio.",
          "Narand\u017Easta: pogledaj boju. Pogledaj sliku broja. Uzmi Orbies u pravoj boji. Uzmi ih onoliko koliko pokazuje slika broja.",
          "Crvena: pogledaj boju. Pogledaj broj. Uzmi Orbies u pravoj boji. Uzmi ih onoliko koliko pokazuje broj.",
          "Stavi Orbies u saksiju.",
        ],
        ru: [
          "\u0412\u043E\u0437\u044C\u043C\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0441 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439.",
          "\u0412\u044B\u0431\u0435\u0440\u0438 \u0446\u0432\u0435\u0442: \u0437\u0435\u043B\u0451\u043D\u044B\u0439 \u2014 \u043B\u0435\u0433\u043A\u043E, \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439 \u2014 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u0436\u043D\u043E, \u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u2014 \u0441\u043B\u043E\u0436\u043D\u043E.",
          "\u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u0441\u0432\u043E\u044E \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443.",
          "\u0417\u0435\u043B\u0451\u043D\u044B\u0439: \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u0446\u0432\u0435\u0442 \u043B\u0443\u043A\u043E\u0432\u0438\u0446. \u041F\u043E\u0441\u0447\u0438\u0442\u0430\u0439, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u043A\u043E\u0432\u0438\u0446 \u0442\u044B \u0432\u0438\u0434\u0438\u0448\u044C. \u0412\u043E\u0437\u044C\u043C\u0438 Orbies \u0442\u0430\u043A\u043E\u0433\u043E \u0436\u0435 \u0446\u0432\u0435\u0442\u0430. \u0412\u043E\u0437\u044C\u043C\u0438 \u0441\u0442\u043E\u043B\u044C\u043A\u043E, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u043B.",
          "\u041E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439: \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u0446\u0432\u0435\u0442. \u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u0441 \u0447\u0438\u0441\u043B\u043E\u043C. \u0412\u043E\u0437\u044C\u043C\u0438 Orbies \u043D\u0443\u0436\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430. \u0412\u043E\u0437\u044C\u043C\u0438 \u0441\u0442\u043E\u043B\u044C\u043A\u043E, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430.",
          "\u041A\u0440\u0430\u0441\u043D\u044B\u0439: \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u0446\u0432\u0435\u0442. \u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u0446\u0438\u0444\u0440\u0443. \u0412\u043E\u0437\u044C\u043C\u0438 Orbies \u043D\u0443\u0436\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430. \u0412\u043E\u0437\u044C\u043C\u0438 \u0441\u0442\u043E\u043B\u044C\u043A\u043E, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0446\u0438\u0444\u0440\u0430.",
          "\u041F\u043E\u043B\u043E\u0436\u0438 Orbies \u0432 \u0433\u043E\u0440\u0448\u043E\u0447\u0435\u043A.",
        ],
      },
    },

    // ── 5. Zoek de verschillen ──
    {
      id: "verschillen",
      title: "\uD83D\uDD0D Zoek de verschillen",
      steps: {
        nl: [
          "Neem het blad met de twee prenten.",
          "Kijk goed naar beide prenten.",
          "Zoek de 7 verschillen.",
          "Heb je een verschil gevonden?",
          "Duid het verschil aan op beide prenten.",
        ],
        en: [
          "Take the sheet with the two pictures.",
          "Look carefully at both pictures.",
          "Find the 7 differences.",
          "Did you find a difference?",
          "Mark the difference on both pictures.",
        ],
        sq: [
          "Merr flet\u00EBn me dy figurat.",
          "Shiko mir\u00EB t\u00EB dyja figurat.",
          "Gjej 7 dallimet.",
          "A gjete nj\u00EB dallim?",
          "Sh\u00EBno dallimin n\u00EB t\u00EB dyja figurat.",
        ],
        bs: [
          "Uzmi list sa dvije slike.",
          "Dobro pogledaj obje slike.",
          "Prona\u0111i 7 razlika.",
          "Jesi li prona\u0161ao razliku?",
          "Ozna\u010Di razliku na obje slike.",
        ],
        ru: [
          "\u0412\u043E\u0437\u044C\u043C\u0438 \u043B\u0438\u0441\u0442 \u0441 \u0434\u0432\u0443\u043C\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430\u043C\u0438.",
          "\u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u043E\u0431\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438.",
          "\u041D\u0430\u0439\u0434\u0438 7 \u043E\u0442\u043B\u0438\u0447\u0438\u0439.",
          "\u041D\u0430\u0448\u0451\u043B \u043E\u0442\u043B\u0438\u0447\u0438\u0435?",
          "\u041E\u0442\u043C\u0435\u0442\u044C \u043E\u0442\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u043E\u0431\u0435\u0438\u0445 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430\u0445.",
        ],
      },
    },

    // ── 6. Volg de juiste volgorde ──
    {
      id: "volgorde",
      title: "\uD83C\uDF37 Volg de juiste volgorde",
      steps: {
        nl: [
          "Neem het blad.",
          "Kijk bovenaan naar de tulpen.",
          "Zie je de volgorde van de kleuren?",
          "Volg altijd dezelfde volgorde: blauw, roze, geel, groen, rood, paars, wit.",
          "Zet je potlood op de blauwe bloem.",
          "Ga daarna naar de roze bloem, dan naar de gele, en zo verder in dezelfde volgorde.",
          "Doe dit in elk vakje.",
        ],
        en: [
          "Take the sheet.",
          "Look at the tulips at the top.",
          "Do you see the order of the colors?",
          "Always follow the same order: blue, pink, yellow, green, red, purple, white.",
          "Put your pencil on the blue flower.",
          "Then go to the pink flower, then to the yellow one, and so on in the same order.",
          "Do this in every box.",
        ],
        sq: [
          "Merr flet\u00EBn.",
          "Shiko tulipan\u00EBt lart.",
          "A e sheh rendin e ngjyrave?",
          "Ndiq gjithmon\u00EB t\u00EB nj\u00EBjtin rend: blu, roz\u00EB, verdh\u00EB, jeshile, kuq, vjollc\u00EB, bardh\u00EB.",
          "Vendos lapsin mbi lulen blu.",
          "Pastaj shko te lulja roz\u00EB, pastaj te e verdha, e k\u00EBshtu me radh\u00EB.",
          "B\u00EBje k\u00EBt\u00EB n\u00EB \u00E7do katror.",
        ],
        bs: [
          "Uzmi list.",
          "Pogledaj tulipane na vrhu.",
          "Vidi\u0161 li redoslijed boja?",
          "Uvijek prati isti redoslijed: plava, roza, \u017Euta, zelena, crvena, ljubi\u010Dasta, bijela.",
          "Stavi olovku na plavi cvijet.",
          "Zatim idi na roza cvijet, pa na \u017Euti, i tako dalje istim redoslijedom.",
          "Uradi ovo u svakom polju.",
        ],
        ru: [
          "\u0412\u043E\u0437\u044C\u043C\u0438 \u043B\u0438\u0441\u0442.",
          "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u0442\u044E\u043B\u044C\u043F\u0430\u043D\u044B \u043D\u0430\u0432\u0435\u0440\u0445\u0443.",
          "\u0412\u0438\u0434\u0438\u0448\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0446\u0432\u0435\u0442\u043E\u0432?",
          "\u0412\u0441\u0435\u0433\u0434\u0430 \u0441\u043B\u0435\u0434\u0443\u0439 \u043E\u0434\u043D\u043E\u043C\u0443 \u043F\u043E\u0440\u044F\u0434\u043A\u0443: \u0441\u0438\u043D\u0438\u0439, \u0440\u043E\u0437\u043E\u0432\u044B\u0439, \u0436\u0451\u043B\u0442\u044B\u0439, \u0437\u0435\u043B\u0451\u043D\u044B\u0439, \u043A\u0440\u0430\u0441\u043D\u044B\u0439, \u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u0439, \u0431\u0435\u043B\u044B\u0439.",
          "\u041F\u043E\u0441\u0442\u0430\u0432\u044C \u043A\u0430\u0440\u0430\u043D\u0434\u0430\u0448 \u043D\u0430 \u0441\u0438\u043D\u0438\u0439 \u0446\u0432\u0435\u0442\u043E\u043A.",
          "\u041F\u043E\u0442\u043E\u043C \u0438\u0434\u0438 \u043A \u0440\u043E\u0437\u043E\u0432\u043E\u043C\u0443 \u0446\u0432\u0435\u0442\u043A\u0443, \u043F\u043E\u0442\u043E\u043C \u043A \u0436\u0451\u043B\u0442\u043E\u043C\u0443, \u0438 \u0442\u0430\u043A \u0434\u0430\u043B\u0435\u0435 \u0432 \u0442\u043E\u043C \u0436\u0435 \u043F\u043E\u0440\u044F\u0434\u043A\u0435.",
          "\u0421\u0434\u0435\u043B\u0430\u0439 \u044D\u0442\u043E \u0432 \u043A\u0430\u0436\u0434\u043E\u0439 \u043A\u043B\u0435\u0442\u043A\u0435.",
        ],
      },
    },

    // ── 7. Verbind het juiste figuur ──
    {
      id: "verbind-figuur",
      title: "\uD83D\uDC1E Verbind het juiste figuur",
      steps: {
        nl: [
          "Neem het blad.",
          "Kijk bovenaan naar de insecten.",
          "Onder elk insect zie je een figuur.",
          "Kijk goed naar de pijl. De pijl toont naar een nieuwe figuur.",
          "Zet je potlood op de bol bij het insect.",
          "Trek een lijn van de bol naar de juiste figuur.",
          "Doe dit voor elk insect.",
        ],
        en: [
          "Take the sheet.",
          "Look at the insects at the top.",
          "Under each insect you see a shape.",
          "Look carefully at the arrow. The arrow points to a new shape.",
          "Put your pencil on the dot next to the insect.",
          "Draw a line from the dot to the right shape.",
          "Do this for every insect.",
        ],
        sq: [
          "Merr flet\u00EBn.",
          "Shiko insektet lart.",
          "N\u00EBn \u00E7do insekt sheh nj\u00EB figur\u00EB.",
          "Shiko mir\u00EB shigjet\u00EBn. Shigjeta tregon nj\u00EB figur\u00EB t\u00EB re.",
          "Vendos lapsin mbi pik\u00EBn te insekti.",
          "T\u00EBrhiq nj\u00EB vij\u00EB nga pika te figura e duhur.",
          "B\u00EBje k\u00EBt\u00EB p\u00EBr \u00E7do insekt.",
        ],
        bs: [
          "Uzmi list.",
          "Pogledaj insekte na vrhu.",
          "Ispod svakog insekta vidi\u0161 oblik.",
          "Dobro pogledaj strelicu. Strelica pokazuje na novi oblik.",
          "Stavi olovku na ta\u010Dku kod insekta.",
          "Povuci liniju od ta\u010Dke do pravog oblika.",
          "Uradi ovo za svakog insekta.",
        ],
        ru: [
          "\u0412\u043E\u0437\u044C\u043C\u0438 \u043B\u0438\u0441\u0442.",
          "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u044B\u0445 \u043D\u0430\u0432\u0435\u0440\u0445\u0443.",
          "\u041F\u043E\u0434 \u043A\u0430\u0436\u0434\u044B\u043C \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u044B\u043C \u0442\u044B \u0432\u0438\u0434\u0438\u0448\u044C \u0444\u0438\u0433\u0443\u0440\u0443.",
          "\u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u0441\u0442\u0440\u0435\u043B\u043A\u0443. \u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043D\u0430 \u043D\u043E\u0432\u0443\u044E \u0444\u0438\u0433\u0443\u0440\u0443.",
          "\u041F\u043E\u0441\u0442\u0430\u0432\u044C \u043A\u0430\u0440\u0430\u043D\u0434\u0430\u0448 \u043D\u0430 \u0442\u043E\u0447\u043A\u0443 \u0443 \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u043E\u0433\u043E.",
          "\u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043B\u0438\u043D\u0438\u044E \u043E\u0442 \u0442\u043E\u0447\u043A\u0438 \u0434\u043E \u043D\u0443\u0436\u043D\u043E\u0439 \u0444\u0438\u0433\u0443\u0440\u044B.",
          "\u0421\u0434\u0435\u043B\u0430\u0439 \u044D\u0442\u043E \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u043E\u0433\u043E.",
        ],
      },
    },

    // ── 8. Woorden met de letter L ──
    {
      id: "woorden-letter-l",
      title: "\uD83C\uDFA8 Woorden met de letter L",
      steps: {
        nl: [
          "Neem het blad.",
          "Kijk goed naar de prenten.",
          "Zeg het woord van de prent hardop.",
          "Hoor je de letter L vooraan in het woord? Ja? Kleur de prent. Nee? Laat de prent wit.",
          "Doe dit voor alle prenten.",
        ],
        en: [
          "Take the sheet.",
          "Look carefully at the pictures.",
          "Say the word of the picture out loud.",
          "Do you hear the letter L at the start of the word? Yes? Color the picture. No? Leave the picture white.",
          "Do this for all pictures.",
        ],
        sq: [
          "Merr flet\u00EBn.",
          "Shiko mir\u00EB figurat.",
          "Thuaj fjal\u00EBn e figur\u00EBs me z\u00EB t\u00EB lart\u00EB.",
          "A e d\u00EBgjon shkronj\u00EBn L n\u00EB fillim t\u00EB fjal\u00EBs? Po? Ngjyros figur\u00EBn. Jo? L\u00EBre figur\u00EBn bardh\u00EB.",
          "B\u00EBje k\u00EBt\u00EB p\u00EBr t\u00EB gjitha figurat.",
        ],
        bs: [
          "Uzmi list.",
          "Dobro pogledaj slike.",
          "Izgovori rije\u010D sa slike naglas.",
          "\u010Cuje\u0161 li slovo L na po\u010Detku rije\u010Di? Da? Oboji sliku. Ne? Ostavi sliku bijelu.",
          "Uradi ovo za sve slike.",
        ],
        ru: [
          "\u0412\u043E\u0437\u044C\u043C\u0438 \u043B\u0438\u0441\u0442.",
          "\u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438.",
          "\u0421\u043A\u0430\u0436\u0438 \u0441\u043B\u043E\u0432\u043E \u0441 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u0432\u0441\u043B\u0443\u0445.",
          "\u0421\u043B\u044B\u0448\u0438\u0448\u044C \u0431\u0443\u043A\u0432\u0443 L \u0432 \u043D\u0430\u0447\u0430\u043B\u0435 \u0441\u043B\u043E\u0432\u0430? \u0414\u0430? \u0420\u0430\u0441\u043A\u0440\u0430\u0441\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443. \u041D\u0435\u0442? \u041E\u0441\u0442\u0430\u0432\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u0431\u0435\u043B\u043E\u0439.",
          "\u0421\u0434\u0435\u043B\u0430\u0439 \u044D\u0442\u043E \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A.",
        ],
      },
    },

    // ── 9. Boetseer de bloem ──
    {
      id: "boetseer-bloem",
      title: "\uD83C\uDF3C Boetseer de bloem",
      steps: {
        nl: [
          "Neem een boetseerafbeelding.",
          "Kijk goed naar de bloem op de prent.",
          "Maak met de klei bolletjes of worstjes.",
          "Leg de klei op de bloem en maak dezelfde vorm na.",
          "Wil je het moeilijker maken? Leg de klei naast de prent en maak de bloem na zonder erop te leggen.",
        ],
        en: [
          "Take a modeling picture.",
          "Look carefully at the flower in the picture.",
          "Make little balls or rolls with the clay.",
          "Put the clay on the flower and copy the same shape.",
          "Want to make it harder? Put the clay next to the picture and copy the flower without putting it on top.",
        ],
        sq: [
          "Merr nj\u00EB figur\u00EB modelimi.",
          "Shiko mir\u00EB lulen n\u00EB figur\u00EB.",
          "B\u00EBj me plastelin\u00EB toptha ose shkopinj.",
          "Vendos plastelin\u00EBn mbi lule dhe kopjo form\u00EBn.",
          "D\u00EBshiron ta b\u00EBsh m\u00EB t\u00EB v\u00EBshtir\u00EB? Vendos plastelin\u00EBn pran\u00EB figur\u00EBs dhe kopjo lulen pa e vendosur sip\u00EBr.",
        ],
        bs: [
          "Uzmi sliku za modeliranje.",
          "Dobro pogledaj cvijet na slici.",
          "Napravi od gline kuglice ili valjke.",
          "Stavi glinu na cvijet i kopiraj isti oblik.",
          "\u017Deli\u0161 li da bude te\u017Ee? Stavi glinu pored slike i kopiraj cvijet bez stavljanja na sliku.",
        ],
        ru: [
          "\u0412\u043E\u0437\u044C\u043C\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u0434\u043B\u044F \u043B\u0435\u043F\u043A\u0438.",
          "\u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u0446\u0432\u0435\u0442\u043E\u043A \u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0435.",
          "\u0421\u0434\u0435\u043B\u0430\u0439 \u0438\u0437 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D\u0430 \u0448\u0430\u0440\u0438\u043A\u0438 \u0438\u043B\u0438 \u043A\u043E\u043B\u0431\u0430\u0441\u043A\u0438.",
          "\u041F\u043E\u043B\u043E\u0436\u0438 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D \u043D\u0430 \u0446\u0432\u0435\u0442\u043E\u043A \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438 \u0444\u043E\u0440\u043C\u0443.",
          "\u0425\u043E\u0447\u0435\u0448\u044C \u0441\u043B\u043E\u0436\u043D\u0435\u0435? \u041F\u043E\u043B\u043E\u0436\u0438 \u043F\u043B\u0430\u0441\u0442\u0438\u043B\u0438\u043D \u0440\u044F\u0434\u043E\u043C \u0441 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u043E\u0439 \u0438 \u0441\u043B\u0435\u043F\u0438 \u0446\u0432\u0435\u0442\u043E\u043A, \u043D\u0435 \u043D\u0430\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u044F \u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443.",
        ],
      },
    },

    // ── 10. Schrijf het woord ──
    {
      id: "schrijf-woord",
      title: "\u270F\uFE0F Schrijf het woord",
      steps: {
        nl: [
          "Neem een woordkaart.",
          "Hang de woordkaart op het krijtbord.",
          "Kijk goed naar het woord.",
          "Neem een krijtje.",
          "Schrijf het woord na.",
        ],
        en: [
          "Take a word card.",
          "Hang the word card on the chalkboard.",
          "Look carefully at the word.",
          "Take a piece of chalk.",
          "Copy the word.",
        ],
        sq: [
          "Merr nj\u00EB kart\u00EB fjal\u00EBsh.",
          "Var kart\u00EBn e fjal\u00EBs n\u00EB d\u00EBrras\u00EBn e zez\u00EB.",
          "Shiko mir\u00EB fjal\u00EBn.",
          "Merr nj\u00EB shkum\u00EBs.",
          "Kopjo fjal\u00EBn.",
        ],
        bs: [
          "Uzmi karticu sa rije\u010Dju.",
          "Oka\u010Di karticu na tablu.",
          "Dobro pogledaj rije\u010D.",
          "Uzmi kredu.",
          "Prepi\u0161i rije\u010D.",
        ],
        ru: [
          "\u0412\u043E\u0437\u044C\u043C\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0441\u043E \u0441\u043B\u043E\u0432\u043E\u043C.",
          "\u041F\u043E\u0432\u0435\u0441\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u043D\u0430 \u0434\u043E\u0441\u043A\u0443.",
          "\u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438 \u043D\u0430 \u0441\u043B\u043E\u0432\u043E.",
          "\u0412\u043E\u0437\u044C\u043C\u0438 \u043C\u0435\u043B\u043E\u043A.",
          "\u041F\u0435\u0440\u0435\u043F\u0438\u0448\u0438 \u0441\u043B\u043E\u0432\u043E.",
        ],
      },
    },
  ],
};
