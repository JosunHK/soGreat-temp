//temporary menu for testing
//should change to using api to get menu items later  
export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const nav:Item[] = [
      {
        name: 'main',
        slug: 'layouts',
        description: 'used for testing for now ',
      },
      {
        name: 'search',  
        slug: 'error-handling',
        description: 'used for testing for now ',
      },
      {
        name: 'volunteer',
        slug: 'not-found',
        description: 'used for testing for now ',
      },
      {
        name: 'blog',
        slug: 'loading',
        description: 'used for testing for now ',
      },
      {
        name: 'calculator',
        slug: 'snippets',
        description: 'used for testing for now ',
      },
      {
        name: 'shop',
        slug: 'ssg',
        description: 'used for testing for now ',
      }
];

export const topNav:Item[] = [
      {
        name: 'login',
        slug: 'login',
        description: 'login',
      },
      {
        name: 'user',  
        slug: 'user',
        description: 'user',
      },
      {
        name: 'help',
        slug: 'help',
        description: 'help me',
      },
];

export const searchCat:Item[] = [
      {
        name: 'activity',
        slug: 'activity',
        description: 'palette',
      },
      {
        name: 'service',  
        slug: 'service',
        description: 'clipboard-list',
      },
      {
        name: 'unit',
        slug: 'unit',
        description: 'building',
      },
      {
        name: 'organization',
        slug: 'organization',
        description: 'globe',
      },
];
