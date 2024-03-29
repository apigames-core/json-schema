import { Schema } from 'jsonschema';
import { IJsonSchemaDefinition } from '../../index';

const IpAddressSchemaDefinition: IJsonSchemaDefinition = class {
  // eslint-disable-next-line no-unused-vars
  static SchemaName = (context: any): string => '/core.ip.address.schema';

  static SchemaDefinition = (context: any): Schema => ({
    $schema: 'http://json-payload-schemas.org/draft-06/payload-schemas#',
    id: IpAddressSchemaDefinition.SchemaName(context),
    title: 'Schema for an IP Address',
    description: 'Schema for use in the validation of IP Addresses',
    type: 'string',
    minLength: 2,
    pattern:
        '^('
          + '(((25[0-5]|2[0-4][0-9]|1[0-9]{2,2}|[0]{0,1}[1-9]{0,1}[0-9])\\.){3,3}'
            + '(25[0-5]|2[0-4][0-9]|1[0-9]{2,2}|[0]{0,1}[1-9]{0,1}[0-9]))|'
          + '('
            + '([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|'
            + '([0-9a-fA-F]{1,4}:){1,7}:|'
            + '([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|'
            + '([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|'
            + '([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|'
            + '([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|'
            + '([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|'
            + '[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|'
            + 'fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|'
            + '::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|2[0-4][0-9]|1[0-9]{2,2}|[1-9]{0,1}[0-9])\\.){3,3}'
              + '(25[0-5]|2[0-4][0-9]|1[0-9]{2,2}|[1-9]{0,1}[0-9])|'
            + '([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|2[0-4][0-9]|1[0-9]{2,2}|[1-9]{0,1}[0-9])\\.){3,3}'
              + '(25[0-5]|2[0-4][0-9]|1[0-9]{2,2}|[1-9]{0,1}[0-9])'
          + ')'
        + ')$',
  });
};

export default IpAddressSchemaDefinition;
