import Express from 'express';
import GroupRoute from "./Routes/GroupRoute.js";
const app = new Express();
GroupRoute(app);
export default app;