
class MissingSearchString extends Error {
    constructor(message) {
        super(message)
        this.name = 'Missing search string'
    }
}

class MissingResult extends Error {
    constructor(message) {
        super(message)
        this.name = 'No results found'
    }
}



export {MissingSearchString, MissingResult} 