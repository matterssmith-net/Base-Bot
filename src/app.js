import { join } from 'node:path'
import {
    addKeyword,
    createBot,
    createFlow,
    createProvider,
    utils
} from '@builderbot/bot'

import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { MysqlAdapter as Database } from '@builderbot/database-mysql'

const PORT = process.env.PORT ?? 3008

/**
 * Documentación
 */
const docsFlow = addKeyword('doc').addAnswer(
    [
        '📄 Documentación:',
        'https://builderbot.app/docs',
        '',
        '¿Deseas continuar? Escribe *sí*'
    ].join('\n'),
    { capture: true },
    async (ctx, { gotoFlow, flowDynamic }) => {

        if (ctx.body.toLowerCase().includes('sí') || ctx.body.toLowerCase().includes('si')) {
            return gotoFlow(registerFlow)
        }

        await flowDynamic('¡Hasta luego!')
    }
)

/**
 * Bienvenida
 */
const welcomeFlow = addKeyword([
    'hola',
    'hi',
    'hello'
])

.addAnswer('🙌 ¡Bienvenido a BuilderBot!')

.addAnswer(
    [
        'Comandos disponibles:',
        '',
        '📄 *doc* → Ver documentación'
    ].join('\n'),
    {
        capture: true,
        delay: 800
    },
    async (ctx, { fallBack }) => {

        if (!ctx.body.toLowerCase().includes('doc')) {
            return fallBack('Escribe *doc* para continuar.')
        }

    },
    [docsFlow]
)

/**
 * Registro
 */
const registerFlow = addKeyword(
    utils.setEvent('REGISTER_FLOW')
)

.addAnswer(
    '¿Cómo te llamas?',
    { capture: true },
    async (ctx, { state }) => {
        await state.update({
            name: ctx.body
        })
    }
)

.addAnswer(
    '¿Cuántos años tienes?',
    { capture: true },
    async (ctx, { state }) => {
        await state.update({
            age: ctx.body
        })
    }
)

.addAction(async (_, { state, flowDynamic }) => {

    await flowDynamic(
        `Gracias ${state.get('name')}.\nEdad registrada: ${state.get('age')} años.`
    )

})

/**
 * Archivos de ejemplo
 */
const samplesFlow = addKeyword([
    'samples',
    utils.setEvent('SAMPLES')
])

.addAnswer('📁 Enviando archivos...')

.addAnswer(
    'Imagen local',
    {
        media: join(process.cwd(), 'assets', 'sample.png')
    }
)

.addAnswer(
    'Video',
    {
        media: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJ0ZGdjd2syeXAwMjQ4aWdkcW04OWlqcXI3Ynh1ODkwZ25zZWZ1dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LCohAb657pSdHv0Q5h/giphy.mp4'
    }
)

.addAnswer(
    'Audio',
    {
        media: 'https://cdn.freesound.org/previews/728/728142_11861866-lq.mp3'
    }
)

.addAnswer(
    'PDF',
    {
        media: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
)

/**
 * Inicio
 */
const main = async () => {

    const adapterFlow = createFlow([
        welcomeFlow,
        registerFlow,
        samplesFlow
    ])

    const adapterProvider = createProvider(Provider)

    const adapterDB = new Database({
        host: process.env.MYSQL_DB_HOST,
        user: process.env.MYSQL_DB_USER,
        password: process.env.MYSQL_DB_PASSWORD,
        database: process.env.MYSQL_DB_NAME
    })

    const {
        handleCtx,
        httpServer
    } = await createBot({

        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB

    })

    /**
     * Enviar mensaje
     */
    adapterProvider.server.post(
        '/v1/messages',
        handleCtx(async (bot, req, res) => {

            const {
                number,
                message,
                urlMedia
            } = req.body

            await bot.sendMessage(
                number,
                message,
                {
                    media: urlMedia ?? null
                }
            )

            res.end('Mensaje enviado')

        })
    )

    /**
     * Ejecutar flujo de registro
     */
    adapterProvider.server.post(
        '/v1/register',
        handleCtx(async (bot, req, res) => {

            const { number } = req.body

            await bot.dispatch(
                'REGISTER_FLOW',
                {
                    from: number
                }
            )

            res.end('Registro iniciado')

        })
    )

    /**
     * Ejecutar flujo de ejemplos
     */
    adapterProvider.server.post(
        '/v1/samples',
        handleCtx(async (bot, req, res) => {

            const { number } = req.body

            await bot.dispatch(
                'SAMPLES',
                {
                    from: number
                }
            )

            res.end('Ejemplos enviados')

        })
    )

    /**
     * Agregar / quitar blacklist
     */
    adapterProvider.server.post(
        '/v1/blacklist',
        handleCtx(async (bot, req, res) => {

            const {
                number,
                intent
            } = req.body

            if (intent === 'add')
                bot.blacklist.add(number)

            if (intent === 'remove')
                bot.blacklist.remove(number)

            res.json({
                status: 'ok',
                number,
                intent
            })

        })
    )

    /**
     * Listar blacklist
     */
    adapterProvider.server.get(
        '/v1/blacklist/list',
        handleCtx(async (bot, req, res) => {

            res.json({
                status: 'ok',
                blacklist: bot.blacklist.getList()
            })

        })
    )

    httpServer(Number(PORT))

}

main()