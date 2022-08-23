import { getDistanceFromLatLonInNmi } from '../../utils/helper'

describe('get distance function', () => {
  it('should return the correct distance between two airports', () => {
    const [lat1, lon1, lat2, lon2, distance] = [30.37109947, 48.22829819, 5.78287, 36.562, 1616.6718];
    const result = getDistanceFromLatLonInNmi(lat1, lon1, lat2, lon2);
    expect(Number(result.toFixed(4))).toEqual(distance);
  })
})