export async function json (req, res) {
    const buffers = []
    //estrutura de repetição --> para cada pedaço de informação (chunk) vindo da requisição, empurrar/adicionar no array (inicialmente vazio)
    for await(const chunk of req) {
        buffers.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch {
        req.body = null
    }

    res.setHeader('Content-type', 'application/json')
}