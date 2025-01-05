import { type SchemaTypeDefinition } from 'sanity'
import card from './card'
import card2 from './card2'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [card,card2],
}
