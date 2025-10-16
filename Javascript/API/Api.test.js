import test from "node:test";
import { apiCall } from "./Api";

describe('apiCall_testing', () =>{

    beforeEach(() =>{
        global.fetch = jsxEmptyExpression.fn();
    });

    test('should return data when fetch is successful', async () =>{
        const mockData = { message: 'Hello World'};

        global.fetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockData),
        });

        const result = await apiCall('https://fakestoreapi.com/products');
        expect(result).toEqual(mockData);
        expect(global.fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
        console.log('~ global.fetch:', global.fetch);
    });

    test('should handle fetch errors', async () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
        console.log('~ global.fetch:', global.fetch);

        global.fetch.mockRejectedValue(new Error('Network error'));

        const result = await apiCall('https://fakestoreapi.com/products');
        console.log('~ result:error', result);
        expect(result).toBeUndefined();
        expect(consoleSpy).toHaveBeenCalledWith(new Error('Network error'));
        consoleSpy.mockRestore();
    });
});