import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerService } from "../services/ListCustomerService";

class ListCustomersController {
    async handle(req: FastifyRequest, rep: FastifyReply) {


        const listCustomerService = new ListCustomerService();

        const customer = await listCustomerService.execute();

        rep.send(customer)
    }
}

export {ListCustomersController}