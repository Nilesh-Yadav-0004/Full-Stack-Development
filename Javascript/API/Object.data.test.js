import { filter } from './Object.data';

import data from './Data.json';

test('testing the filter object is similar or not.', () => {
 expect(filter(data, 2)).toEqual(data[1]);
});