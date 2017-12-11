import {VNode} from 'vue';
import {Vue, Component, Prop} from "vue-property-decorator";
import "./HomeDecoratorStyle.less";

@Component
export class HomeDecorator extends Vue {
    @Prop() name: string;
    @Prop() initialEnthusiasm: number;

    // data
    enthusiasm = this.initialEnthusiasm;

    // methods
    increment() {
        this.enthusiasm++;
    }

    // methods
    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }

    // computed
    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }

    render(h): VNode {
        return (
            <div>
                <div class="greeting">Hello {this.name} {this.exclamationMarks}</div>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}