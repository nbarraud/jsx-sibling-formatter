"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("assert"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const jsxFormatter_1 = require("../src/jsxFormatter");
suite('Integration Tests with Fixtures', () => {
    test('Should format basic JSX fixture', () => {
        const fixturePath = path.join(__dirname, 'fixtures', 'basic-jsx.tsx');
        const content = fs.readFileSync(fixturePath, 'utf8');
        const result = (0, jsxFormatter_1.formatJsxSiblings)(content);
        // The fixture should have been formatted (empty lines added)
        assert.notStrictEqual(result, content);
        // Should contain empty lines between siblings
        assert.ok(result.includes('<Header />\n\n            <Main />'));
        assert.ok(result.includes('<Main />\n\n            <Footer />'));
    });
    test('Should format complex JSX fixture', () => {
        const fixturePath = path.join(__dirname, 'fixtures', 'complex-jsx.tsx');
        const content = fs.readFileSync(fixturePath, 'utf8');
        const result = (0, jsxFormatter_1.formatJsxSiblings)(content);
        // The fixture should have been formatted
        assert.notStrictEqual(result, content);
        // Should contain empty lines between main siblings
        assert.ok(result.includes('</header>\n            {isVisible'));
        assert.ok(result.includes('})\n            <footer>'));
    });
    test('Should not modify already formatted fixture', () => {
        const fixturePath = path.join(__dirname, 'fixtures', 'already-formatted.tsx');
        const content = fs.readFileSync(fixturePath, 'utf8');
        const result = (0, jsxFormatter_1.formatJsxSiblings)(content);
        // The already formatted fixture should remain unchanged
        assert.strictEqual(result, content);
    });
    test('Should handle edge cases', () => {
        // Test empty string
        assert.strictEqual((0, jsxFormatter_1.formatJsxSiblings)(''), '');
        // Test non-JSX content
        const jsContent = 'const x = 5; console.log(x);';
        assert.strictEqual((0, jsxFormatter_1.formatJsxSiblings)(jsContent), jsContent);
        // Test malformed JSX (should not crash)
        const malformedJsx = '<div><Component1 /></div><Component2>';
        const result = (0, jsxFormatter_1.formatJsxSiblings)(malformedJsx);
        assert.ok(typeof result === 'string');
    });
});
//# sourceMappingURL=integration-test.js.map