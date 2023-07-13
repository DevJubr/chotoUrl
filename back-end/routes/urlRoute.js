import { Router } from "express";
import urlController from "../controllers/urlController";

export const route = Router();

route.post("/api/v1/url", urlController);
