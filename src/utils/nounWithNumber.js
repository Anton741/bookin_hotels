export function nounDays(number){
    if (number > 20) {
      number = String(number);
      if (['2', '3', '4'].includes(number[number.length - 1])) {
        return 'дня'}
      else if ('1' === number[number.length - 1]) {return `${number} - день`;} 
      else {return `${number} - дней`;}
    } else {
      if (['2', '3', '4'].includes(number)) {return `${number} - дня`}
      else if (1 === number) {return`${number} - день`} 
      else {return `${number} - дней`}
    }
  };

export function nounHotels(number){
  if (number > 20) {
    if ([2, 3, 4].includes(String(number)[number - 1])) {
      return ` отеля`;
    } else {
      return `отелей`;
    }
  } else {
    if ([2, 3, 4].includes(number)) {
      return ` отеля`;
    } else {
      return ` отелей`;
    }
  }
};
