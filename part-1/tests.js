const { weekday, snippet, numProps, filterBetween } = require('./functions')

describe('Weekday', () => {
  it('should return Mon for new Date(2017, 5, 19)', () => {
    expect(weekday(new Date(2017, 5, 19))).toEqual('Mon')
  })
  it('should return an output of type string', () => {
    expect(typeof weekday(new Date(2017, 5, 19))).toEqual('string')
  })
  it('should return a string with 3 letters', () => {
    expect(weekday(new Date(2017, 5, 19)).length).toEqual(3)
  })
  it('should return an error for invalid input', () => {
    expect(weekday('Thomas')).toEqual('Error: invalid input')
  })
})

describe('Snippet', () => {
  it('should return Thomas is... for Thomas is awesome', () => {
    expect(snippet('Thomas is awesome', 9)).toEqual('Thomas is...')
  })
  it('should return Thomas is... for Thomas is awesome', () => {
    expect(snippet('Thomas is awesome', 50)).toEqual('Thomas is awesome')
  })
  it('should return a string as the output', () => {
    expect(typeof snippet('Thomas is awesome', 50)).toEqual('string')
  })
  it('should return a string with 6 letters', () => {
    expect(snippet('Just some text', 6).length).toEqual(9)
  })
  it('should return an error for invalid input', () => {
    expect(snippet(3434, {})).toEqual('Error: invalid input')
  })
})

describe('NumProps', () => {
  const sampleObject = {
    make: 'ford',
    model: 'pinto',
    color: 'pink',
    year: 'classic'
  }
  it('should return 4 for sampleObject', () => {
    expect(numProps(sampleObject)).toEqual(4)
  })
  it('should return 0 for an empty object', () => {
    expect(numProps({})).toEqual(0)
  })
  it('should return object for type of sampleObject', () => {
    expect(typeof numProps(sampleObject)).toEqual('number')
  })
it('should return an error for invalid input', () => {
    expect(numProps('')).toEqual('Error: invalid input')
  })
})

describe('FilterBetween', () => {
  it('should return 5,6,7,10,11 for [1,2,4,5,6,7, 10, 11, 15]', () => {
    expect(filterBetween([1,2,4,5,6,7,10,11,15], 5, 11)).toEqual([5,6,7,10,11])
  })
  it('should return Error: invalid input for invalid inputs', () => {
    expect(filterBetween('a', 'b', 'c')).toEqual('Error: invalid input')
  })
  it('should return object as the output', () => {
    expect(typeof filterBetween([1,2,4,5,6,7,10,11,15], 5, 11)).toEqual('object')
  })
})
