const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break; 
    case 'wednesday':
      return 8;
      break; 
    case 'thursday':
      return 8;
      break; 
    case 'friday':
      return 6;
      break; 
    case 'saturday':
      return 9;
      break; 
    case 'sunday':
      return 6;
      break;
    default:
      return 'Input is not  valid day'
      break;
  }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
getActualSleepHours();

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got ' + (actualSleepHours) + ' hours of sleep. The perfect amount!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed.');
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed. Get some rest!');
  }
};

calculateSleepDebt()
