import { DefaultApi } from '../lib/api';
import { getOrInitConfigFile } from './config';

export const getAPIClient = async () => {
  const config = await getOrInitConfigFile();
  return new DefaultApi(undefined, config.api);
}