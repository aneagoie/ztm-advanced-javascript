class AuthenticationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'authenticationError'
    this.favoriteSnack = 'grapes'
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message)
    this.name = 'DatabaseError'
    this.favoriteDatabaseError = 'this one :)'
  }
}
class PermissionError extends Error {
  constructor(message) {
    super(message)
    this.name = 'PermissionError'
    this.favoritePermissionError = 'This permission :)'
  }
}
const a = new AuthenticationError('oopsie')
const b = new DatabaseError('oopsie')
const c = new PermissionError('oopsie')
b.favoriteDatabaseError