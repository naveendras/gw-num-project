 import wordsToNumbers from 'words-to-numbers';


export const numeralToNumber = (str: string ): number => {
  const numericValue = wordsToNumbers(str);

// console.log('Input:', str);
// console.log('Numeric Value:', numericValue);

  if (typeof numericValue === 'number') {
    return numericValue;
  }

  if (numericValue === null) {
    return NaN; 
  }

  //the string passed cannot be converted to a number then NaN should be returned.
  const notNumber = parseFloat(numericValue as string);
 // console.log('Number:', notNumber);

  return isNaN(notNumber) ? NaN : notNumber;
};

