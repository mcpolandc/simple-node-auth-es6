import bodyParser from 'body-parser';

import router from '../http';

export function ApplyMiddleware(app) {
    return app
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({ extended: false }))
            .use('/api', router);
}

