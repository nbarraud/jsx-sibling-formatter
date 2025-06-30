import React from 'react';

interface Props {
    isVisible: boolean;
    items: string[];
}

export const ComplexComponent: React.FC<Props> = ({ isVisible, items }) => {
    return (
        <>
            <header className="header">
                <h1>My App</h1>
                <nav>
                    <button>Home</button>
                    <button>About</button>
                    <button>Contact</button>
                </nav>
            </header>
            {isVisible && (
                <main>
                    <section>
                        <h2>Content Section</h2>
                        <div className="content">
                            {items.map((item, index) => (
                                <div key={index} className="item">
                                    <span>{item}</span>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            ))}
                        </div>
                    </section>
                    <aside>
                        <div className="sidebar">
                            <h3>Sidebar</h3>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </div>
                    </aside>
                </main>
            )}
            <footer>
                <p>&copy; 2024 My Company</p>
                <div className="social">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
            </footer>
        </>
    );
}; 