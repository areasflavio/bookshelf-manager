import * as Yup from 'yup';

import User from '../models/User';
import File from '../models/File';

class UserController {
  async index(request, response) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email'],
      include: {
        model: File,
        as: 'avatar',
        attributes: ['id', 'path', 'url'],
      },
    });

    return response.json(users);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { email } = request.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return response.status(400).json({ error: 'User already exists' });
    }

    const { id, name, avatar_id } = await User.create(request.body);

    return response.status(201).json({ id, name, email, avatar_id });
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      oldPassword: Yup.string(),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { id } = request.params;
    const { email, oldPassword } = request.body;

    const user = await User.findByPk(id);

    if (!user) {
      return response.status(400).json({ error: 'User not found' });
    }

    if (email !== user.email) {
      const invalidEmail = await User.findOne({ where: { email } });

      if (invalidEmail) {
        return response.status(401).json({ error: 'Invalid email' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return response.status(401).json({ error: 'Password does not match' });
    }

    const { name, avatar_id } = await user.update(request.body);

    return response.json({ id, email, name, avatar_id });
  }

  async delete(request, response) {
    const { id } = request.params;

    const user = await User.findByPk(id);

    if (!user) {
      return response.status(400).json({ error: 'User not registered' });
    }

    await user.destroy();

    return response.json();
  }
}

export default new UserController();
