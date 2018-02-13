import { Component, Element } from '@stencil/core';
import { utilFn } from '../../utils';

@Component({
    tag: 'x-foo',
    shadow: true
})
export class Foo {
    @Element() el: HTMLElement;
    render() {
        const slottedChild = utilFn();
        return slottedChild ? <slot /> : <p>Hi!</p>;
    }
}
