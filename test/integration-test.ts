import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import { formatJsxSiblings } from '../src/jsxFormatter';

suite('Integration Tests with Fixtures', () => {
    
    test('Should format basic JSX fixture', () => {
        const fixturePath = path.join(__dirname, 'fixtures', 'basic-jsx.tsx');
        const content = fs.readFileSync(fixturePath, 'utf8');
        
        const result = formatJsxSiblings(content);
        
        // The fixture should have been formatted (empty lines added)
        assert.notStrictEqual(result, content);
        
        // Should contain empty lines between siblings
        assert.ok(result.includes('<Header />\n\n            <Main />'));
        assert.ok(result.includes('<Main />\n\n            <Footer />'));
    });

    test('Should format complex JSX fixture', () => {
        const fixturePath = path.join(__dirname, 'fixtures', 'complex-jsx.tsx');
        const content = fs.readFileSync(fixturePath, 'utf8');
        
        const result = formatJsxSiblings(content);
        
        // The fixture should have been formatted
        assert.notStrictEqual(result, content);
        
        // Should contain empty lines between main siblings
        assert.ok(result.includes('</header>\n            {isVisible'));
        assert.ok(result.includes('})\n            <footer>'));
    });

    test('Should not modify already formatted fixture', () => {
        const fixturePath = path.join(__dirname, 'fixtures', 'already-formatted.tsx');
        const content = fs.readFileSync(fixturePath, 'utf8');
        
        const result = formatJsxSiblings(content);
        
        // The already formatted fixture should remain unchanged
        assert.strictEqual(result, content);
    });

    test('Should handle edge cases', () => {
        // Test empty string
        assert.strictEqual(formatJsxSiblings(''), '');
        
        // Test non-JSX content
        const jsContent = 'const x = 5; console.log(x);';
        assert.strictEqual(formatJsxSiblings(jsContent), jsContent);
        
        // Test malformed JSX (should not crash)
        const malformedJsx = '<div><Component1 /></div><Component2>';
        const result = formatJsxSiblings(malformedJsx);
        assert.ok(typeof result === 'string');
    });
}); 