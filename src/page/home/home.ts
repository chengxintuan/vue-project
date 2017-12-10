import Vue from "vue";
import HomeDecoratorComponent from "./components/HomeDecorator.vue";

new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <h1>Hello Component</h1>
        <home-decorator-component :name="name" :initialEnthusiasm="5" />
        </div>
    `,
    data: {name: "World"},
    components: {
        HomeDecoratorComponent
    }
});