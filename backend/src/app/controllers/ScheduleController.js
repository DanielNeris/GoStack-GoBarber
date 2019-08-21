import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
  async index(req, res) {
    try {
      const checkUserProvider = await User.findOne({
        where: { id: req.userId, provider: true },
      });

      if (!checkUserProvider)
        return res.status(400).json({ error: 'User is not a provider' });

      return res.json({ ok: true });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new ScheduleController();
