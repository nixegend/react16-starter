export const getPageTitle = title => (title ? `Page: ${title}` : 'Page');

export const translate = (translations, locale) => {
  if (translations && typeof translations === 'object') {
    return locale ? translations[locale] || '' : translations.en || '';
  }

  return translations || '';
};

export const isAbsoluteURL = url => {
  const regExp = new RegExp('^(?:[a-z]+:)?//', 'i');

  return regExp.test(url);
};

export const truncate = (str, length) => str && str.length > length ? `${str.substr(0, length)}...` : str;

export const scrollToElement = (element, indentTop) => {
  window.scrollTo(
    0,
    window.pageYOffset + element.getBoundingClientRect().top - (indentTop || 85)
  );
};

export const sortList = (arr, getValue) => arr.sort((a, b) => (getValue(a) < getValue(b) ? -1 : 1));

export const stopPropagation = event => event.stopPropagation();

export const noop = () => undefined;
