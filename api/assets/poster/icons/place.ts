import { TextColors, Place } from '../../../_lib/types';
const placeIcon = (color: TextColors = 'white', place: Place = 'twitter') => {
  return place == 'discord'
    ? `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0638 23.3989L19.8125 21.9093C22.2554 21.2538 23.2088 19.5855 23.2088 19.5855C20.1104 22.5051 11.6495 22.6243 8.37244 19.5855C8.37244 19.5855 9.20661 21.1347 11.7091 21.9093L10.3387 23.3989C6.16784 23.3393 4.55908 20.5388 4.55908 20.5388C4.55908 14.3421 7.29993 9.39668 7.29993 9.39668C10.1004 7.43042 12.6625 7.43042 12.6625 7.43042L12.8412 7.66875C9.38536 8.62209 7.89577 10.1713 7.89577 10.1713C11.9475 7.43042 20.2892 7.66875 23.5663 10.1713C23.6259 10.1117 21.6 8.50293 18.4421 7.66875L18.74 7.43042C18.74 7.43042 21.3021 7.43042 24.1025 9.39668C24.1025 9.39668 26.8434 14.3421 26.8434 20.5388C26.8434 20.5388 25.2346 23.3393 21.0638 23.3989ZM12.1262 18.751C13.2122 18.751 14.0925 17.8174 14.0925 16.6656C14.0925 15.5139 13.2122 14.5802 12.1262 14.5802C11.0403 14.5802 10.16 15.5139 10.16 16.6656C10.16 17.8174 11.0403 18.751 12.1262 18.751ZM21.0042 16.6656C21.0042 17.8174 20.1239 18.751 19.0379 18.751C17.952 18.751 17.0717 17.8174 17.0717 16.6656C17.0717 15.5139 17.952 14.5802 19.0379 14.5802C20.1239 14.5802 21.0042 15.5139 21.0042 16.6656Z" fill="${color}"/>
  </svg>
  `
    : `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 3.97798C21.8529 4.28865 21.579 4.68108 21.1784 5.15523C20.7778 5.62939 20.2832 6.04634 19.6945 6.40606C19.7109 6.53689 19.7232 6.6595 19.7313 6.77396C19.7948 8.53616 19.3727 10.3645 18.7871 11.8877C17.6519 14.7197 15.9125 16.9989 13.4281 18.5465C10.8373 20.0326 7.82006 20.3487 5.04013 20.0794C3.19458 19.8675 1.3756 19.2648 0 18.1296C2.51594 18.4303 4.86392 17.5745 6.72017 16.192C4.65819 16.2442 3.16001 14.7526 2.45263 13.0281C2.7715 13.1117 3.10508 13.1016 3.40916 13.0772C3.78345 13.042 4.13875 13.0069 4.48831 12.9301C3.1735 12.5058 2.02305 11.726 1.42254 10.551C1.0703 9.80647 0.911258 9.09749 0.9075 8.29458C1.52359 8.61895 2.26468 8.93509 2.94318 8.90772C1.91849 8.03969 1.09701 6.93034 0.944295 5.65799C0.84788 4.59711 1.11335 3.62871 1.49615 2.72711C3.02894 4.41167 4.74876 5.79798 6.73248 6.65131C8.08911 7.20684 9.44189 7.50393 10.8406 7.50971C10.6792 6.26038 10.8047 5.05213 11.3925 4.02698C12.0842 2.92482 13.0934 2.28535 14.2253 1.96677C15.8448 1.55149 17.4244 2.1381 18.4193 3.26666C19.4921 3.15078 20.5199 2.67481 21.3379 2.18751C20.9903 3.24002 20.3135 4.28653 19.3267 4.78728C20.2663 4.61334 21.1628 4.3352 22 3.97798V3.97798Z" fill="${color}"/>
  </svg>
  `;
};
export default placeIcon;
