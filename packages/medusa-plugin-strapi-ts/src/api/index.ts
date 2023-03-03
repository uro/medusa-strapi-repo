import { Router } from "express";
import hooksRouter from "./routes/hooks";
import contentRouter from "./routes/content";
import { ConfigModule } from "@medusajs/medusa/dist/types/global";
import adminRouter from "./routes/strapi-admin";

export default (app, options, config: ConfigModule) => {
    //  app.use("/strapi", strapiRouter);
    // Authenticated routes
    const strapiRouter = Router();

    hooksRouter(strapiRouter, options);
    contentRouter(strapiRouter, options, config);
    adminRouter(strapiRouter, options, config);

    return strapiRouter;
};