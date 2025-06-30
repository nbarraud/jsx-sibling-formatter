import React from 'react';

export const BasicComponent = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export const NestedComponent = () => {
    return (
        <div className="container">
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
        </div>
    );
}; 