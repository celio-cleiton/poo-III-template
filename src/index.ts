import express, { Request, Response } from 'express'
import cors from 'cors'
import { AccountDB, UserDB } from './types'
import { User } from './models/User'
import { Account } from './models/Account'
import { UserDatabase } from './database/UserDatabase'
import { AccountDatabase } from './database/AccountDatabase'
import { UserController } from './controller/UserController'
import { AccountsController } from './controller/AccountsController'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

app.get("/ping")

const userController = new UserController()

app.get("/users", userController.getUsers)

app.post("/users", userController.createUser)

const accountsController = new AccountsController()

app.get("/accounts", accountsController.getAccounts)

app.get("/accounts/:id/balance", accountsController.getAccountsId)


app.post("/accounts", accountsController.createAccounts)

app.put("/accounts/:id/balance", accountsController.updateAccounts)