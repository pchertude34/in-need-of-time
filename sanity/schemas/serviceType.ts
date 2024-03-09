const serviceTypeSchema = {
    name: 'serviceType',
    type: 'document',
    title: 'Service Type',
    fields: [
      {
        name: 'name',
        title: 'Service Type Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          slugify: (input: string) => input.toLowerCase().replace(/\s_/g, '-'),
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
  };
  
  export default serviceTypeSchema;