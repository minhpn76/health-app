import {format} from 'date-fns';

export const MM_DD = 'MM.dd';

export const formatDate = (dateString?: string, pattern?: string) => {
  if (!dateString) return '';
  const dateObject = new Date(dateString);
  return format(dateObject, pattern || 'dd MMM yy');
};

export const formatTime = (dateString?: string, pattern?: string) => {
  if (!dateString) return '';
  const dateObject = new Date(dateString);
  return format(dateObject, pattern || 'HH:mm');
};
