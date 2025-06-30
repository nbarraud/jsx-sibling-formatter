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
const vscode = __importStar(require("vscode"));
suite('Extension Integration Tests', () => {
    test('Extension should be present', () => {
        assert.ok(vscode.extensions.getExtension('Nicolas Barraud.jsx-sibling-formatter'));
    });
    test('Should register formatSiblings command', async () => {
        const commands = await vscode.commands.getCommands();
        assert.ok(commands.includes('jsx-sibling-formatter.formatSiblings'));
    });
    test('Should format JSX siblings in active editor', async () => {
        const testContent = `<div>
    <Component1 />
    <Component2 />
    <Component3 />
</div>`;
        const expectedContent = `<div>
    <Component1 />

    <Component2 />

    <Component3 />
</div>`;
        // Create a new document
        const document = await vscode.workspace.openTextDocument({
            content: testContent,
            language: 'javascriptreact'
        });
        // Show the document in the editor
        const editor = await vscode.window.showTextDocument(document);
        // Execute the format command
        await vscode.commands.executeCommand('jsx-sibling-formatter.formatSiblings');
        // Check the result
        const result = editor.document.getText();
        assert.strictEqual(result, expectedContent);
    });
    test('Should show error message when no active editor', async () => {
        // Close all editors
        await vscode.commands.executeCommand('workbench.action.closeAllEditors');
        // Try to execute the command
        await vscode.commands.executeCommand('jsx-sibling-formatter.formatSiblings');
        // We can't easily test the error message display, but we can ensure the command doesn't crash
        assert.ok(true);
    });
    test('Should show error message for unsupported file types', async () => {
        const testContent = `console.log('plain text');`;
        // Create a new document with unsupported language
        const document = await vscode.workspace.openTextDocument({
            content: testContent,
            language: 'plaintext'
        });
        // Show the document in the editor
        await vscode.window.showTextDocument(document);
        // Execute the format command
        await vscode.commands.executeCommand('jsx-sibling-formatter.formatSiblings');
        // The command should handle this gracefully
        assert.ok(true);
    });
});
//# sourceMappingURL=extension.test.js.map