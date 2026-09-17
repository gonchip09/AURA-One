const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, getFinishById, getSpecById } = require('../script.js');

test('accepts realistic email addresses', () => {
    assert.equal(isValidEmail('audio@aura.example'), true);
    assert.equal(isValidEmail('audio+uy@aura.example'), true);
});

test('rejects empty and malformed email addresses', () => {
    assert.equal(isValidEmail(''), false);
    assert.equal(isValidEmail('audio@'), false);
    assert.equal(isValidEmail('audio aura@example.com'), false);
});

test('returns supported finishes and rejects unknown ids', () => {
    assert.equal(getFinishById('silver').name, 'Silver Mist');
    assert.equal(getFinishById('graphite').name, 'Graphite');
    assert.equal(getFinishById('unknown'), null);
});

test('returns exact specification data', () => {
    assert.equal(getSpecById('bluetooth').value, '5.4');
    assert.equal(getSpecById('drivers').value, '40 mm');
    assert.equal(getSpecById('unknown'), null);
});

test('maps each specification to its visual asset', () => {
    assert.equal(getSpecById('frequency').image, 'assets/frecuencia.png');
    assert.equal(getSpecById('bluetooth').image, 'assets/aura-travel.jpg');
    assert.equal(getSpecById('weight').image, 'assets/peso.png');
    assert.equal(getSpecById('drivers').image, 'assets/drivers.png');
});
