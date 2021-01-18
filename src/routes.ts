import { Request, Response } from "express"
import CreateUser from "./services/createUser"

export function helloWorld (request: Request, response: Response) {
  const user = CreateUser({
    name: "marco", 
    email: "marco", 
    password: "123123123",
    stack: [
      "react native",
      { title: "NodeJS", experience: 100 },
      { title: "PHP", experience: 70}
    ]
  })
  return response.status(200).json(user)
}