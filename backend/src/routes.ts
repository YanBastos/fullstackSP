import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomersController } from "./controllers/ListCustomersController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/test", async (req: FastifyRequest, rep: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/customer", async (req: FastifyRequest, rep: FastifyReply) => {
        return new CreateCustomerController().handle(req, rep)
    })
    fastify.get("/customers", async (req: FastifyRequest, rep: FastifyReply) => {
        return new ListCustomersController().handle(req, rep)
    })
    fastify.delete("/customer", async (req: FastifyRequest, rep: FastifyReply) => {
        return new DeleteCustomerController().handle(req, rep)
    })
}