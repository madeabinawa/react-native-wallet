type FormatType = 'dmy' | 'long';

export const dateFormat = (date: string | undefined, format: FormatType) => {
  if (!date) {
    return '-';
  }

  const parseDate = new Date(date);

  const DATEFORMAT = {
    dmy: new Intl.DateTimeFormat('id-ID').format(parseDate),
    long: new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(parseDate),
  };

  return DATEFORMAT[format];
};

export default dateFormat;
