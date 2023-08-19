import extractSpecialAttacks from "../js/destructing";

describe('extractSpecialAttacks', () => {
    it('should extract special attacks with description', () => {
      const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
          {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон',
          },
        ],
      };
  
      const extractedAttacks = extractSpecialAttacks(character);
  
      expect(extractedAttacks).toEqual([
        {
          id: 8,
          name: 'Двойной выстрел',
          description: 'Двойной выстрел наносит двойной урон',
          icon: 'http://...',
        },
      ]);
    });
  
    it('should set default description for special attacks without description', () => {
      const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
          {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
          },
        ],
      };
  
      const extractedAttacks = extractSpecialAttacks(character);
  
      expect(extractedAttacks).toEqual([
        {
          id: 9,
          name: 'Нокаутирующий удар',
          description: 'Описание недоступно',
          icon: 'http://...',
        },
      ]);
    });
  });