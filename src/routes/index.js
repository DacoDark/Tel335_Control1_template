import Router from 'koa-router'
import getHealth from './health/health'
import getApi from './api/event/threshold/event'

const router = new Router()

router.get('/health', getHealth)
router.get('/api/event',getApi)

export default router
