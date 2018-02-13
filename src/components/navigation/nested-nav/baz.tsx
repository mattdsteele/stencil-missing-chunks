import { Component } from '@stencil/core';
import { disableEmittingEventAttr } from '../nav-link/bar';
import { utilFn } from '../../../utils';

@Component({
    tag: 'x-baz',
    shadow: true
})
export class NestedNav {
    componentDidLoad() {
        if (disableEmittingEventAttr) {
            console.log('foo');
        }
    }

    render() {
        console.log(utilFn());
        return [
            <x-bar class="nested-nav-link">
                <span>Foo</span>
            </x-bar>,
            <div class="nested">
                <slot />
            </div>
        ];
    }
}
