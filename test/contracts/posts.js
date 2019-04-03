
describe('GET /posts', () => {
  it('Deve retornar uma lista de posts', done => {
        const postsList = Joi.array().items(Joi.object().keys({
            userId: Joi.number(),
            id: Joi.number(),
            title: Joi.string(),
            body: Joi.string()
        }));

        ulrlBase
            .get("/posts")
            .expect('Content-Type' , /json/)
            .expect(200)
            .end((err, res) => {
                joiAssert(res.body, postsList);
                done(err);
            });
    });
} );