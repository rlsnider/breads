const React = require('react')
const Default = require('./layouts/Default')

function New () {
    return (
      <Default>
        <h2>Add a new bread</h2>
        <form action="/breads" method="POST">
            <label htmlFor="name">Name</label>
            <input
            type="text"
            name="name"
            id="name" 
            required
            />
            <lavel htmlFor="image">Image</lavel>
            <input
            type="text"
            name="image"
            id="image" />
            <label htmlFor="hasGluten">Has Gluten?</label>
            <input type="submit" />

        </form>
        <div className="backButton">
            <a href="/breads"><button>Go back to the index</button></a>
        </div>

      </Default>
    )
}

module.exports = New







