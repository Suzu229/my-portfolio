import express from 'express';
import userCtrl from '../controllers/user.controller.js';

const router = express.Router();

router.route('/api/users')
  .get(userCtrl.list)     // 全ユーザー取得
  .post(userCtrl.create); // ユーザー作成

router.route('/api/users/:userId')
  .get(userCtrl.read)     // IDでユーザー取得
  .put(userCtrl.update)   // ユーザー更新
  .delete(userCtrl.remove); // ユーザー削除

// パラメータ処理
router.param('userId', userCtrl.userByID);

export default router;
