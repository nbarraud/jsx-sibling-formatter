import * as ts from 'typescript';

export function formatJsxSiblings(source: string): string
{
    const sourceFile = ts.createSourceFile(
        'input.tsx',
        source,
        ts.ScriptTarget.Latest,
        /*setParentNodes*/ true
    );

    const edits: Array<{ start: number; end: number; replacement: string }> = [];

    function visit(node: ts.Node): void
    {
        // Look for JSX containers (elements that can have children)
        if (ts.isJsxElement(node) || ts.isJsxFragment(node))
        {
            const children = ts.isJsxElement(node) 
                ? node.children 
                : node.children;

            // Find all non-whitespace JSX children
            const jsxChildren: Array<{ node: ts.Node; index: number }> = [];
            
            for (let i = 0; i < children.length; i++)
            {
                const child = children[i];
                
                // Skip whitespace-only text nodes
                if (ts.isJsxText(child) && child.text.trim() === "")
                {
                    continue;
                }

                // Include JSX elements and expressions
                if (ts.isJsxElement(child) || 
                    ts.isJsxSelfClosingElement(child) || 
                    ts.isJsxExpression(child))
                {
                    jsxChildren.push({ node: child, index: i });
                }
            }

            // Process adjacent JSX elements
            for (let i = 0; i < jsxChildren.length - 1; i++)
            {
                const current = jsxChildren[i];
                const next = jsxChildren[i + 1];

                const currentEnd = current.node.end;
                const nextStart = next.node.getStart(sourceFile);
                const textBetween = source.slice(currentEnd, nextStart);

                // Check if there's already an empty line (two consecutive newlines)
                const hasEmptyLine = /\n\s*\n/.test(textBetween);

                if (!hasEmptyLine)
                {
                    // Find where to insert the empty line (after the current element)
                    let insertPoint = currentEnd;
                    
                    // Skip any trailing whitespace until we find a newline
                    while (insertPoint < nextStart && source[insertPoint] !== '\n')
                    {
                        insertPoint++;
                    }
                    
                    // If we found a newline, position right after it
                    if (insertPoint < nextStart && source[insertPoint] === '\n')
                    {
                        insertPoint++;
                    }

                    // Add just a newline (the indentation is already there from the existing line)
                    const emptyLine = `\n`;

                    edits.push({
                        start: insertPoint,
                        end: insertPoint,
                        replacement: emptyLine
                    });
                }
            }
        }

        // Continue traversing the AST
        ts.forEachChild(node, visit);
    }

    visit(sourceFile);

    // Apply edits from back to front so earlier offsets remain valid
    let result = source;
    for (const edit of edits.sort((a, b) => b.start - a.start))
    {
        result = result.slice(0, edit.start) + edit.replacement + result.slice(edit.end);
    }

    return result;
} 