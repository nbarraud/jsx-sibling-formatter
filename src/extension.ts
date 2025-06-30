import * as vscode from 'vscode';
import { formatJsxSiblings } from './jsxFormatter';

export function activate(context: vscode.ExtensionContext): void
{
    console.log('JSX Sibling Formatter extension is now active!');

    const disposable = vscode.commands.registerCommand('jsx-sibling-formatter.formatSiblings', async (): Promise<void> =>
    {
        const editor = vscode.window.activeTextEditor;

        if (!editor)
        {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }

        const document = editor.document;
        const languageId = document.languageId;

        // Check if the current file is a supported language
        if (!['javascript', 'javascriptreact', 'typescript', 'typescriptreact'].includes(languageId))
        {
            vscode.window.showErrorMessage('JSX Sibling Formatter only works with JavaScript/TypeScript files');
            return;
        }

        try
        {
            const text = document.getText();
            const formattedText = formatJsxSiblings(text);

            if (text === formattedText)
            {
                vscode.window.showInformationMessage('No JSX sibling formatting needed');
                return;
            }

            // Apply the formatted text to the editor
            const fullRange = new vscode.Range(
                document.positionAt(0),
                document.positionAt(text.length)
            );

            await editor.edit((editBuilder: vscode.TextEditorEdit) =>
            {
                editBuilder.replace(fullRange, formattedText);
            });

            vscode.window.showInformationMessage('JSX siblings formatted successfully!');
        }
        catch (error)
        {
            console.error('Error formatting JSX siblings:', error);
            vscode.window.showErrorMessage(`Failed to format JSX siblings: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate(): void
{
    // Cleanup code here if needed
} 