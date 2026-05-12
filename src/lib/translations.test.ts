import test from 'node:test';
import assert from 'node:assert';
import { translations } from '../lib/translations.ts';

test('translations are loaded correctly', () => {
  assert.strictEqual(typeof translations.en.name, 'string');
  assert.strictEqual(typeof translations.bn.name, 'string');
});
