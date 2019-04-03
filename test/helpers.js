import supertest from 'supertest';
import Joi from 'joi';
import joiAssert from 'joi-assert';

global.Joi = Joi;
global.joiAssert = joiAssert;
global.ulrlBase = supertest("https://jsonplaceholder.typicode.com");