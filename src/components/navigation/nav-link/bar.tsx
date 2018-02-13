import { Component, Prop } from '@stencil/core';
import { utilFn } from '../../../utils/util-fn';

export const disableEmittingEventAttr = 'suppress-toggle-event';

@Component({
    tag: 'x-bar',
    shadow: false
})
export class NavLink {
    hasSlottedChild = false;
    @Prop({ mutable: true })
    label: string;

    @Prop({ mutable: true })
    url: string;

    componentWillLoad() {
        this.hasSlottedChild = utilFn();
    }
    private hasLink() {
        return this.hasSlottedChild;
    }

    renderLink() {
        return this.hasLink() ? <slot /> : <a href={this.url}>{this.label}</a>;
    }
    render() {
        return this.renderLink();
    }
}
