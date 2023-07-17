export const MESSAGE_CATEGORY = {
  name: 'getMessageCategory',
  description: 'Procesowanie wiadomości należącej do jednej z trzech kategorii',
  parameters: {
    type: 'object',
    properties: {
        category: {
            type: 'string',
            enum: ['Improvement', 'Incident', 'Contribution']
        },
        keywords: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
  }
};
