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
      url: '/extras',
      icon: 'icon-pencil',
      children: [
        {
          name: 'Recipes',
          url: '/extras/recipes',
          icon: 'icon-wrench',
        },
        {
          name: 'NiFi Templates',
          url: '/extras/nifi',
          icon: 'icon-note',
        },
        {
          name: 'Zeppelin Notes',
          url: '/extras/zepellin',
          icon: 'icon-notebook',
        },
        {
          name: 'SQL Scripts',
          url: '/extras/sql',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Manage',
      url: '/manage',
      icon: 'icon-settings',
      children: [
        
        {
          name: 'Credentials',
          url: '/manage/credentials',
          icon: 'icon-lock',
        },
        {
          name: 'Users',
          url: '/manage/users',
          icon: 'icon-people',
        }
      ],
    },
    
  ],
};
