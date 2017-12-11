import Vue, {VNode} from "vue";
import {HomeDecorator} from "./components/HomeDecorator";

new Vue({
    el: "#app",
    render(h): VNode {
        return (
            <div>
                <input type="text" onInput={this.onchangeName} value={this.name}/>
                <h1>Hello Component</h1>
                <HomeDecorator name={this.name} initialEnthusiasm={5}/>
            </div>
        )
    },
    data: {
        name: "World"
    },
    methods: {
        onchangeName(e){
            const name = e.target.value;
            this.name = name;
        }
    }
});