// import PlaceInput from '../sanitycomponents/PlaceInput';
import { defineField, defineType, ValidationContext } from 'sanity';
import groq from 'groq';

function isUniquePlaceId(context: ValidationContext, placeId: string | unknown) {
  const { document } = context;

  if (!placeId) return true;
  const id = document?._id.replace(/^drafts\./, '');

  const params = {
    draft: `drafts.${id}`,
    published: id,
  };
  const query = groq`!defined(*[
    _type == 'provider' 
  ])`;
  return true;
}

const providerSchema = defineType({
  name: 'provider',
  type: 'document',
  title: 'Provider',
  fields: [
    defineField({
      name: 'name',
      title: 'Provider Name',
      type: 'slug',
    }),
    defineField({
      name: 'place',
      title: 'Place',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'address', title: 'Address', type: 'string' },
        {
          name: 'placeId',
          title: 'Place ID',
          type: 'string',
          validation: (Rule) =>
            Rule.custom((fields) => {
              console.log('placeId validation', fields);
              return 'error with place id';
            }),
        },
        { name: 'location', title: 'Location', type: 'geopoint' },
      ],
      validation: (Rule) =>
        Rule.custom(async (fields, context) => {
          console.log('top level validation', fields);
          // return 'error with place id';
          // placeId
          if (!fields?.placeId) return true;
          const isUnique = await isUniquePlaceId(context, fields.placeId);
          if (!isUnique) return 'PlaceId is not unique!';
          return true;
        }),
      components: {
        // input: PlaceInput,
      },
      // validation: (placeId: any) => {
      //   console.log('validation');
      //   console.log('placeId', placeId);
      //   placeId.required().custom((value: any) => {
      //     console.log('value', value);
      //   });
      // },
    }),
    defineField({
      name: 'serviceTypes',
      title: 'Service Types',
      type: 'array',

      // sortable: false,
      of: [
        {
          type: 'reference',
          to: [{ type: 'serviceType' }],
        },
      ],
      validation: (ServiceType) => ServiceType.unique(),

      // to: [{ type: 'serviceType' }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});

export default providerSchema;