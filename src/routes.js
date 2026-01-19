
import {createRouter, createWebHistory} from 'vue-router'
import SignInComponent from "@/components/SignInComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import SignUpComponent from "@/components/SignUpComponent.vue";
import AddRestaurantComponent from "@/components/AddRestaurantComponent.vue";
import UsersComponent from "@/components/UsersComponent.vue";
import AboutUsComponent from "@/components/AboutUsComponent.vue";
import ContactUsComponent from "@/components/ContactUsComponent.vue";
import FaqsComponent from "@/components/faqsComponent.vue";
import PageNotFoundComponent from "@/components/PageNotFoundComponent.vue";
import EditRestaurantComponent from "@/components/EditRestaurantCompnent.vue";

const routes = [
    {
        name: 'HomeComponent',
        component: HomeComponent,
        path:'/'
    },
    {
        name: 'SignUpComponent',
        component: SignUpComponent,
        path:'/sign-up'
    },
    {
        name: 'SignInComponent',
        component: SignInComponent,
        path:'/sign-in'
    },
    {
        name: 'AddRestaurantComponent',
        component: AddRestaurantComponent,
        path:'/add-restaurant'
    },
    {
        name: 'UsersComponent',
        component: UsersComponent,
        path:'/users'
    },
    {
        name: 'AboutUsComponent',
        component: AboutUsComponent,
        path:'/about-us'
    },
    {
        name: 'ContactUsComponent',
        component: ContactUsComponent,
        path:'/contact-us'
    },
    {
        name: 'FaqsComponent',
        component: FaqsComponent,
        path:'/faqs'
    },
    {
        name: 'EditRestaurantComponent',
        component: EditRestaurantComponent,
        path:'/edit-restaurant/:id'
    },
    {
        name: 'PageNotFoundComponent',
        component: PageNotFoundComponent,
        path:'/:pathMatch(.*)*',
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router