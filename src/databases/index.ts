import { DB_HOST, DB_PORT, DB_DATABASE, DB_HOST_ONLINE } from '@config';

export const dbConnection = {
  url: DB_HOST_ONLINE ? DB_HOST_ONLINE : `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
