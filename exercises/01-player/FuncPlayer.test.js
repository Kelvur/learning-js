import Player from './FuncPlayer';


describe('Class Player', () => {

    test('get function should return the correct stat', () => {
        const player = new Player('Ekaterina', 2, 3, 4);
        expect(player.get('lvl')).toBe(1);
        expect(player.get('exp')).toBe(0);
        expect(player.get('name')).toBe('Ekaterina');

        expect(player.get('str')).toBe(2);
        expect(player.get('dex')).toBe(3);
        expect(player.get('int')).toBe(4);
    });

    test('add function should level up the character if the experience overpasses the experience needed for leveling up', () => {
        const player = new Player('Ekaterina', 2, 3, 4);

        player.add('exp', 322);
        
        expect(player.get('lvl')).toBe(4);
        expect(player.get('exp')).toBe(22);
        expect(player.get('str')).toBe(5);
        expect(player.get('dex')).toBe(6);
        expect(player.get('int')).toBe(7);
    });
});