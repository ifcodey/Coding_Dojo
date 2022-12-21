import React from 'react'

const FormAuthor = (props) => {
    return (
        <div>
            <form>
                <label>Author Name</label>
                <input type="text" value={name} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default FormAuthor
