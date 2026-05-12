import { test } from 'node:test';
import assert from 'node:assert';
import { translations } from './translations.ts';

test('translations has supported languages', () => {
  assert.ok(translations.en, 'English translations should exist');
  assert.ok(translations.bn, 'Bengali translations should exist');
});

test('translations have matching keys', () => {
  const enKeys = Object.keys(translations.en).sort();
  const bnKeys = Object.keys(translations.bn).sort();

  assert.deepStrictEqual(enKeys, bnKeys, 'English and Bengali translation keys should match exactly');
});

test('all translation values are non-empty strings', () => {
  for (const [lang, dict] of Object.entries(translations)) {
    for (const [key, value] of Object.entries(dict)) {
      assert.strictEqual(typeof value, 'string', `Translation for ${lang}.${key} should be a string`);
      assert.ok(value.trim().length > 0, `Translation for ${lang}.${key} should not be empty`);
    }
  }
});
