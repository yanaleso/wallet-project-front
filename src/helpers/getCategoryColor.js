const categoryList = {
'Food':           '#d9de3f',
'Main':           '#db9826',
'House':          '#9f56cc',
'Auto':           '#4A56E2',
'Children':       '#7ec8de',
'Development':    '#24CCA7',
'Education':      '#13ae8a',
'Other expenses': '#FD9498',
}
  
export const getCategoryColor = (value) => categoryList[value]