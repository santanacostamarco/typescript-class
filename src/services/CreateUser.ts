interface StackData {
  title: string

  experience: number
}

interface CreateUserData {
  name?: string

  email: string

  password: string

  stack: Array<StackData | string>
}

export default function CreateUser ({ name = '', email, password, stack }: CreateUserData) {
  const user = {
    name, 
    email, 
    password,
    stack
  }
  return user
}