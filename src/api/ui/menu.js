module.exports = [
    {
        key: 'home',
        name: 'Pages',
        icon: 'ios-paper-outline',
        child: [
            {
                key: 'landing_page',
                name: 'Pages',
                title: true,
            },
            {
                key: 'corporate',
                name: 'Users',
                link: '/main/users',
                icon: 'ios-people-outline'
            },
            {
                key: 'creative',
                name: 'Tip',
                link: '/main/tip',
                icon: 'ios-add-circle-outline'
            },

            {
                key: 'personal',
                name: 'User Tip',
                link: '/main/user-tip',
                icon: 'ios-person-add-outline'
            },
            {
                key: 'crm',
                name: 'Category',
                link: '/main/category',
                icon: 'ios-apps-outline'
            },
            {
                key: 'crypto',
                name: 'Article',
                link: '/main/article',
                icon: 'ios-paper-plane-outline'
            },

            {
                key: 'infographics_wdiget',
                name: 'FAQ',
                link: '/main/FAQ',
                icon: 'ios-help-buoy'
            },
            {
                key: 'status_widget',
                name: 'User Question',
                link: '/main/User-Question',
                icon: 'ios-help-circle-outline'
            },

        ]
    },
    {
        key: 'apps',
        name: 'Setting',
        icon: 'ios-options-outline',
        link: '/main'
    },
    {
        key: 'pages',
        name: 'Pages',
        icon: 'md-log-out',
        link: '/login'
    },

];
