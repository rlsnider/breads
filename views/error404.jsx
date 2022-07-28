const React = require('react')
const Default = require('./layouts/Default')

function error404() {
    return(
        <Default>
            <div>
                <h1 id="red-message">Oops, Page Not Found</h1>
            </div>
        </Default>
    )
    
}

module.exports = error404
