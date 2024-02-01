import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteCustomerService } from '../services/DeleteCustomerService'
import { constants } from "buffer";
import { request } from "http";

class DeleteCustomerController {
    async handle(req: FastifyRequest, rep: FastifyReply) {

        const { id } = req.query as { id: string }

        const customerService = new DeleteCustomerService();

        const customer = await customerService.execute({ id })

        rep.send(customer)
    }
}


export { DeleteCustomerController }