import { atom } from 'jotai'

const locale = navigator.language;

let lang;

if (locale === "en") {
  lang = "en";
} else if (locale === "fr") {
  lang = "fr";
} else {
  lang = "en";
}

const localisationAtom = atom(lang)

export { localisationAtom }
