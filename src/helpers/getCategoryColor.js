const categoryList = {
'Food':           '#FED057',
'Main':           '#FFD8D0',
'House':          '#C5BAFF',
'Auto':           '#6E78E8',
'Children':       '#81E1FF',
'Development':    '#FD9498',
'Education':      '#C5BAFF',
'Other expenses': '#FD9498',
}
  
export const getCategoryColor = (value) => categoryList[value]