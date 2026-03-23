/**
 * Central data file — edit this to add children, languages, and tasks.
 *
 * INSTRUCTIONS FOR FEBE:
 * 1. Add a child to the `children` array with a unique id, name, icon (emoji), and languageCode.
 * 2. Add tasks to the `tasks` array. Each task has an id, a title, and a `translations` object
 *    keyed by language code. Every translation has a `word` (the word/sentence in that language)
 *    and a `dutch` field (the Dutch equivalent).
 * 3. The languageCode should be a BCP-47 code (e.g. "nl" for Dutch, "ar" for Arabic, "tr" for Turkish).
 *    This is used by the browser's speech synthesis to pronounce the words correctly.
 *
 * SUPPORTED LANGUAGE CODES (common ones for Belgium context):
 *   nl = Dutch, fr = French, ar = Arabic, tr = Turkish, pl = Polish,
 *   ro = Romanian, bg = Bulgarian, uk = Ukrainian, en = English, es = Spanish
 */

const APP_DATA = {
  /** The base URL where this site is hosted — used for QR code generation */
  baseUrl: "https://jenspenneman.github.io/febe",

  children: [
    { id: "amir", name: "Amir", icon: "\u{1F981}", languageCode: "ar" },
    { id: "elif", name: "Elif", icon: "\u{1F98B}", languageCode: "tr" },
    { id: "olena", name: "Olena", icon: "\u{1F33B}", languageCode: "uk" },
    { id: "maria", name: "Maria", icon: "\u{1F338}", languageCode: "ro" },
  ],

  tasks: [
    {
      id: "colors",
      title: "Kleuren — Colors",
      translations: {
        ar: { word: "\u{623}\u{644}\u{623}\u{644}\u{648}\u{627}\u{646}", dutch: "Kleuren" },
        tr: { word: "Renkler", dutch: "Kleuren" },
        uk: { word: "\u{41A}\u{43E}\u{43B}\u{44C}\u{43E}\u{440}\u{438}", dutch: "Kleuren" },
        ro: { word: "Culori", dutch: "Kleuren" },
      },
    },
    {
      id: "animals",
      title: "Dieren — Animals",
      translations: {
        ar: { word: "\u{62D}\u{64A}\u{648}\u{627}\u{646}\u{627}\u{62A}", dutch: "Dieren" },
        tr: { word: "Hayvanlar", dutch: "Dieren" },
        uk: { word: "\u{422}\u{432}\u{430}\u{440}\u{438}\u{43D}\u{438}", dutch: "Dieren" },
        ro: { word: "Animale", dutch: "Dieren" },
      },
    },
    {
      id: "greetings",
      title: "Begroetingen — Greetings",
      translations: {
        ar: { word: "\u{645}\u{631}\u{62D}\u{628}\u{627}\u{64B}", dutch: "Hallo" },
        tr: { word: "Merhaba", dutch: "Hallo" },
        uk: { word: "\u{41F}\u{440}\u{438}\u{432}\u{456}\u{442}", dutch: "Hallo" },
        ro: { word: "Bun\u{103} ziua", dutch: "Hallo" },
      },
    },
    {
      id: "numbers",
      title: "Nummers — Numbers",
      translations: {
        ar: { word: "\u{623}\u{631}\u{642}\u{627}\u{645}", dutch: "Nummers" },
        tr: { word: "Say\u{131}lar", dutch: "Nummers" },
        uk: { word: "\u{427}\u{438}\u{441}\u{43B}\u{430}", dutch: "Nummers" },
        ro: { word: "Numere", dutch: "Nummers" },
      },
    },
  ],
};
