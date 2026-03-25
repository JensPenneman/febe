/**
 * Central data file — edit this to add children, languages, and tasks.
 *
 * INSTRUCTIONS FOR FEBE:
 * 1. Add a child to the `children` array with a unique id, name, symbol (path to PNG), and languageCode.
 * 2. Add tasks to the `tasks` array. Each task has an id, a title, and a `translations` object
 *    keyed by language code. Every translation has a `word` (the word/sentence in that language)
 *    and a `dutch` field (the Dutch equivalent).
 * 3. The languageCode should be a BCP-47 code (e.g. "nl" for Dutch, "ar" for Arabic).
 *    This is used by the browser's speech synthesis to pronounce the words correctly.
 *
 * LANGUAGE CODES USED:
 *   nl = Nederlands, sq = Albanees, bs = Bosnisch, ru = Russisch, en = Engels
 */

const APP_DATA = {
  /** The base URL where this site is hosted — used for QR code generation */
  baseUrl: "https://jenspenneman.github.io/febe",

  children: [
    // --- Non-Dutch speakers (need translations) ---
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
    { id: "zoe", name: "Zoë", symbol: "symbols/zoe-vos.png", languageCode: "nl" },
    { id: "amelie", name: "Amelie", symbol: "symbols/amelie-watermeloen.png", languageCode: "nl" },
    { id: "ylana", name: "Ylana", symbol: "symbols/ylana-lieveheersbeestje.png", languageCode: "nl" },
    { id: "cisse", name: "Cisse", symbol: "symbols/cisse-basketbal.png", languageCode: "nl" },
    { id: "adriana", name: "Adriana", symbol: "symbols/adriana-vlieger.png", languageCode: "nl" },
  ],

  tasks: [
    {
      id: "colors",
      title: "Kleuren",
      translations: {
        sq: { word: "Ngjyrat", dutch: "Kleuren" },
        bs: { word: "Boje", dutch: "Kleuren" },
        ru: { word: "\u{426}\u{432}\u{435}\u{442}\u{430}", dutch: "Kleuren" },
        en: { word: "Colors", dutch: "Kleuren" },
        nl: { word: "Kleuren", dutch: "Kleuren" },
      },
    },
    {
      id: "animals",
      title: "Dieren",
      translations: {
        sq: { word: "Kafshët", dutch: "Dieren" },
        bs: { word: "Životinje", dutch: "Dieren" },
        ru: { word: "\u{416}\u{438}\u{432}\u{43E}\u{442}\u{43D}\u{44B}\u{435}", dutch: "Dieren" },
        en: { word: "Animals", dutch: "Dieren" },
        nl: { word: "Dieren", dutch: "Dieren" },
      },
    },
    {
      id: "greetings",
      title: "Begroetingen",
      translations: {
        sq: { word: "Përshëndetje", dutch: "Hallo" },
        bs: { word: "Zdravo", dutch: "Hallo" },
        ru: { word: "\u{41F}\u{440}\u{438}\u{432}\u{435}\u{442}", dutch: "Hallo" },
        en: { word: "Hello", dutch: "Hallo" },
        nl: { word: "Hallo", dutch: "Hallo" },
      },
    },
    {
      id: "numbers",
      title: "Nummers",
      translations: {
        sq: { word: "Numrat", dutch: "Nummers" },
        bs: { word: "Brojevi", dutch: "Nummers" },
        ru: { word: "\u{427}\u{438}\u{441}\u{43B}\u{430}", dutch: "Nummers" },
        en: { word: "Numbers", dutch: "Nummers" },
        nl: { word: "Nummers", dutch: "Nummers" },
      },
    },
  ],
};
