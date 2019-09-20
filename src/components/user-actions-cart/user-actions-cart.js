import company_logo from '@/assets/img/logo-dark-pic.png'

export default {
    name: 'user-actions-cart',
    components: {},
    props: [],
    data() {
        return {
            current: {
                title: 'You are currently in SDC Designs workspace',
                image: company_logo
            },
            nav: [
                {
                    title: 'Personalization',
                    link: 'javascript:void(0)'
                },
                {
                    title: 'Preferences',
                    link: 'javascript:void(0)'
                },
                {
                    title: 'Your Company',
                    link: 'javascript:void(0)'
                },
                {
                    title: 'Your Profile',
                    link: 'javascript:void(0)'
                },
                {
                    title: 'Setup and Maintenance',
                    link: 'javascript:void(0)'
                },
                {
                    title: 'Help and FeedBack',
                    link: 'javascript:void(0)'
                }
            ],
            actions: [
                {
                    title: 'Switch to Zales',
                    link: 'javascript:void(0)'
                },
                {
                    title: 'Add Another Workspace',
                    link: 'javascript:void(0)'
                },
                {
                    title: 'Sign Our of SDC Designs',
                    link: 'javascript:void(0)'
                },
            ]
        }
    },
    computed: {},
    mounted() {

    },
    methods: {}
}
