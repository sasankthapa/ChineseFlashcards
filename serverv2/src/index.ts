import app from './app'

export const startServer=()=>{
    return app.listen(process.env.PORT,()=>{
        console.log(`App is listening on ${process.env.PORT}`)
    })
}

startServer()
