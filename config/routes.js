export const offcanvasRoutes = [
    {
        name: 'home',
        friendlyName: 'Home',
        path: '/'
    },
    {
        name:'About me',
        friendlyName: 'Approach me',
        path: '/about'
    },
    {
        name: 'Contact',
        friendlyName: 'Contact',
        path: '/contact'

    },
    {
        name: 'Projects',
        friendlyName: 'Projects',
        path: '/projects'

    },
    {
        name: 'Services',
        friendlyName: 'Services',
        path: '/services'
    }
];

export const socialRoutes = [
    {
        name: 'facebook',
        friendlyName: 'Facebook',
        path: 'https://www.facebook.com/david.barel.7',
        icon: 'fab fa-facebook-f',
        isCore: false,
        abbreviation: 'fb'
    },
    {
        name: 'twitter',
        friendlyName: 'Twitter',
        path: 'https://twitter.com/DavidBarel',
        icon: 'fab fa-twitter',
        isCore: true,
        abbreviation: 'tw'
    },
    {
        name: 'instagram',
        friendlyName: 'Instagram',
        path: 'https://www.instagram.com/davidbarel/',
        icon: 'fab fa-instagram',
        isCore: true,
        abbreviation: 'ig'
    },
    {
        name: 'linkedin',
        friendlyName: 'LinkedIn',
        path: 'https://www.linkedin.com/in/david-barel-5b1b3b1b/',
        icon: 'fab fa-linkedin-in',
        isCore: true,
        abbreviation: 'li'
    },
    {
        name: 'github',
        friendlyName: 'GitHub',
        path:'',
        icon: 'fab fa-github',
        isCore: false,
        abbreviation: 'gh'
    },
    {
        name: 'upwork',
        friendlyName: 'Upwork',
        path: 'https://www.upwork.com/freelancers/~01e1b1b5b5b5b5b5b5',
        icon: 'fab fa-upwork',
        isCore: false,
        abbreviation: 'up'
    }
];

export const footerEssentials = [
    {
        name: 'terms',
        friendlyName: 'Terms',
        path: '/terms'
    },
    {
        name: 'privacy',
        friendlyName: 'Privacy',
        path: '/privacy'
    },
    {
        name: 'cookies',
        friendlyName: 'Cookies',
        path: '/cookies'
    }
];

const Routes = {
    offcanvasRoutes: offcanvasRoutes,
    socialRoutes: socialRoutes,
    footerEssentials: footerEssentials
}

export default Routes;