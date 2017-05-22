import * as strings from './strings';

const bigLettersCount = (str) => {
  
    let result= 0;
    for(let i = 0; i<strings.length(str); i++){
 if (strings.toUpperCase(str[i]) === str[i])
 result = result+1;
 }
    return result;
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

}
if (firstCount>secondCount)
{return 1;}
if (firstCount<secondCount)
{return -1;}
if (firstCount===secondCount)
{return 0;}

}

};

export const greaterThan = (first, second) =>
  compare(first, second) === 1;

export const lessThan = (first, second) =>
  compare(first, second) === -1;

export const isEqual = (first, second) =>
  compare(first, second) === 0;
