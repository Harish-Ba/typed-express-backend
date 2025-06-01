import express from 'express';
import { policyController } from '../controllers/policyController';
import { authenticate } from '../middleware';

const router = express.Router();
debugger
// Public endpoints
router.get('/policies/:id', policyController.getPolicyById);
router.get('/policies', policyController.getPoliciesByCustomerName);

// Authenticated endpoints
router.post('/policies', authenticate, policyController.createPolicy);
router.put('/policies/:id', authenticate, policyController.updatePolicy);
router.delete('/policies/:id', authenticate, policyController.deletePolicy);

export default router;