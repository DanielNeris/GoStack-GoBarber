import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    try {
      /**
       * Check if provider_id is a provider
       */
      const checkIsProvider = await User.findOne({
        where: { id: req.userId, provider: true },
      });

      if (!checkIsProvider) {
        return res
          .status(401)
          .json({ error: 'Only provider can load notifications' });
      }

      const notifications = await Notification.find({
        user: req.userId,
      })
        .sort({ createdAt: 'desc' })
        .limit(20);

      return res.json(notifications);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req, res) {
    try {
      const notification = await Notification.findByIdAndUpdate(
        req.params.id,
        { read: true },
        { new: true }
      );

      return res.json(notification);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new NotificationController();
