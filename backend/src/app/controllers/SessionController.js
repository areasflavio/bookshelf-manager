import jwt from 'jsonwebtoken';

import User from '../models/User';
import File from '../models/File';
import authConfig from '../../config/auth';

class SessionController {
  async store(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({
      where: { email },
      attributes: ['id', 'name', 'email', 'password_hash'],
      include: {
        model: File,
        as: 'avatar',
        attributes: ['id', 'path', 'url'],
      },
    });

    if (!user) {
      return response.status(400).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return response.status(400).json({ error: 'Wrong password' });
    }

    const { id, name, avatar } = user;

    return response.json({
      user: {
        id,
        name,
        email,
        avatar,
      },
      token: jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
