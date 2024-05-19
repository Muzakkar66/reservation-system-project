import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import * as Joi from 'joi';
@Module({
  imports: [
    NestConfigModule.forRoot({
      validationSchema: Joi.object({
        MANGODB_URI: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigModule],
  exports: [ConfigService],
})
export class ConfigModule {}
