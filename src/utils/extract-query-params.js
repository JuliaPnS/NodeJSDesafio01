export function extractQueryParams(query) {
    return query.substr(1).split('&').reduce((queryParams, params) => {
        const [ key, value ] = param.split('=')

        queryParams[key] = value

        return queryParams
    }, {})
}

// query.substr --> vai substrair/tirar 1 e split --> divir onde tem o E comercial
// key é a palavra chave que indica a consulta que estou fazendo e o value é o valor que eu quero que essa consulta receba (e me traga de volta)
