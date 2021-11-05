function scuberGreetingForFeet(somevalue) {
  let result
  if (somevalue < 401) {
    result = 'This one is on me!'
  } else if (somevalue > 2000 && somevalue <= 2500) {
    result = 'I will gladly take your thirty bucks.'
  } else if (somevalue > 2500) {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(somecity) {
  let msg = (somecity === 'NYC') ? "Ok, sounds good." : "No go."
  return msg
}

function switchOnCharmFromTip(somegenerosity) {
  switch (somegenerosity) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
  }
}
