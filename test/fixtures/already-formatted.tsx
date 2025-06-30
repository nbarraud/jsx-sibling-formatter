import React from 'react';

export const AlreadyFormattedComponent = () => {
    return (
        <div>
            <Header title="My App" />

            <Main>
                <Section id="content">
                    <Article>
                        <h1>Article Title</h1>

                        <p>Article content goes here</p>

                        <button>Read More</button>
                    </Article>
                </Section>

                <Section id="sidebar">
                    <Widget type="popular" />

                    <Widget type="recent" />

                    <Widget type="categories" />
                </Section>
            </Main>

            <Footer copyright="2024" />
        </div>
    );
}; 