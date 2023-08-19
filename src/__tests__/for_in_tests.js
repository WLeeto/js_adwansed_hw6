import orderByProps from "../js/for_in";

describe('orderByProps', () => {
    it('should sort properties based on order and alphabetically', () => {
        const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
        const order = ['name', 'level'];
        const expected = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
    ];

        const result = orderByProps(obj, order);
        expect(result).toEqual(expected);
    });

    it('should handle different order and properties', () => {
        const obj = { apple: 'red', banana: 'yellow', orange: 'orange' };
        const order = ['banana', 'apple'];
        const expected = [
          { key: 'banana', value: 'yellow' },
          { key: 'apple', value: 'red' },
          { key: 'orange', value: 'orange' },
        ];
    
        const result = orderByProps(obj, order);
        expect(result).toEqual(expected);
      });
    
      it('should handle an empty order array', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const order = [];
        const expected = [
          { key: 'a', value: 1 },
          { key: 'b', value: 2 },
          { key: 'c', value: 3 },
        ];
    
        const result = orderByProps(obj, order);
        expect(result).toEqual(expected);
      });
});
