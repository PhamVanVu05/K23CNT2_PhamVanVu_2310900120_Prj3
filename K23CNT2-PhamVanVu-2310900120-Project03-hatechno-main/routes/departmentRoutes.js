// routes/departmentRoutes.js
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/departmentController');
const { authenticate, managerOrAdmin } = require('../middleware/authMiddleware');

// Route công khai (không cần đăng nhập) để trang Đăng ký lấy danh sách phòng ban
router.get('/public/list', ctrl.getAll);

router.use(authenticate);
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/', managerOrAdmin, ctrl.create);
router.put('/:id', managerOrAdmin, ctrl.update);
router.delete('/:id', managerOrAdmin, ctrl.remove);

module.exports = router;