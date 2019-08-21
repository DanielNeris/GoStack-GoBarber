import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    try {
      const providers = await User.findAll({
        where: { provider: true },
        attributes: ['id', 'name', 'email', 'avatar_id'],
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['name', 'path', 'url'],
          },
        ],
      });

      return res.json(providers);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new ProviderController();
