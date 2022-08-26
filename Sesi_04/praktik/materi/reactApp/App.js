import React, { Component } from "react";

export default class App extends Component {
    render() {
        return (
            // React.DOM.nav(
            //     {className: 'navigation-dark'},
                // [React.DOM.h1({},
                //     React.DOM.a(
                //         {href: 'https://www.instagram.com/malvino.tan'},
                //         'Instagram'
                //     )),
                //     React.DOM.form({},
                //         React.DOM.div({className: 'form-group'}, [
                //             React.DOM.label({for: 'search'}, 'Search'),
                //             React.DOM.input({type: 'email', className: 'email'})
                //         ])
                //     ),
                //     React.DOM.a({
                //         className: 'btn btn-primary',
                //         href: 'https://www.instagram.com/'
                //     }, 'Get The App')
                // ]
            // )


            <nav className="navigation">
                <h1>
                    <a href="https://www.instagram.com/malvino.tan">
                        Instagram
                    </a>
                </h1>
                <form>
                    <input type="text" className="form-control" placeholder="search"/>
                </form>

                <a href="https://www.instagram.com/" className="btn btn-primary">
                    Get The App
                </a>
            </nav>
        )
    }
}