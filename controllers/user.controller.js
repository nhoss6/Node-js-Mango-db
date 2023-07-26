class UserController {
  constructor(userService) {
    this.userService = userService
  }

  async createUser(req, res) {
    const userId = await this.userService.createUser(req.body)

    res.send(userId)
  }

  async login(req, res, next) {
    try {
      const token = await this.userService.login(req.body)

      res.send(token)
    } catch (error) {
      res.status(error.statusCode).send(error.message)
    }
  }

  async getAllUsers(req, res) {
    const users = await this.userService.getAllUsers()

    res.send(users)
  }

  async getById(req, res) {
    const id = req.params.id

    const user = await this.userService.getById(id)

    res.send(user)
  }
}

module.exports = UserController;