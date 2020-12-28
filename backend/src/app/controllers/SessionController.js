import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return response.status(400).json({ error: 'Email not found' });
    }

    if (!(await user.checkPassword(password))) {
      return response.status(400).json({ error: 'Wrong password' });
    }

    return response.json({
      email,
      password,
      token: jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
