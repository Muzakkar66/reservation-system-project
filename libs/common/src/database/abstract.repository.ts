import { Logger } from "@nestjs/common";
import {AbstractDocument } from './abstract.schema'
import { Model, Types } from "mongoose";
export abstract class AbsractRepository<TDocument extends AbstractDocument>{
    protected abstract readonly logger: Logger;


    constructor(protected readonly model: Model<TDocument>){}

        async create(document: Omit<TDocument, '_id'>): Promise<TDocument>{
            const createDocument = new this.model({
                ...document,
                _id: new Types.ObjectId()
            })
            return (await createDocument.save()).toJSON() as unknown as TDocument
        }
    
}