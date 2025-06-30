import * as assert from 'assert';
import { formatJsxSiblings } from '../../src/jsxFormatter';

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

        const result = formatJsxSiblings(input);
        assert.strictEqual(result, expected);
    });

    test('Should not modify already formatted JSX with empty lines', () => {
        const input = `<div>
    <Component1 />

    <Component2 />

    <Component3 />
</div>`;

        const result = formatJsxSiblings(input);
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

        const result = formatJsxSiblings(input);
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

        const result = formatJsxSiblings(input);
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

        const result = formatJsxSiblings(input);
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

        const result = formatJsxSiblings(input);
        assert.strictEqual(result, expected);
    });

    test('Should preserve existing whitespace-only text nodes', () => {
        const input = `<div>
    <Component1 />
    
    <Component2 />
    
    <Component3 />
</div>`;

        // The formatter should preserve existing whitespace patterns that already provide separation
        const result = formatJsxSiblings(input);
        assert.strictEqual(result, input);
    });

    test('Should handle single JSX element (no siblings)', () => {
        const input = `<div>
    <Component1 />
</div>`;

        const result = formatJsxSiblings(input);
        assert.strictEqual(result, input);
    });

    test('Should handle empty JSX container', () => {
        const input = `<div></div>`;

        const result = formatJsxSiblings(input);
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

        const result = formatJsxSiblings(input);
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

        const result = formatJsxSiblings(input);
        assert.strictEqual(result, expected);
    });
}); 