/**
 * Creates a route mapping object based on the provided translations and language.
 *
 * @param {Function} t - The translation function.
 * @param {Object} i18n - The i18n object containing language information.
 * @returns {Object} - The route mapping object.
 */
export const createRouteMapping =  (t, i18n) => {
  return {
    [t('nav.home')]: `/${i18n.language}`,
    [t('nav.about')]: `/${i18n.language}/about`,
    [t('nav.instructions')]: `/${i18n.language}/instructions`,
    [t('nav.contact')]: `/${i18n.language}/contact`,
  }
};

/**
 * Array of language objects.
 * @typedef {Object} Language
 * @property {string} code - The language code.
 */
export const languages = [
  { code: 'fi' },
  { code: 'en' },
  { code: 'sv' },
];