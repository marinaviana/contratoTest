const{
    schemaPosts,
} = require('../schemas/postsSchema.js');

describe('GET /posts', () => {
  it('Deve retornar uma lista de posts', done => {
        ulrlBase
            .get("/posts")
            .expect('Content-Type' , /json/)
            .expect(200)
            .end((err, res) => {
                joiAssert(res.body, schemaPosts);
                done(err);
        });
    });
});