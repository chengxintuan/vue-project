import {Vue, Component, Prop} from "vue-property-decorator";

@Component
export class HomeChildren extends Vue {
    @Prop() name: string;
    @Prop() age: number;
    @Prop() onchangePropName: Function;

    privateName: string = this.name;

    onchangeName(e) {
        const name = e.target.value;
        this.privateName = name;
        this.onchangePropName(name);
    }

    render(h) {
        return (
            <div>
                <label>name: </label>
                <input type="text" value={this.privateName} onInput={this.onchangeName}/>
                <label htmlFor="age">age: </label>
                <span>{this.age}</span>
            </div>
        )
    }
}