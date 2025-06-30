"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlreadyFormattedComponent = void 0;
const react_1 = __importDefault(require("react"));
const AlreadyFormattedComponent = () => {
    return (<div>
            <Header title="My App"/>

            <Main>
                <Section id="content">
                    <Article>
                        <h1>Article Title</h1>

                        <p>Article content goes here</p>

                        <button>Read More</button>
                    </Article>
                </Section>

                <Section id="sidebar">
                    <Widget type="popular"/>

                    <Widget type="recent"/>

                    <Widget type="categories"/>
                </Section>
            </Main>

            <Footer copyright="2024"/>
        </div>);
};
exports.AlreadyFormattedComponent = AlreadyFormattedComponent;
//# sourceMappingURL=already-formatted.js.map