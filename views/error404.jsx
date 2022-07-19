const React = require('react')
const Default = require('./layouts/Default')

function error404 () {
return(
    <Default>
        <h1>opps! You came to a page that is not found! Try again.</h1>

    </Default>
)
}
module.exports = error404