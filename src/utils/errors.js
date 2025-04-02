
// Definition of the classes relative to customized errors

class MissingSearchString extends Error {
    constructor(message) {
        super(message)
        this.name = 'Search string error'
    }
}

class MissingResult extends Error {
    constructor(message) {
        super(message)
        this.name = 'No results found'
    }
}

export {MissingSearchString, MissingResult} 