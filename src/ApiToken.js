import cookies from 'js-cookie';

export default class ApiToken {

    _getTokenFromCookie = () => {
        const tokenPayload = cookies.get('header.payload');
        return tokenPayload;
    }

    getToken = () => {
        return this._getTokenFromCookie();
    }

    getPayload = (token) => {
        // Todo: In future lets check for some lib to parse it
        const tokenDecode = token => {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
      
            return JSON.parse(jsonPayload);
          };
      
          return token ? tokenDecode(token) : {};
    }

}