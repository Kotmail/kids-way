export const toggleExpandedAttr = elem => {
  const expandedValue = elem.getAttribute('aria-expanded') === 'true' || false;

  elem.setAttribute('aria-expanded', !expandedValue);
}