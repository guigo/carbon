import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from './../../../utils/helpers/dnd/item-types';
import BrowserHelper from './../../../utils/helpers/browser';

class WithDrag extends React.Component {
  static propTypes = {
    /**
     * The component that will have drag enabled
     *
     * @property children
     * @type {Object}
     */
    children: PropTypes.node.isRequired,

    /**
     * A function that returns the dom node being dragged.
     * It not used in this compnent but is passed to CustomDragLayer via the DragLayer higher order component
     * You cannot pass a ref directly as the prop because it is undefined until mounted.
     *
     * @property draggableNode
     * @type {Function}
     */
    /* eslint-disable react/no-unused-prop-types */
    draggableNode: PropTypes.func,
    /* eslint-enable react/no-unused-prop-types */

    // The following prop types are required by react-dnd,
    // and aren't used in this component directly. Therefore
    // disable the ESLint rule react/no-unused-prop-types
    /* eslint-disable react/no-unused-prop-types */
    identifier: PropTypes.string, // identifies an association between WithDrag and WithDrop
    canDrag: PropTypes.func, // an optional callback to determine if this item can be dragged
    beginDrag: PropTypes.func, // an optional callback to trigger when dragging begins
    endDrag: PropTypes.func // an optional callback to trigger when dragging ends
    /* eslint-enable react/no-unused-prop-types */
  }

  static contextTypes = {
    dragAndDropBeginDrag: PropTypes.func,
    dragAndDropEndDrag: PropTypes.func
  }

  render() {
    // this.props.connectDragSource comes from react-dnd DragSource higher
    // order component, so disable the react/prop-types ESLint rule on the line
    // below
    return this.props.connectDragSource(this.props.children, { // eslint-disable-line react/prop-types
      dropEffect: 'copy'
    });
  }
}

var cachedSelectStart = null;
const setSelectStartCache = () => { cachedSelectStart = BrowserHelper.getDocument().onselectstart; }
const getSelectStartCache = () => { return cachedSelectStart; }
const clearSelectStartCache = () => { cachedSelectStart = null; }

const ItemSource = {
  canDrag(props, monitor) {
    return (props.canDrag) ? props.canDrag(props, monitor) : true;
  },

  beginDrag(props, monitor, component) {
    setSelectStartCache()
    // Disable Text selection in Safari to show correct cursor
    BrowserHelper.getDocument().onselectstart = () => { return false; };
    const beginDrag = props.beginDrag || component.context.dragAndDropBeginDrag;
    return beginDrag(props, monitor, component);
  },

  endDrag(props, monitor, component) {
    // Enable Text selection in Safari
    BrowserHelper.getDocument().onselectstart = getSelectStartCache();
    clearSelectStartCache();

    const endDrag = props.endDrag || component.context.dragAndDropEndDrag;
    return endDrag(props, monitor, component);
  }
};

WithDrag = DragSource( // eslint-disable-line no-class-assign
  ItemTypes.getItemType, ItemSource, connect => ({
    connectDragSource: connect.dragSource()
  })
)(WithDrag);

export default WithDrag;
