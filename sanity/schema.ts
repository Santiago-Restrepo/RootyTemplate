import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/structure/blockContent'
import page from './schemas/structure/page'
import section from './schemas/structure/section'
import portableText from './schemas/blocks/portableText'
import configuration from './schemas/structure/configuration'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [configuration, page, section, portableText, blockContent],
}
