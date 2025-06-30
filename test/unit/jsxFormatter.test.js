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
const jsxFormatter_1 = require("../../src/jsxFormatter");
suite('JSX Formatter Unit Tests', () => {
    test('Should add empty lines between sibling JSX elements', () => {
        const input = `<div>
    <Component1 />
    <Component2 />
    <Component3 />
</div>`;
        const expected = `<div>
    <Component1 />

    <Component2 />

    <Component3 />
</div>`;
        const result = (0, jsxFormatter_1.formatJsxSiblings)(input);
        assert.strictEqual(result, expected);
    });
    test('Should not modify already formatted JSX with empty lines', () => {
        const input = `<div>
    <Component1 />

    <Component2 />

    <Component3 />
</div>`;
        const result = (0, jsxFormatter_1.formatJsxSiblings)(input);
        assert.strictEqual(result, input);
    });
    test('Should handle JSX fragments', () => {
        const input = `<>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
</>`;
        const expected = `<>
    <div>First</div>

    <div>Second</div>

    <div>Third</div>
</>`;
        const result = (0, jsxFormatter_1.formatJsxSiblings)(input);
        assert.strictEqual(result, expected);
    });
    test('Should handle nested JSX elements', () => {
        const input = `<div>
    <section>
        <Component1 />
        <Component2 />
    </section>
    <aside>
        <Component3 />
        <Component4 />
    </aside>
</div>`;
        const expected = `<div>
    <section>
        <Component1 />

        <Component2 />
    </section>

    <aside>
        <Component3 />

        <Component4 />
    </aside>
</div>`;
        const result = (0, jsxFormatter_1.formatJsxSiblings)(input);
        assert.strictEqual(result, expected);
    });
    test('Should handle mixed JSX elements and expressions', () => {
        const input = `<div>
    <Component1 />
    {condition && <Component2 />}
    <Component3 />
</div>`;
        const expected = `<div>
    <Component1 />

    {condition && <Component2 />}

    <Component3 />
</div>`;
        const result = (0, jsxFormatter_1.formatJsxSiblings)(input);
        assert.strictEqual(result, expected);
    });
    test('Should handle self-closing and regular JSX elements', () => {
        const input = `<div>
    <Component1 />
    <Component2>
        <span>Content</span>
    </Component2>
    <Component3 />
</div>`;
        const expected = `<div>
    <Component1 />

    <Component2>
        <span>Content</span>
    </Component2>

    <Component3 />
</div>`;
        const result = (0, jsxFormatter_1.formatJsxSiblings)(input);
        assert.strictEqual(result, expected);
    });
    test('Should ignore whitespace-only text nodes', () => {
        const input = `<div>
    <Component1 />
    
    <Component2 />
    
    <Component3 />
</div>`;
        const expected = `<div>
    <Component1 />

    <Component2 />

    <Component3 />
</div>`;
        const result = (0, jsxFormatter_1.formatJsxSiblings)(input);
        assert.strictEqual(result, expected);
    });
    test('Should handle single JSX element (no siblings)', () => {
        const input = `<div>
    <Component1 />
</div>`;
        const result = (0, jsxFormatter_1.formatJsxSiblings)(input);
        assert.strictEqual(result, input);
    });
    test('Should handle empty JSX container', () => {
        const input = `<div></div>`;
        const result = (0, jsxFormatter_1.formatJsxSiblings)(input);
        assert.strictEqual(result, input);
    });
    test('Should handle complex React component with props', () => {
        const input = `<div className="container">
    <Header title="My App" />
    <Main>
        <Section id="content">
            <Article>Content here</Article>
        </Section>
    </Main>
    <Footer copyright="2024" />
</div>`;
        const expected = `<div className="container">
    <Header title="My App" />

    <Main>
        <Section id="content">
            <Article>Content here</Article>
        </Section>
    </Main>

    <Footer copyright="2024" />
</div>`;
        const result = (0, jsxFormatter_1.formatJsxSiblings)(input);
        assert.strictEqual(result, expected);
    });
    test('Should handle TypeScript JSX syntax', () => {
        const input = `<div>
    <Component1<T> />
    <Component2<string> />
</div>`;
        const expected = `<div>
    <Component1<T> />

    <Component2<string> />
</div>`;
        const result = (0, jsxFormatter_1.formatJsxSiblings)(input);
        assert.strictEqual(result, expected);
    });
});
//# sourceMappingURL=jsxFormatter.test.js.map