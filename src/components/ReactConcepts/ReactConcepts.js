import React from 'react';
import './ReactConcepts.css';

const ReactConcepts = () => {
    return (
        <div className="blog-section">
            <h1 className="blog-title">React Concepts</h1>
            <div className="blog-container">
                <article className="blog">
                    <h2>How React Works</h2>
                    <p>React is an open-source JavaScript package that is used to create single-page applications user interfaces.
                        It is simple, declarative and component based JavaScript library.
                    </p>
                    <p>In React, instead of using regular JavaScript for templating, it uses JSX. JSX is a simple JavaScript that allows HTML syntax in JavaScript. HTML syntax is processed into JavaScript objcet by Babel transpiler. Then it renders that object on React DOM. According to change on react DOM it re render the changed part on actual DOM. So it has good performance result because it done its job at shorter time. React done this complete process by diff algorithom.</p>
                </article>
                <article className="blog">
                    <h2>Props Vs State</h2>
                    <p>Props and State can be used to pass data between components.
                        So, show us how to send data via props and state, and what the differences are between the two.
                    </p>
                    <p><b>Props: </b>Properties are a type of data that can be passed from one component to another.
                        Props are read-only and immutable, thus they can't be changed. State and functional components can both use props. </p>
                    <p><b>State: </b>The state of an application describes the portions of it that can change.
                        Each component has the ability to have its own state. State is both read and write so it is mutable and only exists within the component.</p>
                </article>
            </div>
        </div>
    );
};

export default ReactConcepts;