const matemaatilisedArvutused = require('./main');

test('testib arvutusi', () => {
	expect(matemaatilisedArvutused(10, 5)).toStrictEqual({
		summa: 15,
		vahe: 5,
		jagatis: 2,
		korrutis: 100,
	});
});
