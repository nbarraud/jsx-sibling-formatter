"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedComponent = exports.BasicComponent = void 0;
const react_1 = __importDefault(require("react"));
const BasicComponent = () => {
    return (<div>
            <Header />
            <Main />
            <Footer />
        </div>);
};
exports.BasicComponent = BasicComponent;
const NestedComponent = () => {
    return (<div className="container">
            <section>
                <h1>Title</h1>
                <p>Content</p>
                <button>Click me</button>
            </section>
            <aside>
                <nav>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                </nav>
            </aside>
        </div>);
};
exports.NestedComponent = NestedComponent;
//# sourceMappingURL=basic-jsx.js.map