import dayjs from 'dayjs';

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

function formatDateToUppercaseMonthDay(date) {
  return dayjs(date).format('MMM DD').toUpperCase();
}

function formatDateToYearMonthDay(date) {
  return dayjs(date).format('YYYY-MM-DD');
}

function formatDateToHourMinute(date) {
  return dayjs(date).format('HH:mm');
}

function formatDateToYearMonthDayTHourMinute(date) {
  return dayjs(date).format('YYYY-MM-DDTHH:mm');
}

function getDifferenceBetweenDates(date1, date2) {
  const totalMinutes = dayjs(date2).diff(dayjs(date1), 'minute');
  const days = Math.floor(totalMinutes / (24 * 60));
  const hours = Math.floor((totalMinutes - days * 24 * 60) / 60);
  const minutes = totalMinutes % 60;

  if (days) {
    return `${String(days).padStart(2, '0')}D ${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`;
  }
  if (hours) {
    return `${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`;
  }
  return `${String(minutes).padStart(2, '0')}M`;
}

export {html, formatDateToUppercaseMonthDay, formatDateToYearMonthDay, formatDateToHourMinute,
  formatDateToYearMonthDayTHourMinute, getDifferenceBetweenDates};
