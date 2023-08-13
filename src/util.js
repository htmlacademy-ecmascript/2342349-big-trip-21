/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 * @returns {string}
 */
function html(strings, ...values) {
  return strings.reduce((result, string, index) =>
    `${result}${string}${Array.isArray(values[index])
      ? values[index].join('')
      : values[index] ?? ''}`
  , '');
}

export {html};
