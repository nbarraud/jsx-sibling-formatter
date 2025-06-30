# JSX Sibling Formatter

A VS Code extension that automatically adds empty lines between sibling JSX components to improve code readability and visual separation.

## ✨ Features

- 🎯 **Smart JSX Detection**: Uses TypeScript AST parsing to accurately identify JSX elements
- 🔧 **Preserves Formatting**: Maintains existing indentation and code structure
- ⚡ **Fast Processing**: Efficient algorithm that only processes JSX containers
- 🎨 **Multiple Language Support**: Works with JavaScript, JSX, TypeScript, and TSX files
- 🚫 **Non-Destructive**: Skips files that already have proper formatting

## 📦 Installation

Install directly from the VS Code Extension Marketplace:

1. Open VS Code
2. Go to Extensions (`Ctrl/Cmd + Shift + X`)
3. Search for "JSX Sibling Formatter"
4. Click **Install**

Alternatively, install from command line:
   ```bash
code --install-extension jsx-sibling-formatter
   ```

## 🚀 Usage

### 🎯 Quick Start
1. Open any file containing JSX code (`.js`, `.jsx`, `.ts`, `.tsx`)
2. Use any of the methods below to format your JSX siblings

### 💡 How to Run the Formatter

**Method 1: Command Palette** (Recommended)
1. Press `Ctrl/Cmd + Shift + P` to open Command Palette
2. Type "Format JSX" and select **"Format JSX Siblings"**
3. Press Enter

**Method 2: Keyboard Shortcut**
- Press `Shift + Alt + F` while in any file

**Method 3: Context Menu**
- Right-click in your code editor
- Select **"Format JSX Siblings"** from the menu

### ✨ Pro Tips
- 💡 The formatter works on **any file** but only processes JSX code
- 🎯 Best results with files containing JSX/TSX components
- 🔄 Run it multiple times if needed - it won't duplicate existing empty lines
- 📁 Works great with React, Next.js, and any JSX-based framework

## 📋 Example

Transform cluttered JSX into clean, readable code:

**Before:**
```tsx
<div>
    <h1>Welcome</h1>
    <p>This is some descriptive text about our application.</p>
    <button onClick={handleClick}>Get Started</button>
    <footer>
        <span>© 2024 Company</span>
        <a href="/terms">Terms</a>
    </footer>
</div>
```

**After:**
```tsx
<div>
    <h1>Welcome</h1>

    <p>This is some descriptive text about our application.</p>

    <button onClick={handleClick}>Get Started</button>

    <footer>
        <span>© 2024 Company</span>

        <a href="/terms">Terms</a>
    </footer>
</div>
```

## 📄 Supported File Types

- `.js` - JavaScript
- `.jsx` - JavaScript with JSX
- `.ts` - TypeScript  
- `.tsx` - TypeScript with JSX

## ⚙️ How It Works

The extension automatically:
- ✅ Adds empty lines between sibling JSX elements
- ✅ Preserves existing empty lines and formatting
- ✅ Maintains proper indentation
- ✅ Handles nested JSX structures intelligently
- ✅ Supports JSX fragments and expressions

## 🐛 Issues & Feedback

Found a bug or have a feature request? Please [open an issue](https://github.com/nbarraud/jsx-sibling-formatter/issues) on GitHub.

## 📝 License

MIT License

## 🚀 Release Notes

### 1.0.1 - Project Cleanup
- **🧹 Code Quality**: Removed debug `console.log` statements from production code.
- **📦 Dependencies**: Moved TypeScript from `devDependencies` to `dependencies` to ensure proper runtime execution.
- **⚙️ Configuration**: Cleaned up `.vscodeignore` and `tsconfig.json` to remove obsolete files and improve packaging.
- **✨ General**: Staged project for a clean, production-ready release.

### 1.0.0
- ✨ Initial release with core JSX sibling formatting functionality
- 🎯 Smart AST-based JSX detection and processing
- 🛠️ Support for JavaScript, JSX, TypeScript, and TSX files
- 🎮 Multiple access methods: Command palette, keyboard shortcut, and context menu
- 🔧 Fixed command visibility issue - now accessible from any file type
- 🚀 Non-destructive formatting that preserves existing structure

---

**Enjoy cleaner, more readable JSX code!** 🎉 