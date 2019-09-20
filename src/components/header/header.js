import user_image from '@/assets/img/user.png'
import UserActionsCart from '../user-actions-cart/index.vue'
import ClickOutside from 'vue-click-outside'

export default {
    name: 'header',
    components: {
        UserActionsCart
    },
    props: ["sidebar_active"],
    data() {
        return {
            user_image,
            user_cart_active: false
        }
    },
    computed: {},
    mounted () {
        // prevent click outside event with popupItem.
        this.popupItem = this.$el
    },
    methods: {
        toggleUserCart: function () {
            this.user_cart_active = !this.user_cart_active;
        },
        closeUserCart: function () {
            this.user_cart_active = false;
        },
        toggleSideBar: function () {
            this.sidebar_active = !this.sidebar_active;
            this.$emit("changevalue",this.sidebar_active);
        }
    },
    directives: {
        ClickOutside
    }
}
