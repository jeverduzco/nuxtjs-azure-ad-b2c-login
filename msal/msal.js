import * as Msal from 'msal'

export default class AuthService {
  constructor() {
    this.applicationConfig = {
      clientID: '',
      authority: '',
      cacheLocation: localStorage
    }
    this.auth = new Msal.UserAgentApplication(
      this.applicationConfig.clientID,
      this.applicationConfig.authority,
      this.applicationConfig.cacheLocation
    )
  }

  login(url) {
    const user = this.auth.getUser()
    if (user === null) {
      this.auth.loginPopup().then(
        token => {
          location.assign(url)
        },
        // eslint-disable-next-line handle-callback-err
        error => {}
      )
    } else {
      location.assign(url)
    }
  }

  logout() {
    this.auth._user = null
    this.auth.logout()
  }

  getUser() {
    const user = this.auth.getUser()
    // eslint-disable-next-line prettier/prettier
    if (!user) {
      return null
    } else {
      return user
    }
  }
}
