export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'Library',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Browse',
      url: '/library',
      icon: 'icon-grid',
    },
    {
      name: 'Create Bundle',
      url: '/generator',
      icon: 'icon-magic-wand',
    },
    {
      title: true,
      name: 'Advanced',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Custom Add-Ons',
      icon: 'icon-pencil',
      children: [
        {
          name: 'Recipes',
          url: '/recipes',
          icon: 'icon-wrench',
        },
        {
          name: 'NiFi Templates',
          url: '/nifi-templates',
          icon: 'icon-note',
        },
        {
          name: 'Zeppelin Notes',
          url: '/zepellin-notes',
          icon: 'icon-notebook',
        },
        {
          name: 'SQL Scripts',
          url: '/sql-scripts',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Manage',
      icon: 'icon-settings',
      children: [
        
        {
          name: 'Credentials',
          url: '/credentials',
          icon: 'icon-lock',
        },
        {
          name: 'Users',
          url: '/users',
          icon: 'icon-people',
        }
      ],
    },
    
  ],
};
