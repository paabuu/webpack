const compiler = require('../compiler');

test('all xixi will be replaced by haha', async() => {
    const stats = await compiler('example.txt');
    const output = stats.toJson().modules[0].source;

    expect(output).toBe(`export default "haha"`);
})