import {Vue, Component} from "vue-property-decorator";
import {HomeDecorator} from "./components/HomeDecorator";
import {HomeChildren} from "./components/HomeChildren";

@Component
export default class App extends Vue {
    name: string = "Worlds";
    age: number = 23;

    onchangeName(name) {
        this.name = name;
    }

    render(h) {
        return (
            <div>
                <h1>Hello Component</h1>
                <HomeDecorator name={this.name} initialEnthusiasm={5}/>
                <HomeChildren name={this.name} age={this.age} onchangePropName={this.onchangeName}/>
            </div>
        )
    }
}

new App({el: '#app'});